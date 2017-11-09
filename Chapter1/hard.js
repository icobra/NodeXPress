var http =require('http');

http.createServer(function(req, res){
    // Приводим URL к единому виду путем удаления
    // строки запроса, необязательной косой черты
    // в конце строки и приведения к нижнему регистру
    var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch(path) {
       case '':
               res.writeHead(200, { 'Content-Type': 'text/plain' });
               res.end('Homepage');
               break;
       case '/about':
               res.writeHead(200, {'Content-Type': 'text/plain' });
               res.end('О');
               break;
       default:
               res.writeHead(404, { 'Content-Type': 'text/plain' });
               res.end('Не найдено');
               break;
    }
}).listen(3000);
console.log(' Сервер запущен на localhoste:3000 ');

