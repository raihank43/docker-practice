FROM node

# Create app directory
WORKDIR /usr/src/app

ENV PORT=3000

# Install app dependencies
COPY package*.json package-lock.json ./usr/src/app/

## Install npm & menghapus cache
RUN npm install && npm cache clean --force

## Install nodemon
RUN npm install -g nodemon

# Bundle app source
COPY ./ ./

CMD [ "npm", "run", "dev" ]
