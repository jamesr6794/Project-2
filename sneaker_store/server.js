const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

require('dotenv').config();
const app = express()
const db = mongoose.connection
const PORT = process.env.PORT
const databaseName = 'store';


app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));


mongoose.connect(`mongodb://localhost:27017/${databaseName}`, { useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

const sneakersController = require('./controllers/sneakers_controller.js')
app.use('/store', sneakersController)

app.get('/', (req, res) => {
    res.redirect('/store')
  })

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
  })