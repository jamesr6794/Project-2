const express = require('express')
const Sneaker = require('../models/store.js')
const store = express.Router()


store.get('/store/seed', (req,res) => {
    Sneaker.create([
        {
            img : String,
            brand: 'Nike',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          }, {
            img : String,
            brand: 'Nike',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          }, {
            img : String,
            brand: 'Nike',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          }, {
            img : String,
            brand: 'Nike',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          },{
            img : String,
            brand: 'Jordan',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          }, {
            img : String,
            brand: 'Jordan',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          }, {
            img : String,
            brand: 'Jordan',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          }, {
            img : String,
            brand: 'Jordan',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          },{
            img : String,
            brand: 'Adidas',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          }, {
            img : String,
            brand: 'Adidas',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          }, {
            img : String,
            brand: 'Adidas',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          }, {
            img : String,
            brand: 'Adidas',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          },{
            img : String,
            brand: 'Vans',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          }, {
            img : String,
            brand: 'Vans',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          }, {
            img : String,
            brand: 'Vans',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          }, {
            img : String,
            brand: 'Vans',
            name: { type: String, required: true },
            color: { type: String, required: true },
            price: Number,
            quantity: Number,
            addToCart: Boolean
          },
    ], (error, data) => {
        res.redirect('/store')
    })
})

//index
store.get('/store', (req,res) => {
    Sneaker.find({}, (error, allSneakers) => {
        res.render('index.ejs', {
            store: allSneakers
        })
    })
})

//show
store.get('/store/:id', (req, res) => {
    Sneaker.findById(req.params.id, (error, foundSneaker) => {
      res.render('show.ejs', {
          sneaker: foundSneaker
        })
    })
})

// request
store.get('/store/new', (req, res) => {
    res.render('new.ejs')
  })

store.post('/store', (req, res) => {

    Sneaker.create(req.body, (error, createdSneaker) => {
        res.redirect('/store');
    });
});

store.put('/store/:id', (req, res) => {

    Sneaker.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedSneaker) => {
        res.redirect('/store');
    });
});

//buy
store.get('/store/:id/buy', (req,res) => {
    Sneaker.findById(req.params.id, (error, boughtSneaker) => {
        res.render('buy.ejs', {
            sneaker: boughtSneaker
        })
    })
})

store.put('/store/:id/buy', (req,res) => {
   
    
    Sneaker.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, boughtSneaker) => {
        res.redirect('buy.ejs');
    })
})


module.exports = store
