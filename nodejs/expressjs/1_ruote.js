var express = require('express');
var app = express();
const ROUTE = "/mytrip";

app.get(ROUTE,function(request,response){
    response.send('get request for recived for mytrip ruote');
});

app.post(ROUTE,function(request,response){
    response.send('post request for recived for mytrip ruote');
});

app.put(ROUTE,function(request,response){
    response.send('put request for recived for mytrip ruote');
});

app.delete(ROUTE,function(request,response){
    response.send('delete request for recived for mytrip ruote');
});

const PORTNO = 5000;
app.listen(PORTNO,function(error)
{
    if(error)
        console.log(error);
    else
        console.log('sever is ready to accept request');
})
