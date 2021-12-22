var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

router.get('/', function(req, res, next) {
    res.render('eventos',{
      title: 'Eventos - TEROS RC'
    });
  });

  router.get('/', function(req, res, next) {
    res.render('eventos',{
      title: 'Eventos - TEROS RC',
      isSubcomisiones: true
    });
  });

  router.post('/', async function(req, res, next) {
    //aca va a procesar lo que pase en el formulario
    var nombre = req.body.nombre;
    var email = req.body.email;
    var texto = req.body.texto;
    console.log(req.body.nombre)
    var obj={
      to: 'asd@gmail.com',
      subject: 'Consulta a subcomision de EVENTOS',
      html: nombre + ' Se contacto a traves de la web y quiere saber mas info a este correo ' + email + ' <br> y su mensaje es: ' + texto + '.',
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
    res.render('eventos',{
      message: 'Mensaje enviado correctamente.',
      isSubcomisiones: true
    })
  });

  module.exports = router;