const express = require('express');
const router = express.Router();
const files = require('../models/fileModel');
//this is the backend POST method to save the updated file, called from saveFile.js
router.post('/:fileId(*)', async (req, res) => {
    try {
        let text = req.body.text;
        let name = req.body.name;

        try {
            files.findOne({name: name}).exec().then((file) => {
                if (file) {
                    file.updateOne({text: text, lastModifiedDate: new Date()}).then((upFile) => {
                        res.json(upFile);
                    });
                } else {
                    res.status(404).json("File not Found!")
                }
            });
        }
        catch(err) {
            console.log(err);
            res.status(500).json("Server Error!")
        }

    }
    catch(err) {
        console.log(err);
        res.status(500).json("Server Error");
    }
});

module.exports = router;