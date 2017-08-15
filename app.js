var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',ejs.__express);
app.set('view engine', 'html');

app.use('public',express.static(__dirname + '/public'));
app.use('/views',express.static(__dirname + '/views'));
app.use('/public/images',express.static(__dirname + '/public/images'));
app.use('/public/javascripts',express.static(__dirname + '/public/javascripts'));
app.use('/public/stylesheets',express.static(__dirname + '/public/stylesheets'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'bower_components')));
app.use(express.static(path.join(__dirname,'public/javascripts')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// var mysql = required('mysql');
// var connection = mysql.createConnection({
//    host:    '127.0.0.1',
//    user:    'root',
//    password:'zhujiechen',
//    database:'expressdb'
// });

// connection.connect();
// var selectSQL = 'select * from 'communication'';
// var arr = [];
// connection.query(selectSQL,function (err,rows) {
//    if (err) throw err;
//     for(var i=0;i<rows.length;i++){
//         arr[i] = rows[i].c_name;
//     }
//     console.log(arr);
// });
// connection.end();



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
