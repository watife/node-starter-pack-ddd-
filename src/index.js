import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const morgan = require('morgan')
require('dotenv').config()

/**
 * app routes
 */
import companyRoutes from './company/express-routes'

const app = express()
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json())

app.use(cors());
app.use(morgan('dev')); 

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}` )
})

app.use("/api/v1/company", companyRoutes);