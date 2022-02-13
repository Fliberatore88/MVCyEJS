//const { Router } = require('express');
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/', productController.detalle);
router.get ('/detalles/:id', productController.detalle)

module.exports = router;