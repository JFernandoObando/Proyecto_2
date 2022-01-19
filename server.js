var express = require('express');
var app = express();

// must specify options hash even if no options provided!
var phpExpress = require('php-express')({

    // assumes php is in your PATH
    binPath: '/bin/php'
});

// set view engine to php-express
app.use(express.static(__dirname + '/views'));

app.engine('php', phpExpress.engine);
app.set('view engine', 'php');

app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Pagina | Demo',
        //nombre: "eSTeBaN"
    });
});


// routing all .php file to php-express
app.all(/.+\.php$/, phpExpress.router);

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('PHPExpress app listening at http://%s:%s', host, port);
});