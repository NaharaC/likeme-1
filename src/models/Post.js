const {DB} = require('../config/bd')

const agregar = async (titulo, url, descripcion) => {
try {
    const SQLQuery = "INSERT INTO posts (titulo, url, descripcion, likes) VALUES($1, $2, $3, DEFAULT) RETURNING *"
    const SQLValues = [titulo, url, descripcion]
    const { rows } = await DB.query(SQLQuery, SQLValues)
    console.log(rows)
    return rows
} catch (error) {
    throw error
}
}

const obtenerTodos = async () => {
    try {
        const SQLQuery = "SELECT * FROM posts"
        const {rows} = await DB.query(SQLQuery)

        return rows
    } catch (error) {
        
    }
}

module.exports = {
    agregar,
    obtenerTodos
}