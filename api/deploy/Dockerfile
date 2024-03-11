FROM node:18
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
#COPY source/package*.json ./

# Copy all files and directories from source/ to the root of the container
COPY --chown=node:node source/ ./

#USER node
RUN npm install
COPY --chown=node:node . .

EXPOSE 9007
EXPOSE 9008
CMD ["node", "--max-old-space-size=4168", "source/bin/www"]
