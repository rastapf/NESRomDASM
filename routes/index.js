const express = require('express');
const multer = require('multer');

const router = express.Router();

/* Setting up multer */
const storage = multer.memoryStorage();
const upload = multer({storage: storage, limits:{fileSize:1048576, files:1, fields:0}});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NES Rom Disassembler' });
});

router.post('/', upload.single('romfile'), function(req, res, next) {
  const romName = req.file.originalname;
  const bufferedFile = req.file.buffer;
  const rows = bufferedFile.length / 16;

  res.render('results', {title: `NES Rom Disassembler ${romName}`, romName, bufferedFile, rows})
})

module.exports = router;
