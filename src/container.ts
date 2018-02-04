import { KoaServer } from './interfaces/http/rest/server';
import { typeOrmConnection } from './infra/database/typeOrmConnection';

class Bootstrap {
    public startServer() {
        this.database();
    }
    private database() {
        typeOrmConnection().then(() => {
            this.api();
        });
    }

    private api() {
        new KoaServer();
    }
}
// Extract?
let bootstrap = new Bootstrap();
bootstrap.startServer();

