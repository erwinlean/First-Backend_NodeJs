var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); 
const jwt = require("jsonwebtoken");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalogoRouter = require("./routes/catalogo");
var categoriasgoRouter = require("./routes/categorias"); 

var app = express(); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/users", usersRouter);
app.use("/catalogo",catalogoRouter);
app.use("/categorias",categoriasgoRouter);

const jsonWebT = (req,res,next) =>{
  jwt.verify(req.body["token-Ok"],"tokenKey"),
  function(err,ok){
    if(err){
      res.json(`error, token necesario ${err}`)
    }else{
      console.log(`funcionando token ${ok}`);
      next();
    }
  }
} 
app.jsonWToken = jsonWebT;
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) { 
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; 
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app; 