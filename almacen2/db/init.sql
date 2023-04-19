CREATE DATABASE almacen2;
use almacen2;

CREATE TABLE usuarios (
	nombre varchar (50), 
	email varchar (50), 
	usuario varchar (20), 
	password varchar (20), 
	admin boolean, 
	primary key(usuario));

CREATE TABLE ordenes(
	id int auto_increment, 
	nombreCliente varchar(50), 
	emailCliente varchar(50), 
	totalCuenta decimal(10,2), 
	fecha datetime default CURRENT_TIMESTAMP, 
	primary key (id));

CREATE TABLE productos(
	id int auto_increment, 
	nombre varchar (50), 
	precio decimal (10,2), 
	inventario int, 
	primary key(id));

insert into usuarios values("mia", "mia@gmail.com", "miaaa", "mi444", False);
insert into usuarios values("camila", "camiau@gmail.com", "camiau", "12345", True);
insert into productos values(null, "PC", 9500, 593);
insert into productos values(null, "Celular", 8000, 296);
insert into productos values(null, "Laptop", 6500, 485);

