const mongoose = require('mongoose');

mongoose.set('strictQuery', true)

//mongodb+srv://tonilogar:Zaratustra_27@cluster0.tnyvv.mongodb.net/dataBase
//mongodb://127.0.0.1/basicJavascriptMongodb
mongoose.connect('mongodb+srv://tonilogar:Zaratustra_27@cluster0.tnyvv.mongodb.net/dataBase', {
    useNewUrlParser: true
}) 
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err))

    //console.group('Data base ' + process.env.MONGODB_URI )