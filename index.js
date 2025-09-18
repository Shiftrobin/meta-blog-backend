const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
require('dotenv').config(); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());

//routes 
const blogRoutes = require('./src/routes/blog.route');  
app.use('/blog', blogRoutes)

//mongoose configuration
async function main() { 
  await mongoose.connect(process.env.DB_URL);
}

main().then(()=>console.log("MongoDB Database connected successfully!")).catch(err => console.log(err));




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})