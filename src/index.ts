import cors from 'cors'
import express from 'express'
import logger from 'morgan'
import { connectToMongoDB } from './database/index'
import { produtosRouter } from './routes/Produtos'

connectToMongoDB()

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/produtos', produtosRouter)
app.get('/', (req, res) => res.send('Loja API'))

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server rodando na porta ${port}`))


export default app