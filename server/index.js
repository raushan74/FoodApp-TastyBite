const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dishDBRouter = require('./src/routes/dishDBrouter.js')
const authRouter = require('./src/routes/authRouter.js')

const app = express();
app.use(cors());
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();

//const dishStaticRouter = require("./routes/dishes.router.js"); 


mongoose.connect(`${process.env.MONGO_URL}`, { useNewUrlParser: true, useUnifiedTopology: true })

const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.get('/', (req, res) => res.send('Server is working !'));

//app.use('/api/dishes' , dishStaticRouter);   //localhost:8000/api/dishes
app.use('/getdishes', dishDBRouter);         //localhost:8000/getdishes
app.use("/api/auth", authRouter);           // localhost:8000/api/auth

app.listen(process.env.PORT, () => console.log(`Food app is listening on port ${process.env.PORT}!`))
