import { createConnection, Connection } from "typeorm";

export function typeOrmConnection(): Promise<Connection> {
    return new Promise((resolve,reject) => {
        createConnection().then(() => {
         resolve();
        }).catch((err) => {
            reject(err);
        })
    });
}
