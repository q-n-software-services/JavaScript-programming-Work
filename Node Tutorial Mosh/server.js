const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('<h1 style="text-align: center;">Hello Muhammad Mohib</h1><h3 style="text-align: center;">This is your first NODE server</h3>');
        res.end();
    }
    console.log("New connection", Date());

    if (req.url === '/api'){
        res.write(`<h1 style="text-align: center;">Hello Muhammad Mohib</h1><h3 style="text-align: center;">${JSON.stringify([1, 2, 3, 4, 5])}</h3>`);
        //res.sendFile("D:/JavaScript work/POS Saudia 2/POS1.html")
        res.end();
    }

});

// server.on('connection', (socket) => {
//     console.log("New connection", Date());
// }) // very low level development

server.listen(3000);

console.log('Listening on Port 3000...');