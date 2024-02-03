import express from 'express'
import cors from 'cors'
import * as UserController from '@controllers/UserController'
import * as PresentationController from '@controllers/PresentationController'

const app = express()
app.use(cors())

app.get('/', (request, response) => {
  return response.json({ message: 'api works!' })
})

app.get('/user/:username', async (request, response) => {
  console.log('userId', request.params.username)
  const user = await UserController.getUser(request.params.username)
  return response.json(user)
})

app.get('/presentations', async (request, response) => {
  const presentations = await PresentationController.getAll()
  return response.json(presentations)
})

app.get('/presentations/:url', async (request, response) => {
  const url = request.params.url
  const presentation = await PresentationController.getOne(url)
  return response.json(presentation)
})

const PORT = process.env.PORT ?? 3333

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`)
})
