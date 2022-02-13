const arrayPrueba = [1,2,3,4,5];
const objetoPrueba = {
  nombre: 'Federico',
  apellido: 'Liberatore',
  edad: 'Punto justo de asentamiento',
  eticidad: 'Soy muy ético'
}

const mainController = {
  index: (req,res) => {
    
    res.render ('main', {arrayPrueba : arrayPrueba} )
  },
  detalle: (req,res) => {
    res.render ('detalles', { 
      nombre: objetoPrueba.nombre,
      apellido: objetoPrueba.apellido,
      edad: objetoPrueba.edad,
      eticidad: objetoPrueba.eticidad
    })
  }
};

module.exports = mainController;