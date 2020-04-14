const mongoose = require ( 'mongoose' )

// let mongoURI = 'mongodb://localhost/recipe-api'
let mongoURI = 'mongodb://heroku_9g1pmgbz:28uami2rardl2ctpnt1ohcj64e@ds241737.mlab.com:41737/heroku_9g1pmgbz'

if (process.env.NODE_ENV === 'production') {
    mongoURI = process.env.MONGODB_URI
}

mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then ( instance => console.log ( `Connected to db: ${instance.connections[0].name}` ))
    .catch ( error => console.log ( 'Connection failed!', error ))
    
module.exports = mongoose