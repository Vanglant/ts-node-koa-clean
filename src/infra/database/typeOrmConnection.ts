import { createConnection, Connection } from "typeorm";

export default function typeOrmConnection(): Promise<Connection> {
    return new Promise((resolve, reject) => {
        createConnection().then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        })
    });
}