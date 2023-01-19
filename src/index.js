import express from 'express'
import morgan from 'morgan'

import Router from './routes/index.js'

const app = express() // Servidor

//Settings
app.set('port', process.env.PORT || 3001) // NameValue, Value

//Midlewares -> Logics Befores Routes.
app.use(morgan('dev')) // Logs Request Server Morgan Dependencies.
app.use(express.json()) // Understand Request JSON.

// Router
app.use(Router) // Read File Routes

app.listen(app.get('port'), () => { // Retrieve variable of port 
  console.log('Servidor APP')
})