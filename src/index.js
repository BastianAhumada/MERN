import express from 'express'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url';
import DBConnect from './database.js' // Connection Database
import Router from './routes/index.js' // Import objet Router

const app = express() // Servidor

//Settings
app.set('port', process.env.PORT || 3001) // NameValue, Value

//Midlewares -> Logics Befores Routes.
app.use(morgan('dev')) // Logs Request Server Morgan Dependencies.
app.use(express.json()) // Understand Request JSON.

// Router
app.use(Router) // Read File Routes For Request URLs

// Static Files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Way dirname work in module ES
app.use(express.static(path.join(__dirname,'public'))) // Folder Static in this Path

// Server UP
app.listen(app.get('port'), () => { // Retrieve variable of port 
  console.log('Servidor APP')
})