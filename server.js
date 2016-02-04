var ghost = require('ghost');


ghost().then(function (ghostServer) {
    ghostServer.config.url = 'https://telluric-github-io.herokuapp.com';
    ghostServer.config.server.port = process.env.PORT || 8080;
    ghostServer.start();
});