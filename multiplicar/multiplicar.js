// const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');
// const { resolve } = require('path');

let listarTabla = (base, limite = 10) => {
    if (!Number(base) || !Number(limite)) {
        console.log(`El valor introducido "${base}" no es un número válido`.red);
        return;
    }

    let listando = '';
    listando += `============ INICIO DEL PROCESO ===========\n`.green;
    for (let i = 1; i <= limite; i++) {
        listando += `${base} x ${i} = ${base*i}\n`;
    }
    listando += `============= FIN DEL PROCESO ==============`.green;
    console.log(listando);
}

let crearArchivo = (base, limite = 10) => {
    //promesa
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido "${base}" no es un número válido`);
            return;
        }

        let data = '';
        let fecha = new Date();

        data += `============ INICIO DEL PROCESO ===========\n`;
        data += `${fecha} \n`;
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        data += `============= FIN DEL PROCESO ==============`;

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}