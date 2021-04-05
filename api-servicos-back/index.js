const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const usersRoute = require('./routes/pacientesRoute')
const port = 3000

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

usersRoute(app)

app.get('/', (req, res) => res.send('Olá mundo!'))

app.listen(port, () => console.log(`Express rodando na porta ${port}`)) 