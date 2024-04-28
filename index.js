//Paso 1:Importar Express y levantar un servidor en el puerto 3000.

import express from 'express'
import axios from 'axios';
import chalk from 'chalk';
import handlebars  from 'handlebars';
import lodash  from 'lodash';
import moment  from 'moment';
import nodemon from 'nodemon';


const app = express();
app.listen(3000, console.log("Servidor Express conectado"))

//Paso 2:Crea una ruta raíz / GET.

app.get("/", (req, res) => {
	res.send(`<h1>Servidor Express Funcionando jefe 😎👍</h1>`);
})

