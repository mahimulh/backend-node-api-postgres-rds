const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
        response.json({ info: 'Node.js, Express, and Postgres API' })
})


const db = require('./queries');

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserByid)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})