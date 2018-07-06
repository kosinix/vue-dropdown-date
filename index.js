//// Core modules
const fs = require('fs');
const util = require('util');
const path = require('path');
const crypto = require('crypto');
const renameAsync = util.promisify(fs.rename);

//// External modules
const express = require('express');
const bodyParser = require('body-parser');
const lodash = require('lodash');
const nunjucks = require('nunjucks');
const moment = require('moment');

//// Modules



//// Create app
const app = express();

//// Setup view
// Setup nunjucks loader. See https://mozilla.github.io/nunjucks/api.html#loader
let loaderFsNunjucks = new nunjucks.FileSystemLoader('./view', {
    "watch": true,
    "noCache": true
});
// Setup nunjucks environment. See https://mozilla.github.io/nunjucks/api.html#environment
let nunjucksEnv = new nunjucks.Environment(loaderFsNunjucks, {
    "autoescape": true,
    "throwOnUndefined": false,
    "trimBlocks": false,
    "lstripBlocks": false
});
nunjucksEnv.express(app);

app.use(express.static('./public'));

// Parse http body
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/', (req, res, next)=>{
    try {
        res.render('index.html')
    } catch (err){
        next(err);
    }
});

// Error handler
app.use(function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    console.log(err);
    
    // Anything that is not catched
    res.status(500).send('Something broke!');
});

let server = app;
let port = 80;
server.listen(port, function () {
    console.log(util.format('App running at %s', 'http://localhost:'+port));
});
server.keepAliveTimeout = 60000 * 2;