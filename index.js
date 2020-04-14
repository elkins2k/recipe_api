const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// const cors = require('cors')
// app.use(cors())

app.use('/api/users', require('./controllers/users'))
app.use('/api/recipes', require('./controllers/recipes'))
app.use('/api/contents', require('./controllers/contents'))

app.set("port", process.env.PORT || 3000)
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`)
})