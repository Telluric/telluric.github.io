var ghost = require('ghost');
ghost().then(function (ghostServer) {
    //var db = {
    //    client: 'postgres',
    //    connection: {
    //    host: process.env.POSTGRES_HOST,
    //    user: process.env.POSTGRES_USER,
    //    password: process.env.POSTGRES_PASSWORD,
    //    database: process.env.POSTGRES_DATABASE,
    //    port: '5432'
    //    }
    //}

    ghostServer.config.url = 'telluric-github-io.herokuapp.com';

    ghostServer.config.server.host = '0.0.0.0';
    ghostServer.config.server.port = process.env.PORT || 8080;
    ghostServer.start();
});