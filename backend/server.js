const http = require('http');
const server = http.createServer((req,res ) => {

    res.end(" practising jiger!");


});

server.listen(process.env.PORT || 3000);

