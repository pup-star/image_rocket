const express = require('express')
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const ImageRoute = require('./routes/image')

dotenv.config();

mongoose.connect(process.env.MONGOURL)
.then(() => console.log("Foodly Database Connected"))
.catch((err) => console.log(err));


app.use(express.static('Images'));
app.use(express.json());

app.use("/api/image", ImageRoute);

app.listen(process.env.PORT || 6013, () => console.log(`Foodly Backend is running on ${process.env.PORT}!`));