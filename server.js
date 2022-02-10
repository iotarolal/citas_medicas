const express = require('express');
const moment = require('moment');
const axios = require('axios');
const chalk = require('chalk');
const uuid = require('uuid');
const { restart } = require('nodemon');

const app = express();

// acá realizamos los requerimientos del desafío
let arrayuser = [];

app.get('/', (req, res) => {
    let listauser="";
    for (usuario of arrayuser) {
        listauser = listauser + `${usuario}`;
        console.log(chalk.blue.bgWhite(`${usuario}`));
    }
    res.end(`${listauser}`);
})

app.listen(3000, async() => {
    console.log('servidor funcionando en el puerto 3000');

    // pedir los datos con axios para 10 usuarios
    const resultado = await axios.get('https://randomuser.me/api/?results=10');
    const usuarios = resultado.data.results; 

// iterar por cada usuario , agrear a un array, aplicar moment y obtener uuid
    for (usuario of usuarios) {
        const ahora =  moment().format('MMMM Do YYYY, hh:MM:SSa');
        const id = uuid.v4();
        arrayuser.push(`Nombre:${usuario.name.first}-Apellido:${usuario.name.last}-ID:${id.substr(id.length-6)} - ${ahora}`);
    }
//    console.log(arrayuser[1]);
})

// modificar los log de la consola con chalk
//console.log(chalk.blue.bgWhite('servidor funcionando en el puerto 3000'));

