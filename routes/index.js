const express = require('express');
const multer = require('multer');

const binaryReadController = require('../controllers/binaryReadController');

const router = express.Router();

/* Setting up multer */
const storage = multer.memoryStorage();
const upload = multer({storage: storage, limits:{fileSize:1048576, files:1, fields:0}});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NES Rom Disassembler' });
});

router.post('/', upload.single('romfile'), binaryReadController.binaryRead);

module.exports = router;
