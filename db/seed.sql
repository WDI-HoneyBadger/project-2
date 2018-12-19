DROP DATABASE IF EXISTS never_stop_exploring;
CREATE DATABASE never_stop_exploring;
\c never_stop_exploring

CREATE TABLE countries(
  id serial primary key,
  name varchar,
  img_url varchar
);


 
INSERT INTO countries(name, img_url) VALUES 
('Saudi Arabia', 'https://i.imgur.com/7S8QdxV.jpg'),
('The United Arab Emirates', 'https://i.imgur.com/OjnWaRZ.jpg'),
('China', 'https://i.imgur.com/3NSlOrr.jpg'),
('United States', 'https://i.imgur.com/TdOJo5N.jpg'),
('Canada','https://i.imgur.com/SKNRoYI.jpg'),
('France','https://i.imgur.com/ZDmUlHE.jpg'),
('Germany','https://i.imgur.com/hn7Wb3R.jpg'),
('Egypt','https://i.imgur.com/4S7n3un.jpg'),
('Italy','https://i.imgur.com/JHg3Pk8.jpg'),
('Malaysia','https://i.imgur.com/yN152YS.jpg');

CREATE TABLE users(
  id serial primary key,
  email varchar UNIQUE NOT NULL,
  password_digest varchar NOT NULL
);


CREATE TABLE cities (
    id serial primary key,
    name varchar,
    image varchar,
    location varchar,
    population varchar,
    history varchar,
    sightseeing varchar,
    activites varchar,
    facilities varchar,
    cities_nearby varchar,
    country_id int not null,
    foreign key(country_id) references countries
);

CREATE TABLE user_city (
  id serial primary key,
  user_id int not null,
  city_id int not null,
  foreign key(user_id) references users,
  foreign key(city_id) references cities
);

