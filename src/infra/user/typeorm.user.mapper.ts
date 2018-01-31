import { User as UserEntity } from '../database/entities/user.entity';
import { User } from '../../domain/user/user';

export function toDomain(user: UserEntity) {
    return new User(user.firstName, user.lastName, user.age);
}