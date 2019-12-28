# cheq-app
Full Stack web app: NodeJS(Express) + MySQL 8.0.18 + ReactJS 

About the app:
•	With supplying unique credentials, user can register & login (and logout) to the system.
•	The user can make CRUD operations on DB tables.

Backend:
•	Written in java script and running on NodeJS (Express) platform.
•	Communicates with Mysql server for crud operations using Sequelize CRM.
•	The DB has 3 tables: Keywordlists, Vasts, Users.
•	Users table is an internal table for the sake of managing user accounts only, and is not accessible to the user.
•	The server has several API routes: login\logout\Register and  get\get-all\create\update\delete for each of the two models: vasts & keyword_lists.
•	The server uses Bcrypt password hashing function in order to securely store users' passwords. 

Frontend:
•	Written in javascript using ReactJS library.
•	The frontend communicates with backend using Axios client.
•	Uses React router library to navigate dynamically between URLs.
•	JWT is used for user operations authorization. 
•	Local store is being used to store client's access token.
