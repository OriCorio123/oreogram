require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db');

connectDB();
app.listen(process.env.PORT || 3000,()=>{
    console.log(`server started at port ${process.env.PORT || 3000}`)
})