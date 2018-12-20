DROP DATABASE IF EXISTS order_coffee;
CREATE DATABASE order_coffee;

\c order_coffee
 
 CREATE TABLE coffee(
  id serial primary key,
  drinks varchar,
  img_url varchar,
   price int
);


  --  customer id 
  -- cofee id 

CREATE TABLE customer(
  id serial primary key,
  Email varchar,
   password int not null,
  /* image varchar, */
  coffee_id int not null,
  foreign key(coffee_id) references coffee
);

CREATE TABLE order1(
  id serial primary key,
  price int,
  quantity int not null,
  customer_id int not null,
  coffee_id int not null,
  foreign key(customer_id) references customer,
  foreign key(coffee_id) references coffee
);

INSERT INTO coffee
 (id, drinks, img_url, price)
VALUES
('1','Americano', 'http://www.parkinsonalabama.com/wp-content/uploads/2016/09/coffee.jpg', 6),
('2','coffee latte', 'https://milklife.com/sites/default/files/main_image/Recipe/2013/09/18/Protein-Packed%20Latte_square.jpg',7),
('3','Espresso', 'https://globalassets.starbucks.com/assets/b0525676a0194652be7f4993210b381a.jpg', 5),
('4','Capuccino', 'https://www.merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/cappuccino-2029-e80b7c6d318c7862df2c4c8623a11f99@1x.jpg', 5);

INSERT INTO customer
( Email, password,coffee_id)
VALUES
('email', 434278788, 1);


/* INSERT INTO customer
 (name, phone_number,)
VALUES


INSERT INTO order
 (price, quantity,)
VALUES */