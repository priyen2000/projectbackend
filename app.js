var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var category=require('./routes/category_routes');
var categorybyid=require('./routes/categorybyid_routes');
var deleteallcategory=require('./routes/multideletecategory_route');
var product=require('./routes/product_route');
var deleteallproduct=require('./routes/multideleteproduct_route');
var productbyid=require('./routes/productbyid_route');
var updateproduct=require('./routes/Update_product_route');
var productbycatname=require('./routes/productBycatname_route');
var userlogin=require('./routes/user_route');
var forgetpass=require('./routes/forgetpass_route');
var email=require('./routes/email_routes');
var order=require('./routes/order_route');
var orderbyuname=require('./routes/orderbyusername_route');
var toporder=require('./routes/toporder_route');
var insertorder=require('./routes/insert_order_route');
var addrepair=require('./routes/addrepair_route');
var repair=require('./routes/repair_route');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category',category);
app.use('/categorybyid',categorybyid);
app.use('/deleteallcategory',deleteallcategory);
app.use('/product',product);
app.use('/deleteallproduct',deleteallproduct);
app.use('/productbyid',productbyid);
app.use('/updateproduct',updateproduct);
app.use('/productbycatname',productbycatname);
app.use('/userlogin',userlogin);
app.use('/forgetpass',forgetpass);
app.use('/email',email);
app.use('/order',order);
app.use('/orderbyusername',orderbyuname);
app.use('/toporder',toporder);
app.use('/insertorder',insertorder);
app.use('/repair',repair);
app.use('/addrepair',addrepair);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
