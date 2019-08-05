
const fs = require('fs');
var colors = require('colors');

let listar = (base,limite=10) => {

    console.log('Tabla de '.red)
    for (let i =1; i<=limite; i++){
        console.log (`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = ( base,limite =10 )=>{
    return new Promise ((resolve, reject)=>{
    
        if(!Number(base)){
            reject('no es un numero');
            return;
        }


        let data = '';
for (let i =1; i<=limite; i++){
    data+= `${base} * ${i} = ${base*i}\n`;
}

fs.writeFile(`tabla/tabla-${base}.txt`,data,(err)=>{
    if (err) 
        reject (err)
    else 
        resolve (`tabla-${base}.txt`)
    
});


    });
}

module.exports = {
    crearArchivo,
    listar
}

