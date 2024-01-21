import express from 'express'
import hbs from 'hbs'
import cookieParser from 'cookie-parser'
const app = express()
  
import dotenv from 'dotenv'
dotenv.config()
import router from '../router/router.js'
import { join } from 'path'
import connectdb from '../dbConnection/connectdb.js'

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT
//   Server the static file 

app.use(express.static(join(process.cwd(), 'public')))
hbs.registerPartials(join(process.cwd(), 'views', 'Commoncode'))

//  set the template file 
app.set('view engine', 'hbs')


connectdb()
app.use(router)




app.listen(port, () => {
    console.log(`server listen on http://localhost:${port}/register`)
})