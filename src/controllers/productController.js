const arrayPrueba = [1,2,3,4,5];

const productController = {
  index: (req,res) => {
    
    res.render ('productController', {arrayPrueba : arrayPrueba} )
  },
  detalle: (req,res) => {
    res.render ('productController')
  },
}

module.exports = productController;