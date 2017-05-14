const express = require('express');
const app = express();

const route = (route, file) => {
    app.get(route, (request, response) => {
        response.sendFile(file, { root: __dirname });
    });
};

const listen = (port, message) => {
    app.listen(port, () => {
        console.log(message);
    });    
};

module.exports = {
    route,
    listen
};