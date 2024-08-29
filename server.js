import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import productRouter from './routes/productRoute.js'
import { connectDB } from './config/db.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())

app.use('/api/product', productRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)

connectDB()

app.get('/', (req,res) => {
    res.send('API is working...')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})