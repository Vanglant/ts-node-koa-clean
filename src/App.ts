import * as express from 'express';

class App {
    public express;

    constructor() {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes(): void {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json({
                message: 'asaa pasa coleguic'
            })
        })
        this.express.use('/', router);
    }
}

export default new App().express;