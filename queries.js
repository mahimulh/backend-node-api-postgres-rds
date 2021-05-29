const Pool = require('pg').Pool
const pool = new Pool({
  user: '',
  host: '',
  database: 'postgres',
  password: '',
  port: 5432,
})

//CRUD functions
const getUsers = (request, response) => { 
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => { //GET all users
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getUserByid = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => { //GET single user by id, $1 is a placeholder in postgres
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => { //POST a new user
      if (error) {
        throw error
      }
      response.status(201).send(`User added with id: ${result.insertid}`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3', //PUT updated data in an existing user
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with id: ${id}`)
      }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => { //DELETE a user
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with id: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserByid,
    createUser,
    updateUser,
    deleteUser,
  }