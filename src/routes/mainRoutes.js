//const { Router } = require('express');
const express = require('express');
const router = express.Router();
const mainController = require ('../controllers/mainController');

router.get ('/', mainController.index);

router.get ('/detalles/:id', mainController.detalle);

module.exports = router;