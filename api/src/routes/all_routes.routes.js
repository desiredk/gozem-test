'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const getRouteName = (myString) => {
    let finalResult;

    if (myString.toLowerCase().endsWith('y')) {
        finalResult = myString.slice(0, -1) + 'ies';
    } else {
        finalResult = myString + 's';
    }

    return finalResult
}

const allRoutes = [];

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js' &&
            file.indexOf('.test.js') === -1
        );
    })
    .forEach(file => {
        allRoutes.push({ name: `/${getRouteName(file.split('.')[0])}`, routes: require(path.join(__dirname, file)) })
    });

// console.log(" ------- allRoutes : ", allRoutes)

module.exports = function(app) {
    for (let i = 0; i < allRoutes.length; i++) {
        for (let j = 0; j < allRoutes[i].routes.length; j++) {
            if (allRoutes[i].routes[j].method === 'post') {
                app.post(
                    "/api" + allRoutes[i].name + allRoutes[i].routes[j].path,
                    [allRoutes[i].routes[j].middleware],
                    allRoutes[i].routes[j].function
                );
            }

            if (allRoutes[i].routes[j].method === 'put') {
                app.put(
                    "/api" + allRoutes[i].name + allRoutes[i].routes[j].path,
                    [allRoutes[i].routes[j].middleware],
                    allRoutes[i].routes[j].function
                );
            }

            if (allRoutes[i].routes[j].method === 'delete') {
                app.delete(
                    "/api" + allRoutes[i].name + allRoutes[i].routes[j].path,
                    [allRoutes[i].routes[j].middleware],
                    allRoutes[i].routes[j].function
                );
            }

            if (allRoutes[i].routes[j].method === 'get') {
                app.get(
                    "/api" + allRoutes[i].name + allRoutes[i].routes[j].path,
                    [allRoutes[i].routes[j].middleware],
                    allRoutes[i].routes[j].function
                );
            }
        }
    }
};
