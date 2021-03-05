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
          }, {
            img : 'https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Black-Game-Royal-Toe/Images/Air-Jordan-1-Retro-High-Black-Game-Royal-Toe/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606322574',
            brand: 'Jordan',
            name: 'Royal Toe 1',
            color: 'Royal Blue, White',
            price: 190,
            size: 10,
            addToCart: true
          }, {
            img : 'https://cdn.flightclub.com/TEMPLATE/012120/1.jpg',
            brand: 'Jordan',
            name: 'Oreo 4',
            color: 'Black, Grey',
            price: 220,
            size: 9.5,
            addToCart: true
          }, {
            img : 'https://cdn.flightclub.com/TEMPLATE/011369/1.jpg',
            brand: 'Jordan',
            name: 'Cardinal 7',
            color: 'White, Red',
            price: 140,
            size: 9,
            addToCart: true
          }, {
            img : 'https://cdn.flightclub.com/TEMPLATE/011564/1.jpg',
            brand: 'Jordan',
            name: 'Playoff 12',
            color: 'Black, White',
            price: 140,
            size: 9.5,
            addToCart: true
          }, {
            img : 'https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Core-Black-White/Images/adidas-Yeezy-Boost-350-V2-Core-Black-White/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647672',
            brand: 'Adidas',
            name: 'Yeezy Boost 350 Oreo',
            color: 'Black, White',
            price: 200,
            size: 9.5,
            addToCart: true
          }, {
            img : 'https://assets.adidas.com/images/w_600,f_auto,q_auto/822b784aec17404ba4d9ab6e00fd2e7e_9366/Nite_Jogger_Shoes_Grey_EG8849_01_standard.jpg',
            brand: 'Adidas',
            name: 'Nite Jogger',
            color: 'White',
            price: 80,
            size: 9.5,
            addToCart: true
          }, {
            img : 'https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Beluga-2pt0/Images/adidas-Yeezy-Boost-350-V2-Beluga-2pt0/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606322713',
            brand: 'Adidas',
            name: 'Yeezy 350 Beluga',
            color: 'Grey, Orange',
            price: 200,
            size: 9,
            addToCart: true
          }, {
            img : 'https://images.stockx.com/images/Adidas-NMD-HU-Pharrell-Williams-Yellow-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606321318',
            brand: 'Adidas',
            name: 'Human Race',
            color: 'Yellow, Black',
            price: 200,
            size: 9.5,
            addToCart: true
          }, {
            img : 'https://images.journeys.com/images/products/1_457518_ZM.JPG',
            brand: 'Vans',
            name: 'Old Skool Checkerboard',
            color: 'Black, White',
            price: 50,
            size: 9.5,
            addToCart: true
          }, {
            img : 'https://cdn.shopify.com/s/files/1/0248/7857/9748/products/rd_vans-half-cab-black_835x.jpg?v=1579727028',
            brand: 'Vans',
            name: 'Half Cab',
            color: 'Black, White',
            price: 60,
            size: 9.5,
            addToCart: true
          }, {
            img : 'https://cdn.shoplightspeed.com/shops/603507/files/24343004/800x1024x2/vans-vans-chukka-low-shoes.jpg',
            brand: 'Vans',
            name: 'Chukka Low',
            color: 'Black, White',
            price: 40,
            size: 9,
            addToCart: true
          }, {
            img : 'https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw878b16cc/product_images/0530037915001NEW_00_359.jpg',
            brand: 'Vans',
            name: 'Sk8 - Hi',
            color: 'Black, White',
            price: 70,
            size: 9.5,
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
        res.redirect('sneakers/buy.ejs');
    })
})

store.delete('/:id', (req, res) => {
    Sneaker.findByIdAndRemove(req.params.id, (err, deletedSneaker) => {
      res.redirect('/store')
    })
  })

//show
store.get('/:id', (req, res) => {
    Sneaker.findById(req.params.id, (error, foundSneaker) => {
      res.render('sneakers/show.ejs', {
          sneaker: foundSneaker
        })
    })
})




module.exports = store
