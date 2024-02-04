import express from 'express'
import cors from 'cors'
import apicache from 'apicache'
import * as PresentationController from '@controllers/PresentationController'
import * as UserController from '@controllers/UserController'

const app = express()
const cache = apicache.middleware

app.use(cors())
app.use(cache('1 day'))

app.get('/', (request, response) => {
  return response.json({ message: 'api works!' })
})

app.get('/user/:username', async (request, response) => {
  try {
    console.log('userId', request.params.username)
    const user = await UserController.getUser(request.params.username)
    return response.json(user)
  } catch (error: any) {
    console.log(error)
    return response.status(404).send(error)
  }
})

app.get('/presentations/:username', async (request, response) => {
  try {
    const username = request.params.username
    const presentations = await PresentationController.getAll(username)
    return response.json(presentations)
  } catch (error) {
    return response.status(404).send(error)
  }
})

app.get('/presentations', async (request, response) => {
  try {
    const url = request.query.url.toString()
    console.log(url)
    const presentation = await PresentationController.getOne(url)
    return response.json(presentation)
  } catch (error) {
    return response.status(404).send(error)
  }
})

const PORT = process.env.PORT ?? 3333

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`)
})
