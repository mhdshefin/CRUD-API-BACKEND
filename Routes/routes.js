const express = require('express')
const router = express.Router()
const product = require('../Models/Products.model.js')
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../Controller/product.controller.js')

//Get product

router.get('/', getProducts)
router.get('/:id', getProduct)

//Create product

router.post('/', createProduct)

//Update product

router.put('/:id', updateProduct)

//Delete product

router.delete('/:id', deleteProduct)



module.exports = router;