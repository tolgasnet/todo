const express = require('express');
const app = express();

const route = (route, filePath) => {
    app.get(route, (request, response) => {
        response.sendFile(filePath, { root: __dirname });
    });
};

const serveStatic = (relativePath) => {
    if (!relativePath.startsWith('/')) {
        relativePath = '/' + relativePath;
    }

    app.use(express.static(`${__dirname}${relativePath}`));
};

const listen = (port, message) => {
    app.listen(port, () => {
        console.log(message);
    });    
};

module.exports = {
    route,
    serveStatic,
    listen
};