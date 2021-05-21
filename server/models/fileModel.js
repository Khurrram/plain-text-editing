const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    text: String,
    name: String,
    type: String,
    lastModified: Date
});

module.exports = mongoose.model('files', fileSchema);