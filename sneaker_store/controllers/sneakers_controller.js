const express = require('express')
const Sneaker = require('../models/store.js')
const store = express.Router()


store.get('/seed', (req,res) => {
    Sneaker.create([
        {
            img : 'https://images.solecollector.com/complex/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/nike-griffey-white-black-yellow-volt-05_chhqsc',
            brand: 'Nike',
            name: 'Air Griffey Max 1',
            color: 'Royal Blue, White',
            price: 199,
            size: 9.5,
            addToCart: true
          }, {
            img : 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/039/110/229/original/522430_01.jpg.jpeg?1594395410',
            brand: 'Nike',
            name: 'Air Max 97',
            color: 'Black',
            price: 150,
            size: 9.5,
            addToCart: true
          }, {
            img : 'https://images.stockx.com/images/Nike-Dunk-High-Unlucky-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1607054448',
            brand: 'Nike',
            name: 'SB Unlucky',
            color: 'Black, Red',
            price: 200,
            size: 9.5,
            addToCart: true
          }, {
            img : 'https://www.solereview.com/wp-content/uploads/2015/09/Nike_Air_Zoom_Elite_8_3.jpg',
            brand: 'Nike',
            name: 'Zoom Elite 8',
            color: 'Orange, White',
            price: 100,
            size: 10,
            addToCart: true
          }
    ], (error, allSneakers) => {
        res.redirect('/store')
    })
})

//index
store.get('/', (req,res) => {
    Sneaker.find({}, (error, allSneakers) => {
        res.render('../views/sneakers/index.ejs', {
            allSneakers
        })
    })
})

// request
store.get('/new', (req, res) => {
    res.render('sneakers/new.ejs')
  })

store.post('/', (req, res) => {

    Sneaker.create(req.body, (error, createdSneaker) => {
        res.redirect('/store');
    });
});

store.put('/:id', (req, res) => {

    Sneaker.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedSneaker) => {
        res.redirect('/store');
    });
});



//buy
store.get('/:id/buy', (req,res) => {
    Sneaker.findById(req.params.id, (error, boughtSneaker) => {
        res.render('sneakers/buy.ejs', {
            sneaker: boughtSneaker
        })
    })
})

store.put('/:id/buy', (req,res) => {
   
    
    Sneaker.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, boughtSneaker) => {
        res.redirect('buy.ejs');
    })
})

//show
store.get('/:id', (req, res) => {
    Sneaker.findById(req.params.id, (error, foundSneaker) => {
      res.render('show.ejs', {
          sneaker: foundSneaker
        })
    })
})




module.exports = store
