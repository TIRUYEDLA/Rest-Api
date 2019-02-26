const app = require('./app');

const port = process.env.PORT || 5555;

app.listen(port, (err) => {
    if (err) {
        console.log('Error in Launching the Application. Error: ' + err);
    } else {
        console.log('Application started at port: ' + port);
    }
});
