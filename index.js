//importa dependencia de la biblioteca express
const express = require('express')
const path = require('path')
//crea la aplicacion 
const app = express()

// import 'dotenv/config'
require('dotenv').config()

//lee el body en formato json
app.use(express.json())

//define un puerto en que va a escuchar pedidos
const port = process.env.PORT
// const port = 3000

//endpoints
app.get('/', (pedido, respuesta) => {
    respuesta.render("index")
})

app.set('views','./views')
app.set('view engine','ejs')
app.use('/public', express.static(path.join(__dirname, 'public')))



app.listen(port)