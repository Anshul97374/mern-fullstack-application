//Importing express package
const express = require('express')
const dotenv = require('dotenv')
const mongoose= require('mongoose')

//configuring files
dotenv.config()

const workoutRoutes = require('./routes/workout')

const userRoutes = require('./routes/user')

//Express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//Routes (http://localhost:4000/)
app.get('/',(req, res)=>{
    res.json({msg: `Welcome to our application`})
})

app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)

//PORT num
const PORT = process.env.PORT;

//connect to database
mongoose.connect(process.env.MONGO_URI).
then(() =>{
    //listen for request
app.listen(PORT,()=>{
    console.log(`Server is up and listening at: http://localhost:${PORT} & connected to our db`)
})
})
.catch((error)=>{console.log(error)})

