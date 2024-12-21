const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require('./config/mongoose-connection');

const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes')

app.get('/' ,(req,res)=>{
   res.send('hn bhai chal rha hai')
})
app.use('/api/admin',adminRoutes);
app.use('/api/user',userRoutes);

app.listen(process.env.PORT || 3001);