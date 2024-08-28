var express = require('express');

// import local module
var users = require('./users');
var category = require('./category');
var app = express();
// Middleware required to access input passed using post, put, delete 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // New line added

const USERROUTE = "/users";
const CATEGORYROUTE = "/category"
const PORTNO = 5000;

//--------------Users-------------------------------------//

//register route
//endpoint = http://localhost:5000/user/register
//method  = POST
app.post(USERROUTE + "/register", (request, response) => users.register(request, response));

//login route
//endpoint = http://localhost:5000/user/login
//method  = POST
app.post(USERROUTE + "/login", (request, response) => users.login(request, response));

// Change Password route
// Endpoint = http://localhost:5000/users/change_password
// Method = POST
app.post(USERROUTE + "/change_password", (request, response) => users.change_password(request, response));

// Forgot Password route
// Endpoint = http://localhost:5000/users/forgot_password
// Method = GET
app.get(USERROUTE + "/forgot_password", (request, response) => users.forgot_password(request, response));

//----------------------------------------------------------------------------------------------------------------//

//-----------------category---------//
//define routes for category
//used to get all categories 
//http://localhost:5000/category
//method get 
app.get(CATEGORYROUTE,(request,response) => category.select(request,response));

//define routes for category
//used to insert categories 
//http://localhost:5000/category
//method post 
app.post(CATEGORYROUTE,(request,response) => category.insert(request,response));

//define routes for category
//used to update categories 
//http://localhost:5000/category
//method put
app.put(CATEGORYROUTE,(request,response) => category.update(request,response));

//define routes for category
//used to delete categories 
//http://localhost:5000/category
//method delete
app.delete(CATEGORYROUTE,(request,response) => category.delete(request,response));

app.listen(PORTNO, () => {
    console.log('your request is accept on port', PORTNO);
});