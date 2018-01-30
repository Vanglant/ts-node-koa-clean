/**
 * api.ts
 * Returns the api that will be used to create the http server
 *
 */
import * as Koa from 'koa';
const logger = require('koa-logger')

// import * as Router from 'koa-router';
import accountResource from './routes/account';

class Api {
    public app: Koa;

    constructor() {
        this.app = new Koa();
        this.app.use(accountResource); // Add AccountResource routes as middleware
        this.app.use(async (ctx, next) => {
            console.log('Url:', ctx.url);
            await next();
        });
        this.app.use(logger);
    }
}

export default new Api().app;