# Performance matters: Serverside funda app

For this project I took my origin Funda web app that I made for *Web app from scratch* and refactored it into a server-side application. Making the app server-side has great benefits on the overall performance and accessibility of the website. The app can be used if Javascript doesn't load or it turned off.

## Installing the project

Using the following steps you can install and use the app locally.

#### Cloning or downloading the repo

```
$ git clone https://github.com/Zishrodrigues/performance-matters-funda.git
```
#### Installing the required dependencies
In the root folder of the project run the following command:
```
$ npm install
```
Wait for the required npm packages to install and proceed further.

#### Starting and running the server
Make sure port 3000 isn't being used by another project. If this is the case run the following command in the root of your project
```
$ npm start
```
If you get the message ```app listening in port 3000 ``` the server started successfully on localhost:3000.

This project uses the following packages:

* Express.js
* body-parser
* dotenv
* ejs
* request
* browserify

I use browserify to bundle my JS modules into bundle.js for client-side usage.

## Wishlist

* add css
* add clientside JS functions
