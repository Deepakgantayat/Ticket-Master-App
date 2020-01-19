const express =  require('express')
const router = require('./config/routes')
const cors = require('cors')
const app = express()
const port = 3030
const configureDB = require('./config/database')

app.use(express.json())
configureDB()
app.use(cors())

app.get('/',(req,res)=>{
    res.send('welcome to the ticket master app')
})

app.use('/',router)

app.listen(port,()=>{
    console.log('listening on port ',port)
})