import KoaServer from './interfaces/http/rest/server';
import typeOrmConnection from './infra/database/typeOrmConnection';

// Server initialization
const server: KoaServer = new KoaServer();
Promise.all([
    typeOrmConnection()
]).then(() => server.listen(3000));

// Gracefull server stop
process.on('SIGTERM', () => {
    // TODO: Implementar el cierre correctamente
    /* server.close()
        .then(() => Promise.all([
            getConnection().close()
        ]))
        .then(() => process.exit(0))
        .catch((err) => process.exit(-1))
        */
});

