// Se inicializa express, y luego en una const app se llama la funcion express que es la que nos va a traer todo lo necesario para levantar el servidor
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');


// conectando base de datos
mongoose.connect('mongodb://localhost/crud-mongo', { useUnifiedTopology: true, useNewUrlParser: true }).then(db => console.log("Se conecto bien SUPER GENIO")).catch(err => console.log(err));


// Importing Routes

const index_Routes = require('./routes/index.js');


// settings
// se va a colocar un codigo que va a leer el puesto disponible y en caso de no haber entonces que tome un puerto predeterminado por nosotros
const PORTi = 4040;
app.set('port', process.env.PORT || PORTi);
// Se configura el route de la carpeta view
app.set('views', path.join(__dirname, 'views'));
// se configura el motor de plantillas
app.set('view engine', 'ejs');


// middleware
app.use(morgan('dev'));



// routes

app.use('/', index_Routes);
app.use(express.urlencoded({extended: false}))

// ahora se pone a escuchar al puerto que escojamos, y verificamos enviando un mensaje por consola


app.listen(app.get('port'), () => {
    console.log(`Escuchando en puerto ${
        app.get('port')
    }`);
})
