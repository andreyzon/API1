const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Configuraciones
app.set('port', process.env.PORT || 3000); //En caso de que exista un puerto disponible se conecta. Si no, por el 3000.
// Se instaló nodemos con el comando npm i nodemon -D para no tener que estra matando y cargando el servidor.
//Para arrancar el servidor se ejecuta el comando npm run dev desde la terminal.
app.set('json spaces', 2); // Para organizar mejor los mensaje json en la página.

app.use(bodyParser.json());



//Morgan permite ver por consola lo quie llega al servidor
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //Solo para entender textos NO IMÁGENES
app.use(express.json());



//Routes
app.use(require('./routes/index')); //Captura las rutas sentenciadas en routes/index.js



//Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port') );
});