const product = require('../Models/Products.model.js')

//Get product

const getProducts = async (req, res) => {
    try {
        const Products = await product.find({})
        res.status(200).json(Products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getProduct = async (req, res) => {

    try {
        const { id } = req.params
        const products = await product.findById(id)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Create product

const createProduct = async (req, res) => {

    try {

        const Product = await product.create(req.body)
        res.status(200).json(Product)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Update product

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const products = await product.findByIdAndUpdate(id, req.body)

        if (!products) {
            return res.status(404).json({ message: "Product not found" })
        } else {
            const updatedProduct = await product.findById(id)
            res.status(200).json(updatedProduct)
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

//Delete product

const deleteProduct = async (req, res) => {

    try {

        const { id } = req.params;

        const products = await product.findByIdAndDelete(id)

        if (!products) {
            return res.status(404).json({ message: "Product not found!" })
        } else {
            res.status(200).json({ message: "Product deleted successfully" })
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

//Export

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}