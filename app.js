const express = require('express');
const path = require('path');
const app = express();
const mainRoutes = require ( './src/routes/mainRoutes')
const productsRoutes = require ( './src/routes/productsRoutes' );



app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use ('/', mainRoutes)
app.use ('/products', productsRoutes)

app.listen (3040, (err) => {
  if (err) {
    console.log('Error al levantar el srv', err)
  }else {
    console.log ('Se levantó el servidor en el puerto 3040')
  }
})

module.exports = app;