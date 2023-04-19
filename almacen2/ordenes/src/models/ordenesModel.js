const mysql = require('mysql2/promise');
const connection = mysql.createPool({
host: '192.168.100.2',
port: '32000',
user: 'root',
password: 'roj4sxil3na',
database: 'almacen2'
});
11
async function crearOrden(orden) {
const nombreCliente = orden.nombreCliente;
const emailCliente = orden.emailCliente;
const totalCuenta = orden.totalCuenta;
const result = await connection.query('INSERT INTO ordenes VALUES (null, ?, ?, ?, Now())', [nombreCliente, emailCliente, totalCuenta]);
return result;
} //now() es para que ponga la fecha actual del computador. Es una fecha esa última columna. 
async function traerOrden(id) {
const result = await connection.query('SELECT * FROM ordenes WHERE id = ?', id);
return result[0];
}

async function traerOrdenCliente(nombre) {
    const result = await connection.query('SELECT * FROM ordenes WHERE nombreCliente = ?', nombre);
    return result[0];
}

async function traerOrdenes() {
    const result = await connection.query('SELECT * FROM ordenes');
    return result;
    }

async function borrarOrden(id) {
    const result = await connection.query('DELETE FROM ordenes WHERE id= ?', id);
    return result;
    }

module.exports = {
crearOrden,
traerOrden,
traerOrdenes,
borrarOrden,
traerOrdenCliente
};
