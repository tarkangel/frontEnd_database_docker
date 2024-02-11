# frontEnd_database_docker
New project where i connected my frontend with a database using node js, and mysql database , the database ,the frontend and the node js app live in 3 containers each, they are connected because they live in same docker network and I used Cors in the app.js file so the communication between ports can be enabled .

Front end request to database information from a table to show it in my frontend.

I used Nginx image for frontend, mysql image for database and node image for the app.
