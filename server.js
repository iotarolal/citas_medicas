const express = require('express');
const moment = require('moment');
const axios = require('axios');
const chalk = require('chalk');
const uuid = require('uuid');

const app = express();

// acá realizamos los requerimientos del desafío

app.get('/', (req, res) => {
    res.end('lista de usuario')
})

let arrayuser = [];

app.listen(3000, async() => {
    console.log(chalk.green.bgYellow('servidor funcionando en el puerto 3000'));
    console.log('Ejemplo de identificado único', uuid.v4());
    const resultado = await axios.get('https://randomuser.me/api/?results=10');
    const usuarios = resultado.data.results; 
//    console.log(resultado.data.results);
//    const usuarios = resultado.data.data;
    for (usuario of usuarios) {
        const ahora =  moment().format('MMMM Do YYYY, hh:MM:SSa');
        const id = uuid.v4();
        arrayuser.push(`Nombre:${usuario.name.first}-Apellido:${usuario.name.last}-ID:${id.length-6}`);



    }
})

