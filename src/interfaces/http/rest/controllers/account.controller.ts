/**
 * Account resource should return the routes
 */
import * as Router from 'koa-router';
import { UserService } from '../../../../app/user/user.service';

const options: Router.IRouterOptions = { prefix: 'users' };
const router = new Router(options);

router.get('/accounts', (ctx, next) => {
    ctx.body = 'Hello World';
});

router.get('/', async (ctx) => {
    // TODO: CHANGE THIS
    const userService = new UserService();
    try {
        const users = await userService.getAllUsers();
        ctx.body = {
            status: 'success',
            data: users
        };
    } catch (err) {
        console.log(err)
    }
});

export default router;