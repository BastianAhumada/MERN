// Folder Connection With BD ( MONGODB )

import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/mern-task').then(e => console.log('Database Connect'))  // Connect With Database
.catch(error => console.log(error))

export default mongoose