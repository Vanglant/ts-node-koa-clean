/**
 * Account resource should return the routes
 */
import * as Router from 'koa-router';

const options: Router.IRouterOptions = { prefix: 'users' };
const router = new Router(options);

router.get('/accounts', (ctx, next) => {
    ctx.body = 'Hello World';
});

export default router;