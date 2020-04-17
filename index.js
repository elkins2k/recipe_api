const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// var whitelist = ['http://localhost:3000', "*"]
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions))
app.use(cors())

app.use('/api/users', require('./controllers/users'))
app.use('/api/recipes', require('./controllers/recipes'))
app.use('/api/contents', require('./controllers/contents'))

app.set("port", process.env.PORT || 8080)
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`)
})