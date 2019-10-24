const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const path = require ('path');


const tasks = require ('./routes/api/tasks');

const app = express();

//body-parser Middleware
app.use(bodyParser.json());

//DB config 
db = require('./config/keys').mongoURI;
//connect do mongo
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log (err) )

//use Routes
app.use('/api/tasks', tasks);



// static assets in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}



//port for heroku
const port = process.env.port || 5000; 

app.listen(port, () => console.log(`Listening on port ${port}`));