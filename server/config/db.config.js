const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://admin:admin@cluster0.9oks1.mongodb.net/files?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
module.exports = connection