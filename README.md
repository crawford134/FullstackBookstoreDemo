# FullstackBookstoreDemo

Uses Mongodb, NodeJs, ExpressJs, and ReactJs 
- Backend: MongoDB as a NoSQL database 
- Backend: NodeJs for building the APIs
- Backend: ExpressJs for helping with both the server side web application and the APIs. Used in combination with the NodeJs and the DB to create a REST API, allowing API requests to be sent from the Frontend 
- Backend: Uses the following Libraries: 
    1. Nodemon is used as a tool to help develop the NodeJs applications by automatically restarting the application anytime there are changes in the directory
    2. Mongoose is an object data-modelling model used for both NodeJs and the MongoDB. It manages the relationships between data, provides a schema validation, and it is used to translate between objects in the code and their respective representations in MongoDB  
- Backend: Accesses Cluster0 -> Books Collection 

- Frontend: ReactJs is used for building a fast and scalable User Interface (helps render the graphical interface on the screen)
- Frontend: Material UI is used for styling the ReactJs Components 
- Frontend: Uses the following Libraries: 
    1. React Router DOM is used to navigate between the pages of our application. It creates some routes and renders different components based on the route/endpoints. It also provides the link components that allow navigation between different routes/endpoints without reloading any pages
    2. MaterialUI Icons is ReactJs's predefined component library containing usable predefined components 
    ```https://mui.com/material-ui/material-icons/?query=library```

## How to Start Application 

```
cd Backend 
npm install (if first time running) 
npm run start 
```
Runs on http://localhost:5001/

```
cd Frontend
npm install (if first time running)
npm start
```
Runs on http://localhost:3000/