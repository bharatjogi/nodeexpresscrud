var express=require('express');
var api_routes= express.Router();
var api= require('../api/api.js');
var genericapi =require('../api/genericapi.js')


//api routes
api_routes.get('/companydetails',api.index);
api_routes.get('/getcompany/(:id)',api.getbyid);
api_routes.post('/test',api.test);
api_routes.post('/addCompany',api.addCompany);

//genericapi routes
api_routes.get('/sendsms',genericapi.$sendMSG);
module.exports=api_routes;