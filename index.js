// index.js

const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

//DB setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

let mongouserurl = "mongodb+srv://mongouser:slayerss01va@cluster0.rs2me.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongouserurl);

let db = mongoose.connection;
db.once('open', function() {
    console.log('DB connected!');
});
db.on('error', function() {
    console.log('DB connection error: ', err);
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
//app.use(bodyParser.json());
app.use(express.json());
//app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use('/', require('./routes/home'));

const port = 3000;
app.listen(port, function() {
    console.log('server is running');
});