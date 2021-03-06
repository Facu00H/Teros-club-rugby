var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

router.get('/', function(req, res, next) {
    res.render('contacto',{
      title: 'Contacto - TEROS RC',
      isContacto: true
  });
  });


  router.post('/', async function(req, res, next) {
    //aca va a procesar lo que pase en el formulario
    var nombre = req.body.nombre;
    var email = req.body.email;
    var texto = req.body.texto;
    var obj={
      from: email,
      to: 'asd@gmail.com',
      subject: 'Consulta terosRC',
      html: 'Emisor: ' + nombre + '<br>' + 'Su mail: ' + email + '<br>' + 'Su mensaje: ' + texto,
    }

    var teros = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // escribir para que comunique con .env
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    });
    var info = await teros.sendMail(obj);
    res.render('contacto',{
      message: 'Mensaje enviado correctamente.',
      isContacto: true
    })
  });



  module.exports = router;