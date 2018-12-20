DROP DATABASE IF EXISTS volunteer_db;
CREATE DATABASE volunteer_db;
\c volunteer_db;

CREATE TABLE events(
    id serial primary key,
    title varchar,
    image varchar,
    describtion text
);

CREATE TABLE volunteeruser(
    id serial primary key,
    firstname varchar,
    lastname varchar,
    email varchar,
    password varchar,
    image varchar
);

CREATE TABLE event_volenteers(
    volunteer_id int,
    event_id int not null,
    Foreign key(event_id) references events,
    Foreign key(volunteer_id) references volunteeruser
);



INSERT INTO events (title, describtion, image) VALUES ('flower', 'Get Involved in the cultivation of roses in the garden of the park','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtQxlgXsNq0OpGlrlt3zz4s47-SCoXQpBFGRUP7jY9jQ-GqFkXg');
INSERT INTO volunteeruser (firstname, lastname, email, password, image) VALUES ('mohrah', 'alateeq','m@gmail.com','ghjhjacjaqid','');