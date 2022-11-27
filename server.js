// require express and mongoose
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

// connect to mongoose
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/social-network-api',
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }
);

// set this to true to log mongoose queries being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected and listening on local host:${PORT}`));