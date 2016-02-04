var ghost = require('ghost');
ghost().then(function (ghostServer) {
    //var db = {
    //    client: 'mysql',
    //        connection: {
    //        host     : '127.0.0.1',
    //            user     : 'your_database_user',
    //            password : 'your_database_password',
    //            database : 'ghost_db',
    //            charset  : 'utf8'
    //    }
    //}

    ghostServer.config.url = 'http://telluric-github-io.herokuapp.com';
    ghostServer.config.urlSSL = 'https://telluric-github-io.herokuapp.com';

    ghostServer.config.server.port = process.env.PORT || 8080;
    ghostServer.start();
});