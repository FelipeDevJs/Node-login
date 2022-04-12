const express = require('express')
const app = express()
const PORT = process.env.PORT || 5500
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')

require('dotenv').config()

const router = require('./router')

const db = require('./config/db')
db()

app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(
    session({
        key:"user_token",
        secret:process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            expire: 86400, //24h
        }
    })
)

app.use((req,res,next)=>{
    if(req.cookies.user_token && !req.session.user){
        res.clearCookie("user_token")
    }next()
})


app.use(router)

app.listen(PORT, console.log('🔥 rodando '+PORT))