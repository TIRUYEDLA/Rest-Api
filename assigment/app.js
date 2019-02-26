const express = require('express');
const bodyParser = require('body-parser');


const app = express();


const version1Routes = require('./routes/version1');
const version2Routes = require('./routes/version2');

//middlewares

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 
    'Origin', 'X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS') {
        req.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

    app.use('/api/v1/parse',version1Routes);
    app.use('/api/v2/parse',version2Routes);

    app.use((req,res,next) => {
        console.log(',jasdbka');
        const error = new Error('Not Found');
        error.status = 404;
        next(error);
    });
    
    app.use((error,req,res,next) => {
        res.status(error.status || 500);
        res.send({
            error:{
                message: error.message
            }
        })
    });


module.exports = app;