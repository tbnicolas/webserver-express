const express = require('express');
const app = express();
var hbs = require('hbs');
require('./hbs/helpers');
const port =process.env.PORT || 3000;
 //Un middleWare es un callback que se ejecuta siempre no importa la url que la persona pida
app.use(express.static(__dirname+'/public'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales' );
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
/*    let salida={
        nombre:'Nicolás',
        edad:21,
        url: req.url
    }*/
    res.render('home',{
        name: 'Nicolás',
    });
  //res.send('Hello World');
});
app.get('/about', function (req, res) {
    res.render('about');
});
app.listen(port, ()=>{
    console.log(`Escuchando penticiones en el puerto ${port}`);
});