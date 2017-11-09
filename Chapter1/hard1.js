var http =require('http');

http.createServer(function(req, res){
    // &#1055;&#1088;&#1080;&#1074;&#1086;&#1076;&#1080;&#1084; URL &#1082; &#1077;&#1076;&#1080;&#1085;&#1086;&#1084;&#1091; &#1074;&#1080;&#1076;&#1091; &#1087;&#1091;&#1090;&#1077;&#1084; &#1091;&#1076;&#1072;&#1083;&#1077;&#1085;&#1080;&#1103;
    // &#1089;&#1090;&#1088;&#1086;&#1082;&#1080; &#1079;&#1072;&#1087;&#1088;&#1086;&#1089;&#1072;, &#1085;&#1077;&#1086;&#1073;&#1103;&#1079;&#1072;&#1090;&#1077;&#1083;&#1100;&#1085;&#1086;&#1081; &#1082;&#1086;&#1089;&#1086;&#1081; &#1095;&#1077;&#1088;&#1090;&#1099;
    // &#1074; &#1082;&#1086;&#1085;&#1094;&#1077; &#1089;&#1090;&#1088;&#1086;&#1082;&#1080; &#1080; &#1087;&#1088;&#1080;&#1074;&#1077;&#1076;&#1077;&#1085;&#1080;&#1103; &#1082; &#1085;&#1080;&#1078;&#1085;&#1077;&#1084;&#1091; &#1088;&#1077;&#1075;&#1080;&#1089;&#1090;&#1088;&#1091;
    var path = req.url.replace(//?(?:?.*)?$/$, '').toLowerCase();
    switch(path) {
       case '':
               res.writeHead(200, { 'Content-Type': 'text/plain' });
               res.end('Homepage');
               break;
       case '/about':
               res.writeHead(200, {'Content-Type': 'text/plain' });
               res.end('&#1054;');
               break;
       default:
               res.writeHead(404, { 'Content-Type': 'text/plain' });
               res.end('&#1053;&#1077; &#1085;&#1072;&#1081;&#1076;&#1077;&#1085;&#1086;');
               break;
    }
}).listen(3000);
console.log(' &#1057;&#1077;&#1088;&#1074;&#1077;&#1088; &#1079;&#1072;&#1087;&#1091;&#1097;&#1077;&#1085; &#1085;&#1072; localhoste:3000 ');
