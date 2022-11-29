/*
//Importamos mysql
const mysql = require('mysql');

//Crear conexión
const conector = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cdm'
    }
);
const conectar = () =>
{
    conector.connect((err) => 
    {
        if(err) throw err
        console.log('BD conectada')
    });
}


//Exportar función conectar cuando se usa require
module.exports = {conectar};
*/
let mysql = require("mysql");
let usuario;
let con = mysql.createConnection({
  host: "localhost",
  user: "discos_owner",
  password: "discos_password",
  database: "discos_online",
});

/*
const conectar = () =>
{
    conector.connect((err) => 
    {
        if(err) throw err
        console.log('BD conectada')
    });
}
*/

con.connect((err) => {
    console.log("err", err);
  if (!err) {
    console.log("BD conectada.");
  } else {
    console.log("Error de conexión.");
  }
});

const agregarDeportista = (
  nombre,
  correo,
  contrasena,
  fecha,
  peso,
  altura,
  sexo,
  coach
) => {
  const sql = `INSERT INTO deportista (id_deportista, nombre, correo, contraseña, fechaNacimiento, peso, altura, sexo, coach_id_coach) VALUES (${null}, '${nombre}', '${correo}', '${contrasena}', '${fecha}', ${peso}, ${altura}, '${sexo}',${coach})`;
  con.query(sql, (err, result, filled) => {
    if (err) throw err;
    console.log("registro exitoso.");
  });
};

const consultarUsuario = (opcion, correo) => {
  const sql = `SELECT * FROM ${opcion} WHERE correo = '${correo}'`;
  con.query(sql, (err, rows) => {
    usuario = rows;
  });
  return usuario;
};

module.exports = { agregarDeportista, consultarUsuario };
