//Rutas definidas o sentenciadas

const { Router } = require('express');
const router = Router();


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root", //Usuario de la base de datos
  password: "mysql098765",
  database: "base_ESP8266",
  port: 3306
});



router.get('/', (req, res) => {
    res.json({"Conectado ruta 1":"Dianita1"}); //Primera ruta con respuesta tipo json
});


router.get('/data', (req, res) => {
    const data ={
        "name": "Mike",
        "Hora":"1000"
    };

    res.json(data); //Primera ruta con respuesta tipo json
});


//Por cada tabla leer, actualizar, cargar...Post = insertar, GET = leer, PUT = actualizar DELETE = borrar
router.post('/', (req, res) => {
    //console.log('Si entró');
    let sebas = req.body;

    //var dat= new Date();
    //sebas.Fecha = dat;
    //console.log(sebas.Fecha);

    console.log(sebas);
    if(con.state==='disconnected'){
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");});
    }
        var sql = "INSERT INTO datos (idDispositivo, Temp, Tarjeta) VALUES ('"+sebas.ip+"', '"+sebas.temperatura+"' , '"+sebas.Tarjeta+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      
    res.json(sebas); //Primera ruta con respuesta tipo json


});



module.exports = router;