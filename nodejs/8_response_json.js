var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'application/json' });
    var output = null;
    var url = request.url;
    console.log(url);

    if (url == '/BMW') {
        output = {
            name: "BMW 5 Series",
            model: '2024',
            Owner: "1",
            Price: "18000000",
            condition: "very good",
            maxspeed: "200/kmh",
            sunroof: "yes",
        }
    }

    else if (url ==='/TOYOTA') 
        {
        output = {
            name: "Toyota Camry",
            model: '2024',
            Owner: "John",
            Price: "20000000",
            condition: "excellent",
            maxspeed: "220/kmh",
            sunroof: "no",

        }
    }
    else if (url === '/AUDI') 
        {
        output = {
            name: "Audi A6",
            model: '2024',
            Owner: "Michael",
            Price: "19000000",
            condition: "excellent",
            maxspeed: "210/kmh",
            sunroof: "yes",
        }
    }
    else if (url === '/MERCEDES') 
        {
        output = {
            name: "Mercedes-Benz C-Class",
            model: '2024',
            Owner: "Emma",
            Price: "17000000",
            condition: "fair",
            maxspeed: "160/kmh",
            sunroof: "no",
        }
    }
    else if (url === '/HONDA') {
        output = {
            name: "Honda Accord",
            model: '2024',
            Owner: "Alice",
            Price: "15000000",
            condition: "good",
            maxspeed: "180/kmh",
            sunroof: "no",
        }
    }
    else 
    {
        output = {
           success : 'no',
           message : 'car name not match'
        }  
    }  
     var output_as_json = JSON.stringify(output);
     response.write(output_as_json);
     response.end();
});
server.listen(5000);
console.log("your request has accept");