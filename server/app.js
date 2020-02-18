const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('combined'))

const routes = require('fs').readdirSync(require('path').join(__dirname, 'routes'))
routes.forEach((route) => {
  const routeName = route.replace('.js', '')
  app.use(`/${routeName}`, require(`./routes/${routeName}`))
})

const mongoBaseUrl = process.env.NODE_ENV === 'development'
  ? 'localhost'
  : 'mongo'

const mongoConfig = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}

require('mongoose').connect('mongodb://' + mongoBaseUrl + ':27017/app', mongoConfig)
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch(e => {
    console.log(e)
  })

const PORT = 2000
app.listen(PORT, () => {
  console.log('app listening on port', PORT)
})