INSERT INTO cities (name, image, location, population, history,sightseeing,activites,facilities,cities_nearby, country_id) VALUES
 ('Mecca','https://i.imgur.com/qS6RKAx.jpg,https://i.imgur.com/gxy79MD.jpg,https://i.imgur.com/eqfW0FD.jpg,https://i.imgur.com/0yx1qAa.jpg','Located in the west south west of Saudi Arabia , in Alhijaz region','1,675,368','the city holds the holiest site in all Islam, the Masjid al-Haram (Sacred Mosque), and was declared a site of pilgrimage by the Prophet Muhammad in 630. That was the year of his triumphant return to the city after years of exile in Medina.','Great Mosque of Mecca, Kaaba , Mount Arafat, Abraj Albait Mall (kingdom Clock Tower)','Hiking at Jabal-al-noor (mountain of Light), Reach the highest floor at Kingdom Clock Tower.','Tourist information centres,Accommodation, Travel Agencies
','Jeddah city , Rabig, Thoual, Medinah', 1),
 ('Medinah', 'https://i.imgur.com/hTVu0f1.jpg,https://i.imgur.com/0xWIPV4.jpg,https://i.imgur.com/2V1P26A.jpg,https://i.imgur.com/yF65wtU.jpg','In the west of Saudi Arabia','1,183,205','At the citys heart is al-Masjid an-Nabawi (The Prophets Mosque), which is the burial place of the Islamic prophet, Muhammad, and it is the second-holiest city in Islam after Mecca.','Prophet’s Mosque, Quba Mosque, Mount Uhud , AlQiblatayn Mosque.','Hiking at Mount Uhud, Visit Madaein Saleh','International Airport, Tourist information centers, Accommodation, Travel Agencies, Train Station','Alula city , Yanbu city , Jeddah city', 1),
 ('Riyadh', 'https://i.imgur.com/4mfyw8H.jpg,https://i.imgur.com/oeClAXL.jpg,https://i.imgur.com/CTvHJBH.jpg,https://i.imgur.com/0dcSubf.jpg','In the center of Saudi Arabia, Najd Region ','7,676,654','It is the capital of Riyadh Province and belongs to the historical regions of Najd and Al-Yamama. It is situated in the centre of the Arabian Peninsula on a large plateau and home to more than six million people.','Al Diriyah (Saudi early Capital), Masmak Fortress, Riyadh Zoo, Wadi Namar Dam Park , Royal Saudi Air Force Museum, Heet Cave, Albujairy Park , Kingdom Center Tower','Explore Al-Bujairi Square, Reach the top of the Kingdom Center Tower, Discover the Old Dir’aiyah, Janadriyah Festival ','International Airport, Tourist information centers, Accommodation, Travel Agencies, Train Station, International Airport, Cinemas, Public Parks, Sports facilities, and Shopping malls.','AlQassim , Alkhobar, Dammam and Jubail', 1),
 ('Jeddah', 'https://i.imgur.com/P1AjUsW.jpg,https://i.imgur.com/T5uJvys.jpg,https://i.imgur.com/xlb9wIB.jpg,https://i.imgur.com/kEmkTBL.jpg','In the west side of Saudi Arabia','3,976,000','Historical Jeddah is situated on the eastern shore of the Red Sea. From the 7th century AD it was established as a major port for Indian Ocean trade routes, channeling goods to Mecca. It was also the gateway for Muslim pilgrims to Mecca who arrived by sea.','King Fahad’s Fountain, Fakieh Aquarium , Old Jeddah (Albalad), Jeddah Corniche, Park Hayat Resort. ','Dicover the Old Jeddah (Albalad), Beaches, Scuba Diving and Snorkeling, Fishing, Hiking. ','International Airport, Tourist information centers, Accommodation, Travel Agencies, Beaches, Cinemas, Public Parks, Sports facilities, and Shopping malls.','Medinah, Mecca, Thoul, Rabeg, Yanbu',1),
 ('AlKhobar', 'https://i.imgur.com/ck2A0Mk.jpg,https://i.imgur.com/YD0NDYZ.jpg,https://i.imgur.com/qvvKOTM.jpg,https://i.imgur.com/R6ofarW.jpg','In the east side of Saudi Arabia','City: 941,358. Urban: 4,140,000','n earlier days, Khobar was a small port on the Arab Gulf coast, a fishing village inhabited mainly by AlDossary tribe members. With the discovery of oil in the 1930s, it was transformed into a commercial and shopping center and an industrial port. The municipality of Khabar was founded in 1942.','Half Moon Beach, Scitech Technology Center, King Fahd Causeway, Dughaither Village, Al khobar Corniche','Discover the beaches, Visit the Technology Center. Discover the Aramco Exhibit.','International Airport, Tourist information centers, Accommodation, Travel Agencies, Beaches, Cinemas, Public Parks, Sports facilities, and Shopping malls.','Damam, Jubail, Alahsa, Riyadh',1), 
 ('Dubai','https://i.imgur.com/TQBtzzT.jpg,https://i.imgur.com/cVrban2.jpg,https://i.imgur.com/GBPuvgN.jpg,https://i.imgur.com/WB7ZiEy.jpg','On the southeast coast of the Persian Gulf.','3.137 million','Dubaibecame a separate Sheikhdom in 1833, when the Al-Maktoum dynasty of the Bani Yas clan (initially from Abu Dhabi) took it over peacefully','Burj Khalifa, Burj Al Arab Jumaeriah, The Dubai Mall, Palm Jumeirah, Dubai Marina','Sky Diving, Ski Dubai, Wild Wadi Water Park, Ride the Camel at the beach, Safari tour, Go the top of Burj Khalifa Tower.','International Airport, Tourist information centers, Accommodation, Travel Agencies, Beaches, Cinemas, Public Parks, Sports facilities, and Shopping malls.','Abu Dabi ,Shareqah, Raas Alkhimah', 2),
 ('Abu Dahbi','https://i.imgur.com/2QWPlKQ.jpg,https://i.imgur.com/fNL12UX.jpg,https://i.imgur.com/3uJfEFJ.jpg,https://i.imgur.com/XUEPFyV.jpg','The city of Abu Dhabi is on the southeastern side of the Arabian Peninsula, adjoining the Persian Gulf','1.206 million','Abu Dhabi (the city) was made the provisional capital of the United Arab Emirates for five years; its status was extended several times until it was made the permanent national capital in the early 1990s.','Sheikh Zayed Mosque, Yas Island, Emirates Palace, Ferrari World Abu Dhabi,Louvre Abu Dahbi museum.','Explore the Yas Waterworld Abu Dhabi, Discover the Farrari World, Visit the Yas Island, Visit the Emirate Park Zoo.','International Airport, Tourist information centers, Accommodation, Travel Agencies, Beaches, Cinemas, Public Parks, Sports facilities, and Shopping malls.','Dubai , Shareqah, Raas Alkhimah', 2),
 ('Hong Kong','https://i.imgur.com/2WTho6q.jpg,https://i.imgur.com/gP4GqqH.jpg,https://i.imgur.com/kI6JOMx.jpg,https://i.imgur.com/ugkaQFD.jpg','Located in the Southeast Asia centered.','7,448,900','Hong Kong is an autonomous territory, and former British colony, in southeastern China. Its vibrant, densely populated urban centre is a major port and global financial hub with a skyscraper-studded skyline.','Victoria Peak, Hong Kong Disneyland, Tsim Sha Tsui, Victoria Harbour, Tian Tan Buddha.','Discover the indoor observation Sky100, Hiking at Victoria Peak, HongKong Evening Cruise Tour in Chinese Junk Baot, Sky Land Sea.','International Airport, Tourist information centers, Accommodation, Travel Agencies, Beaches, Cinemas, Public Parks, Sports facilities, and Shopping malls.','Shanghai, Shenzhen, Ghouanzo, Beijing',3),
 ('Shanghai','https://i.imgur.com/plbdGuK.jpg,https://i.imgur.com/oLk9MHQ.jpg,https://i.imgur.com/Ct8Ob78.jpg,https://i.imgur.com/a830LhB.jpg','Its located in the East China coast','24.18 million','The history of Shanghai spans over a thousand years and closely parallels the development of modern China. Originally a small agricultural village,Shanghai developed during the late Qing dynasty (1644–1912) as one of Chinas principal trading ports.','Yu Garden, Oriental Pearl Tower, Nanijing Road, The Bund Waterside Walkaway with city.','Take tour at Evening River Cruise, Take Tour at Hop-On Hop-Off Shanghai Bus Tour.','International Airport, Tourist information centers, Accommodation, Travel Agencies, Beaches, Cinemas, Public Parks, Sports facilities, and Shopping malls.','Hong Kong, Shenzhen, Ghouanzo, Beijing',3);

 

 