import { Container } from 'inversify';
import TYPES from './types';
import { AccountController } from '../interfaces/http/rest/controllers/account.controller';
import { interfaces, TYPE } from 'inversify-koa-utils';
import { UserService } from '../app/user/user.service';

const container = new Container();
container.bind<interfaces.Controller>(TYPE.Controller).to(AccountController).whenTargetNamed('AccountController');
container.bind<UserService>(TYPES.UserService).to(UserService);
// container.bind<AddressRepository>(TYPES.AddressRepository).to(AddressRepositoryImplMongo);
// container.bind<AddressRepository>(TYPES.AddressRepository2).to(AddressRepositoryImplDb);

export default container;