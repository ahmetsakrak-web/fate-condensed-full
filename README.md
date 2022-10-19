# Utility App for Fate Condensed Player



## Features
- Character Sheets can be added, created, updated, deleted
- Responsive


## Online

It can be accessed from https://fate-condensed.herokuapp.com


## Structure

```bash
.
fate-condensed
    │── client
    │      └── src
    │          └── components              
    │          └── service
    │          └── styles
    │          │    │── appStyles             
    │          │    └── ThemeMood 
    │          │
    │          └── App.js  
    └── server
        │── build
        │── controllers 
        │     │── login.js
        │     │── sheets.js             
        │     └── users.js
        │── models
        │   │── sheet.js
        │   └── user.js                             
        │── utils                     
        │   │── config.js
        │   │── logger.js             
        │   └── middleware.js
        │── app.js                       
        │── server                       
        └── Procfile
```




## Prerequisites

> If you're building locally, you will have to create a new file `.env` in server and put the same env variable

```bash
PORT = XXXX
URI = mongoDB app connection link
SECRET = abcd123
NODE_ENV = production or development 
```

## Installing

Installing the dependencies

```bash
npm install
```

## Start the dev server
Two terminal needs to be opened
```bash
cd client
npm start

cd server
npm run dev
```

## Built with

- NodeJS & ExpressJS
- React & Styled Components
- MongoDB & Mongoose
- VSCode
- And these useful of JavaScript libraries [package.json](package.json)