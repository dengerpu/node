var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 引入JWT工具包
const JWT = require("./utils/JWT");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var uploadRouter = require('./routes/upload')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 设置中间件，token过期体验
app.use((req, res, next)=> {
  // 排除login相关的路由和接口
  if(req.url.includes("login")) {
    next()
    return
  }
  // ?.相当于req.headers["authorization"] && req.headers["authorization"].split(" ")[1]
  const token = req.headers["authorization"]?.split(" ")[1]
  console.log("获取到的token", token)
  if(token) {
    const payload = JWT.verify(token)
    console.log("解析的token", payload)
    if(payload) {
      // 重新计算token过期时间
      const newToken = JWT.generate({
        _id: payload._id,
        username: payload.username
      }, "1d")
      res.header("Authorization",newToken)
      next()
    } else {
      res.status(401).send({
        code: 3,
        msg: "登陆过期"
      })
    }
  } else {
    next()
  }
})

app.use('/', indexRouter);
app.use('/api/user', usersRouter);
app.use('/login', loginRouter)
app.use('/upload', uploadRouter)

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
