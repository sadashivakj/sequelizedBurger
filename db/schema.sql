create database burgers_db;
	use burgers_db;
	create table burgers (
		id int auto_increment primary key not null,
		burger_name varchar(100) not null,
		devoured boolean default false not null,
		date timestamp default CURRENT_TIMESTAMP not null
	)