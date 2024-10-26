const mongoose = require('mongoose')

const productschema = mongoose.Schema(
    {

        name: {
            type: String,
            required: [true, "Please enter product name"]
        },

        quantity: {
            type: Number,
            required: true

        },

        Price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        },
    },

    {
        Timestamp: true,
    }

)

const product = mongoose.model("product", productschema)

module.exports = product