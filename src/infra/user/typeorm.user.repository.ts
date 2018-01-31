import { User } from '../database/entities/user.entity';
import { getRepository } from 'typeorm';
import { toDomain } from './typeorm.user.mapper';

export default class TypeOrmUserRepository {
    private repository;
    constructor() {
        this.repository = getRepository(User);
    }
    async getAll(...args) {
        const users = await this.repository.find(...args);
        console.log(users);
        return users.map(toDomain);
    }
    async getById(id: number) {

    }
    async add(user: User) {

    }
}