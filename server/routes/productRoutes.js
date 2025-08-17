// routes/productRoutes.js
const express = require('express');
const router = express.Router();

// Sample products list
const products = [
  {
    id: 'shoe-1',
    name: 'Flight Max',
    price: "150.00",
    image: '/images/shoe1.jpg',
    sizes: [7, 8, 9, 10, 11],
    tag: 'New'
  },
  {
    id: 'shoe-2',
    name: 'Swift Pro',
    price: "140.00",
    image: '/images/shoe2.jpg',
    sizes: [7, 8, 9, 10],
    tag: 'Best Seller'
  },
  {
    id: 'shoe-3',
    name: 'SkyJet',
    price: "160.00",
    image: '/images/shoe3.jpg',
    sizes: [8, 9, 10, 11],
    tag: 'Limited'
  },
  {
    id: 'shoe-4',
    name: 'Volt Boost',
    price: "135.00",
    image: '/images/shoe4.jpg',
    sizes: [7, 8, 9, 10, 11],
    tag: 'Hot'
  },
  {
    id: 'shoe-5',
    name: 'Bounce Edge',
    price: "125.00",
    image: '/images/shoe5.jpg',
    sizes: [8, 9, 10],
    tag: 'New'
  },
  {
    id: 'shoe-6',
    name: 'Ignite Rise',
    price: "145.00",
    image: '/images/shoe6.jpg',
    sizes: [7, 9, 10, 11],
    tag: 'Best Seller'
  },
  {
    id: 'shoe-7',
    name: 'Flight Max',
    price: "149.00",
    image: '/images/shoe7.jpg',
    sizes: [7, 8, 9, 10, 11],
    tag: 'Hot'
  },
  {
    id: 'shoe-8',
    name: 'Swift Pro',
    price: "132.00",
    image: '/images/shoe8.jpg',
    sizes: [8, 9, 10],
    tag: 'Limited'
  },
  {
    id: 'shoe-9',
    name: 'SkyJet',
    price: "158.00",
    image: '/images/shoe9.jpg',
    sizes: [7, 8, 9],
    tag: 'New'
  },
  {
    id: 'shoe-10',
    name: 'Volt Boost',
    price: "137.00",
    image: '/images/shoe10.jpg',
    sizes: [7, 9, 10, 11],
    tag: 'Best Seller'
  },
  {
    id: 'shoe-11',
    name: 'Bounce Edge',
    price: "139.00",
    image: '/images/shoe11.jpg',
    sizes: [8, 9, 10, 11],
    tag: 'Limited'
  },
  {
    id: 'shoe-12',
    name: 'Ignite Rise',
    price: "142.00",
    image: '/images/shoe12.jpg',
    sizes: [7, 8, 9, 10],
    tag: 'New'
  },
  {
    id: 'shoe-13',
    name: 'Flight Max',
    price: "151.00",
    image: '/images/shoe13.jpg',
    sizes: [9, 10, 11],
    tag: 'Hot'
  },
  {
    id: 'shoe-14',
    name: 'Swift Pro',
    price: "143.00",
    image: '/images/shoe14.jpg',
    sizes: [7, 8, 9, 10],
    tag: 'Best Seller'
  },
  {
    id: 'shoe-15',
    name: 'SkyJet',
    price: "155.00",
    image: '/images/shoe15.jpg',
    sizes: [8, 9, 10, 11],
    tag: 'Limited'
  },
  {
    id: 'shoe-16',
    name: 'Volt Boost',
    price: "138.00",
    image: '/images/shoe16.jpg',
    sizes: [7, 8, 9],
    tag: 'New'
  }
];


// GET /api/products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
