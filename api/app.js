let createError = require("http-error");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
const logger = require('./src/logger/api.logger');

const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");
const swaggerServers = require("./src/dataSource/swaggerUi/servers.json");
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description: "This is a simple CRUD API application made with Express and documented with Swagger",
      contact: {
        name: "Desired",
        url: "https://his-tech.tech/",
        email: "desirkomla@gmail.com",
      },
    },
    consumes: [
      "application/json"
    ],
    produces: [
      "application/json"
    ],
    servers: swaggerServers,
  },
  apis: ["source/src/swaggers/*.js", "./src/swaggers/*.js"],
};
const specs = swaggerJsdoc(options);

// Get env access
require('dotenv').config()

const myTimeout = setTimeout(async () => {
  // SOme CRON ...
  // OR SOME FUNCTION WE WANT TO CALL HERE
  /*const packageRepository = require('./src/repositories/package.repository');
  await packageRepository.delete('65dde4e8158cb43fda3e304e');
  await packageRepository.getAll();*/

  // const deliveryRepository = require('./src/repositories/delivery.repository');
  // await deliveryRepository.delete('65dde4e8158cb43fda3e304e');
  // await deliveryRepository.getAll();
}, 1500);

const cors = require('cors');
let app = express();
app.use(cors());

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
      explorer: true,
      // customCssUrl: "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
    })
);

// Enable CORS in express.js
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
    // allowed XHR methods
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    res.send();
  });
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


const config = require('./src/config/db.config.json')
const getPublicFolder = (env) => {
  if (!(env in config)) return 'output/public'

  return 'output/' + config[env]["publicFolder"]
}

app.use(express.static(path.join(__dirname, getPublicFolder(process.env.NODE_ENV))));

app.use(process.env.OUTPUT_URL, express.static(path.join(__dirname, 'output')));//
app.use(process.env.UPLOADS_URL, express.static(process.env.UPLOADS))

require('./src/routes/all_routes.routes')(app);
// require('./src/api/routes/all_routes.routes')(app);

// database
const { connect } = require('./src/models');
connect();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
