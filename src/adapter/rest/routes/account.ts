/**
 * Account resource should return the routes
 */
import * as Router from 'koa-router';

const router = new Router();

router.get('/accounts', (ctx, next) => {
    ctx.body = 'Hello World';
});

export default router.middleware();