import TypeOrmUserRepository from '../../infra/user/typeorm.user.repository';
import { injectable } from 'inversify';

// Hacer interfaz?
@injectable()
export class UserService {
   private userRepository: TypeOrmUserRepository;
   constructor() {
       this.userRepository = new TypeOrmUserRepository();
   }
   async getAllUsers() {
       return await this.userRepository.getAll();
   }
}