const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://V9DOpX56DwZaod8z:V9DOpX56DwZaod8z@cluster0.bg7f1.mongodb.net/')
    .then(() => console.log("Connected mongodb"))
    .catch(e => console.log(e));