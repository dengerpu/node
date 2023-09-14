var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 设置session
app.use(
  session({
    name: 'depSystem',
    secret: "depSession", // 服务器生成 session 的签名
    resave: true, // //重新设置session后， 会自动重新计算过期时间
    saveUninitialized: true, //强制将为初始化的 session 存储
    cookie: {
      maxAge: 1000 * 60 * 10,// 过期时间
      secure: false, // 为 true 时候表示只有 https 协议才能访问cookie
    },
    rolling: true, //为 true 表示 超时前刷新，cookie 会重新计时； 为 false 表示在超时前刷新多少次，都是按照第一次刷新开始计时。
    store: MongoStore.create({
        mongoUrl: 'mongodb://admin:123456@127.0.0.1:27017/express_session',
        ttl: 1000 * 60 * 10 // 过期时间
    })
  })
)

// 设置中间件, session过期校验
app.use((req, res, next) => {
  // 排除登陆相关的路由和接口
  if(req.url.includes("login")) {
    next()
    return
  }
  if(req.session.user) {
    // 重新设置一下session,只要在没过期前请求接口，就会重新计时session的过期的时间
    req.session.myDate = Date.now()
    next()
  } else {
    console.log('认证失败')
    // 是接口， 返回错误码
    // 不是接口就重定向
    // AJAX 请求本身并不能直接控制浏览器的重定向行为。
    // 重定向是由浏览器进行的操作，与 AJAX 请求本身无关。
    req.url.includes("api") ? res.status(401).json({
      code: 3,
      msg: '认证失败，请重新登录'
    }) : res.redirect("/login")
  }
})

app.use('/', indexRouter);
app.use('/api/user', usersRouter);
app.use('/login', loginRouter)

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
