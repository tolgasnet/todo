const serverAdapter = require('./server-adapter');
const controllerRegistry = require('./controller-registry.json'); 

(function addRoutes() {
    for (let controllerPath of controllerRegistry.controllers) {
        const controller = require(controllerPath);
        serverAdapter.route(...controller.route);
    }
})();

(function start() {
    const port = 3000;
    serverAdapter.listen(port, `running at http://localhost:${port}`);
})();