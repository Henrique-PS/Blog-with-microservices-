import express from 'express'
import { randomBytes } from 'crypto'
// import { bodyParser } from 'body-parser' // serve para certificar que sempre que um usuário enviar dados JSON no corpo de solicitação, eles realmente sejam passados e apareçam apropriadamente em maipulador de solicição
import cors from 'cors'

const app = express()
const posts = {}
app.use(/* bodyParser.json() */ express.json())
app.use(cors()) // permite que a aplicação seja utilizada como um middleware

app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body

  posts[id] = {
    id,
    title
  }

  res.status(201).send(posts[id])
})

app.listen(4000, () => {
  console.log('Listening on 4000')
})
