DROP DATABASE IF EXISTS online_coaching;


CREATE DATABASE online_coaching;


\c online_coaching



CREATE TABLE trainers(
  id serial primary key,
  name varchar,
  phone_number int,
  rate FLOAT,
  img varchar,
  info text
);

CREATE TABLE exercises(
  id serial primary key,
  exercise_name varchar,
  reps int,
  no_sets int, 
  describe text,
  img varchar,
  video varchar,
  trainer_id int NOT null,
  Foreign key (trainer_id) references trainers

);


--create trainers

INSERT INTO trainers
  (name, phone_number,rate, img, info)
VALUES
('Mike', '0555555555','8', 'https://gojistudios.com.hk/wp-content/uploads/2017/08/Ken_PT_Headshot.jpg', 'Mike has 10 years of experince in training professional bodybuilding'),
('Ted', '0512345678','7', 'https://gojistudios.com.hk/wp-content/uploads/2017/08/Ray_PT_Headshot.jpg', 'Ted holds Professional training certificate in fitness'),
('Joe', '0555332155','9.1', 'https://gojistudios.com.hk/wp-content/uploads/2017/08/Chiu_Wai_PT_Headshot.jpg', 'Joe has partnership with bodybuilding company which is specialized in providing tips for bodybuilder'),
('Ronnie', '0554355555','4', 'https://gojistudios.com.hk/wp-content/uploads/2017/08/Emily_GF_Headshot.jpg', 'Ronnie is a professional therapist who worked for 6 years in rehab center'),
('Phill', '0512555555','8', 'http://richmondoval.ca/wp-content/uploads/2016/10/fit_rose.jpg', 'Phill looks to gain more expreciene with new customers that will allow him to build up the profile ');


INSERT INTO exercises
  (exercise_name, reps, no_sets,describe, img, video , trainer_id)
VALUES
('Pull over', '10','3', 'The pullover is an exercise that is performed with either a dumbbell or a barbell.[1] Pullovers can be made to affect either the chest or the back depending on how wide the grip is (barbell) and the position of the shoulders. A research done on the pullover movement using a barbell suggested more effect on the pectoralis major muscle as compared to the latissimus dorsi.', 'https://i.pinimg.com/originals/0b/a0/89/0ba0890379165442629827e1be402c7b.png','https://www.youtube.com/watch?v=4B-BrBH17uM',1 ),
('Incline Bench Press', '8', '4', 'The pectoralis major muscle is comprised of a clavicular and a sternocostal head (upper and lower pec). The purpose of the incline press is to focus more of the work on the upper pecs. The main benefit in performing incline presses is to develop the upper portion of the pectoral muscles.', 'https://weighttraining.guide/wp-content/uploads/2016/11/incline-barbell-bench-press.png', 'https://www.youtube.com/watch?v=8YgkJN0gmNM',2),
('Deadlift', '10', '3', 'The deadlift is a weight training exercise in which a loaded barbell or bar is lifted off the ground to the level of the hips, then lowered to the ground. It is one of the three powerlifting exercises, along with the squat and bench press.', 'https://weighttraining.guide/wp-content/uploads/2016/10/romaniandeadlift.png', 'https://www.youtube.com/watch?v=BCuw5HTJkLw' , 3);