create schema public;

comment on schema public is 'standard public schema';

alter schema public owner to edvargas;

create table country
(
	id smallserial not null
		constraint country_pk
			primary key,
	name varchar(20) not null
);

alter table country owner to edvargas;

create table city
(
	id smallserial not null
		constraint city_pk
			primary key,
	name varchar(30) not null,
	price smallint not null,
	id_country smallint not null
		constraint country_fk
			references country
				on update cascade on delete restrict
);

alter table city owner to edvargas;

create table bucket_city
(
	id_bucket smallint not null,
	id_city smallint not null
		constraint city_fk
			references city
				on update cascade on delete restrict,
	constraint bucket_city_pk
		primary key (id_bucket, id_city)
);

alter table bucket_city owner to edvargas;

create table bucket
(
	id smallserial not null
		constraint bucket_pk
			primary key,
	owner varchar(20) not null,
	cost smallint not null,
	id_country smallint
		constraint country_fk
			references country
				on update cascade on delete set null
);

alter table bucket owner to edvargas;

