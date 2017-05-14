const serverAdapter = require('./server-adapter');
const controllerRegistry = require('./controller-registry.json');

(function addControllers() {
    for (let controllerPath of controllerRegistry.controllers) {
        const controller = require(controllerPath);
        const routeOptions = controller.routeOptions;
        serverAdapter.route(
            routeOptions.path, 
            `${controllerPath}/${routeOptions.file}`);
        
        serverAdapter.serveStatic(controllerPath);
    }
})();

(function start() {
    const port = 3000;
    serverAdapter.listen(port, `running at http://localhost:${port}`);
})();