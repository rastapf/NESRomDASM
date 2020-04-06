const BinaryRead = require('../models/BinaryRead');

const binaryReadController = {
    binaryRead: (req, res, next) => {
        const romName = req.file.originalname;
        const bufferedFile = req.file.buffer;

        const topHeader = [
            'Offset (h)', '00', '01', '02', '03', '04',
            '05', '06', '07', '08', '09', '0A', '0B',
            '0C', '0D', '0E', '0F'
        ];

        const rowSize = topHeader.length;

        const bytesArray = BinaryRead.BinaryToStringArray(bufferedFile, topHeader);

        return res.render('results', {title: `NES Rom Disassembler ${romName}`, romName, bytesArray, rowSize});
    }
};

module.exports = binaryReadController;