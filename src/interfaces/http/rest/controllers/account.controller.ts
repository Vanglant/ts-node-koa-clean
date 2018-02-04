/**
 * Account resource should return the routes
 */
import { controller, httpGet, interfaces } from 'inversify-koa-utils';
import * as Router from 'koa-router';
import { inject, injectable } from 'inversify';
import { UserService } from '../../../../app/user/user.service';
import TYPES from '../../../../config/types';

@injectable()
@controller('/users')
export class AccountController implements interfaces.Controller {
    constructor(@inject(TYPES.UserService) private userService: UserService) {
    }
    @httpGet('/default')
    private default(ctx: Router.IRouterContext, next: () => Promise<any>) {
        ctx.body = {
            data: 'prueba'
        }
    }
    @httpGet('/')
    private async index(ctx: Router.IRouterContext, next: () => Promise<any>) {
        try {
            const users = await this.userService.getAllUsers();
            ctx.body = {
                status: 'success',
                data: users
            }
        } catch (err) {
            console.log(err);
        }

    }
}