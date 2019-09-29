# Notes-App
Assessment project

This project is a Notes Web Application that has data persistance and handles all CRUD operations. 
The frontend was build with ReactJS/Redux while the backend was build with ExpressJS.
Data is stored on a JSON file that uses lowdb to query the data.


If you are using CLI:

Instructions on how to set up the project:

**Two terminals will be needed to run the project**

1. After cloning the project, go into the notes-app folder and install all dependencies on the backend with npm install.
2. cd into the client folder and npm install to install all dependecies on the front end. 

Instructions on how to run the project:
1. Go into the notes-app and run npm start to start the server.
2. Go into the client folder and run npm start to run the React frontend. 


Notes:
The React frontend is running on port 3000 while the backend is running on port 3001.  They are connected by a proxy script in the package.json file in the client folder.
To see a specific note at an URl go to http://localhost:3000/notes/1 or any number!
I had a lot of fun while creating this assessment project especially the use of react/redux.  I also found the use of lowdb to create and query a local JSON data file to be quite useful and fun for a small application like this.  
Since the data was stored in a JSON format and lowdb uses Array manipulation to query data, I found the use of creating a primary ID data type for each note would not be necessary.  In a larger application using a relational database providing an ID data type would be essenctial in the data structure. 

Hope you Enjoy It!!
