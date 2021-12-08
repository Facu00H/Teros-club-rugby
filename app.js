var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config(); // para que cargue los datos del .env

//ser hanglebars middleware

var indexRouter = require('./routes/index');
var contactoRouter = require('./routes/contacto');
var administracionRouter = require('./routes/administracion');
var comunicacionesRouter = require('./routes/comunicaciones');
var deportesRouter = require('./routes/deportes');
var disciplinaRouter = require('./routes/disciplina');
var eventosRouter = require('./routes/eventos');
var fiestasRouter = require('./routes/fiestas');
var hockeyRouter = require('./routes/hockey');
var infraestructuraRouter = require('./routes/infraestructura');
var novedadesRouter = require('./routes/novedades');
var proyectosRouter = require('./routes/proyectos');
var rugbyRouter = require('./routes/rugby');
var saludRouter = require('./routes/salud');
var sponsorsRouter = require('./routes/sponsors');
var subcomisionesRouter = require('./routes/subcomisiones');
var valoresRouter = require('./routes/valores');
var viajesRouter = require('./routes/viajes');
var loginRouter = require('./routes/admin/login');

const exp = require('constants');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/administracion', administracionRouter);
app.use('/comunicaciones', comunicacionesRouter);
app.use('/contacto', contactoRouter);
app.use('/deportes', deportesRouter);
app.use('/disciplina', disciplinaRouter);
app.use('/eventos', eventosRouter);
app.use('/fiestas', fiestasRouter);
app.use('/hockey', hockeyRouter);
app.use('/infraestructura', infraestructuraRouter);
app.use('/novedades', novedadesRouter);
app.use('/proyectos', proyectosRouter);
app.use('/rugby', rugbyRouter);
app.use('/salud', saludRouter);
app.use('/sponsors', sponsorsRouter);
app.use('/subcomisiones', subcomisionesRouter);
app.use('/valores', valoresRouter);
app.use('/viajes', viajesRouter);
app.use('/admin/login', loginRouter);

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
