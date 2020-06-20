var PORT=3000;
var express = require('express');
var app = express();
var mysql = require('./mysql');
app.use(express.json()); // para parsear application/json
app.use(express.static('.')); // para servir archivos estaticos


//EJ 12
app.get('/devices', function(req, res, next) {
    mysql.query('SELECT * FROM Devices', function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta).status(200);
    });
});
app.get('/devices/:id', function(req, res, next) {
    mysql.query('SELECT * FROM Devices WHERE id=?', [req.params.id], function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta);
    });
});

app.get('/ws/devices', function(req, res, next) {
    var valorRecibido = req.query.filter; //extraigo el query parameter del GET 
    var valoresValidos = ['0', '1', '2']; //Creo un array para validacion del parametro
    var stringBusqueda = ""; //String para la busqueda sql

    if (valorRecibido in valoresValidos) //Evitemos cualquier problemita con SQL....
    {
        if (valorRecibido === '0')
        {
            stringBusqueda = 'SELECT * FROM Devices';
        }
        else if (valorRecibido === '1')
        {
            stringBusqueda = 'SELECT * FROM Devices WHERE type=0';
        }
        else if (valorRecibido === '2')
        {
            stringBusqueda = 'SELECT * FROM Devices WHERE type=1';
        }
    }
    else
    {
        res.send("No se pudo encontrar el valor enviado").status(404);
    }
    mysql.query(stringBusqueda, function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta);
    });



});


app.post('/devices', function(req, res, next) {

    console.log(req.body);

    st=0;
    if(req.body.state)
        st=1;

    id = req.body.id.split("_")[1]; // viene dev_xx

    mysql.query('UPDATE Devices SET state=? WHERE id=?', [st, id], function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(JSON.stringify(req.body));
    });
});


app.listen(PORT, function(req, res) {
    console.log("API funcionando en el puerto "+PORT);
});