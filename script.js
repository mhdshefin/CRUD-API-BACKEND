const express = require('express')
const mongoose = require('mongoose')
const product = require('./Models/Products.model.js')
const productRoute = require('./Routes/routes.js')
const app = express()


//middleware

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes

app.use('/api/products',productRoute)


app.get('/', (req, res) => {
    res.send('Hello this is Node API')
})



mongoose.connect("mongodb+srv://shefinpt:shefinpt2538@cluster0.aljzj.mongodb.net/NOde-API?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Connected to database');
        app.listen(3000, () => {
            console.log('Server running on port 3000');

        })

    })
    .catch(() => {
        console.log('Connection failed');

    })
