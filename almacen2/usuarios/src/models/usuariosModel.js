const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: '192.168.100.2',
    port: '32000',
    user: 'root',
    password: 'roj4sxil3na',
    database: 'almacen2'
});
async function traerUsuarios() {
    const result = await connection.query('SELECT * FROM usuarios');
    return result[0];
}
async function traerUsuario(usuario) {
    const result = await connection.query('SELECT * FROM usuarios WHERE usuario = ? ', usuario);
return result[0];
}


async function validarUsuario(usuario, password) {
    const result = await connection.query('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [usuario, password]);
return result[0];
}


async function crearUsuario(nombre, email, usuario, password, admin) {
    const result = await connection.query('INSERT INTO usuarios VALUES(?,?,?,?,?)', [nombre, email, usuario, password, admin]);
return result;
}
module.exports = {
    traerUsuarios, traerUsuario, validarUsuario, crearUsuario
};
