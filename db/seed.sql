DROP DATABASE IF EXISTS arts_shine_db;
CREATE DATABASE arts_shine_db;
\c arts_shine_db

-- add create tables here

CREATE TABLE users(
  id serial primary key,
  username varchar(10)  UNIQUE NOT NULL,
  password varchar NOT NULL,
  fname varchar(30),
  lname varchar(30),
  art_kind text
);

CREATE TABLE images(
  id serial primary key,
  image varchar,
  text text ,
  id_user int not null,
  foreign key(id_user) references users ON DELETE CASCADE
);

INSERT INTO users
  (username,password,fname,lname,art_kind)
VALUES('shuunz','shahad1234','Shahad','Mohammad','Photographer');
-- ('noura1','jkah12','noura','alghamdi','painter');

INSERT INTO images
  (image,text,id_user)
VALUES('/static/images/image1.png','Dont believe everything you hear. There are always three sides to a story. Yours , theirs and the truth. ⛅️👌🌟💭',1),
('/static/images/image2.png','If you can take it , you can make it ✨',1),
('/static/images/image3.png','For the highs and lows
And moments in between,
Mountains and valleys
And rivers and streams.
For where you are now
And where you will go,
For “I’ve always known”
And “I told you so,”
For “nothing is happening”
And “All has gone wrong,”
It’s here in this journey
You will learn to be strong
You will get where you’re going,
Landing where you belong
—Morgan Harper Nichols',1),
('/static/images/image4.png','werwr',1),
('/static/images/image5.png','aawe',1),
('/static/images/1.png','aawe',1),
('/static/images/2.png','aawe',1),
('/static/images/3.png','aawe',1),
('/static/images/4.png','aawe',1),
('/static/images/5.png','aawe',1),
('/static/images/6.png','aawe',1),
('/static/images/7.png','aawe',1),
('/static/images/8.png','aawe',1),
('/static/images/9.png','aawe',1),
('/static/images/10.png','aawe',1),
('/static/images/11.png','aawe',1),
('/static/images/12.png','aawe',1),
('/static/images/13.png','aawe',1),
('/static/images/14.png','aawe',1),
('/static/images/15.png','aawe',1),
('/static/images/16.png','aawe',1),
('/static/images/17.png','aawe',1),
('/static/images/18.png','aawe',1),
('/static/images/19.png','aawe',1),
('/static/images/20.png','aawe',1),
('/static/images/21.png','aawe',1),
('/static/images/22.png','aawe',1),
('/static/images/23.png','aawe',1),
('/static/images/24.png','aawe',1),
('/static/images/25.png','aawe',1),
('/static/images/26.png','aawe',1),
('/static/images/27.png','aawe',1),
('/static/images/28.png','aawe',1),
('/static/images/29.png','aawe',1),
('/static/images/30.png','aawe',1),
('/static/images/31.png','aawe',1),
('/static/images/32.png','aawe',1),
('/static/images/33.png','aawe',1),
('/static/images/34.png','aawe',1);

-- INSERT INTO images
--   (image,text,id_user)
-- VALUES('https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','dsijilsnl',9),
-- ('https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','efsf',9);
