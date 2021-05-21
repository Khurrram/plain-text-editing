const express = require('express');
const router = express.Router();
const files = require('../models/fileModel');
//this is the POST method to get all the files, initally called by useEffect, then by getFiles method on pages/index.js
router.post('/', async (req, res) => {
    try {
    let filesOutput = await files.find({}).exec();
    res.json(filesOutput);
    }
    catch(err) {
        console.log(err);
        res.status(500).json("Server Error");
    }
});


module.exports = router;