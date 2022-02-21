const express =require('express')
const path = require('path')
const mongoose = require('mongoose')

const app =express()


app.use(express.urlencoded({
    extended:true
}))


// setting view engine
app.set('view engine', 'ejs')
app.set('views','views')


// using router
const WebRouter = require('./routes/Web')
app.use(WebRouter)


// declaring db connection
const dbDriver ="mongodb+srv://Soumyadip:Panja21031998@cluster0.cf1ge.mongodb.net/bloggy"

// connection
const port =process.env.PORT ||3005
mongoose.connect(dbDriver,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((result) =>{
    app.listen(port,() =>{
        console.log(`DB is connected`)
        console.log(`server running at http://localhost:${port}`)
    })
}).catch((error) =>{
    console.log(`Error connecting to DB`)
})