require('dotenv').config();

const express = require('express');
const routes = require('./routes/routes');

const app = express();

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next();
})

//routes
app.use('/',routes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:4000`);
});


