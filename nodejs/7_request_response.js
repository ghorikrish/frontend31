var http = require('http');
var server = http.createServer(function (request, response) {

    response.writeHead(200, { 'content-type': 'text/html' });
    var output;
    var url = request.url;
    console.log(url);

    if (url == "/")
    {
        output = '<h1>Home</h1>';
    } 
    else if (url == "/india") {
        output = "<html><head></head><body><table><tr><th>Team1</th><th>Team2</th><th>Match Type</th><th>Venue</th><th>Start Time (IST)</th></tr><tr><td>India</td><td>Ireland</td><td>t20</td><td>Nassau County International Cricket Stadium</td><td>Wednesday, June 5, 2024 8:00 PM</td></tr><tr><td>India</td><td>Pakistan</td><td>t20</td><td>Nassau County International Cricket Stadium</td><td>Sunday, June 9, 2024 8:00 PM</td></tr><tr><td>United States</td><td>India</td><td>t20</td><td>Nassau County International Cricket Stadium</td><td>Wednesday, June 12, 2024 8:00 PM</td></tr><tr><td>India</td><td>Canada</td><td>t20</td><td>Central Broward Park & Broward County Stadium</td><td>Saturday, June 15, 2024 8:00 PM</td></tr></table><body></html>";
    }
    else if (url == "/enagland") {
        output = "<html><head></head><body><table><tr><th>Team1</th><th>Team2</th><th>Match Type</th><th>Venue</th><th>Start Time (IST)</th></tr><tr><td>India</td><td>Ireland</td><td>t20</td><td>Nassau County International Cricket Stadium</td><td>Wednesday, June 5, 2024 8:00 PM</td></tr><tr><td>India</td><td>Pakistan</td><td>t20</td><td>Nassau County International Cricket Stadium</td><td>Sunday, June 9, 2024 8:00 PM</td></tr><tr><td>United States</td><td>India</td><td>t20</td><td>Nassau County International Cricket Stadium</td><td>Wednesday, June 12, 2024 8:00 PM</td></tr><tr><td>India</td><td>Canada</td><td>t20</td><td>Central Broward Park & Broward County Stadium</td><td>Saturday, June 15, 2024 8:00 PM</td></tr></table><body></html>";
    }
    output = "<html>" + output + "</html>";
    response.write(output);
    response.end();
});
server.listen(5000);
console.log("your request has accepted");

