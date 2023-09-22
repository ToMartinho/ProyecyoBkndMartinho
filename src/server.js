import  express  from 'express'
import { __dirname } from './utils.js'
import productsRouter from './router/products.router.js'

// ACTIVAMOS EL MODULO PARA LEVANTAR EL SV
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api/products',productsRouter)


// iniciamos en escucha el servidor
app.listen(8080,()=>{
    console.log("escuchando al puerto 8080");
})