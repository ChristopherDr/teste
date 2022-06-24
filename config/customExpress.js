const express = require('express')
const consign = require('consign')

const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.set('view engine', 'ejs');

    app.get('/home', (req, res) => {
        res.render('../main');
    });

    consign()
        .include('controllers')
        .into(app)
    return app
}

