require('dotenv').config() 
const app = require('./src/app')

// selecciono la variable de entorno que quiero utilizar
const {PORT} = process.env

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})