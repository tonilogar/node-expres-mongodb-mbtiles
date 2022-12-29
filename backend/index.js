const express = require('express')
const morgan = require('morgan')//Nos permite ver por consola lo que las aplicaciones cliente van pidiendo
const path = require('path')

//Initializations
const app = express()
require('./database')

//Setting////
app.set('port', 3000)

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))//This middleware lets to read data from forms like json 
app.use(express.json())

// Routes
app.use('/api/projects', require('./routes/projects'))

//Static files
app.use(express.static(path.join(__dirname, 'public')))// En la direccion http://localhost:4000 me mostrara los ficheros estaticos index.html etc..



//Start the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})