/**
 * api.ts
 * Returns the api that will be used to create the http server
 *
 */
import * as Koa from 'koa';
import * as KoaLogger from 'koa-logger';
import router from './router';

export default class Server {
    public koa: Koa;
    public port;
    constructor() {
        // Abstract as config

        this.port = process.env.PORT || 3000;
        this.koa = new Koa();
        this.koa.use(KoaLogger());
        this.koa.use(router.routes());
    }
    async start() {
        return new Promise((resolve) => {
            const http = this.koa
                .listen(this.port, () => {
                    const port = http.address().port;
                    console.log(`Listening at port ${port}`);
                });
        });
    }

}