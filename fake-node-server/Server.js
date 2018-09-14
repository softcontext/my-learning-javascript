// 노드 내장모듈 http를 불러온다.
const http = require('http');

// request  : 브라우저 ==데이터==> 서버
// response : 브라우저 <==데이터== 서버
const server = http.createServer(function(req, res) {
  // HTTP 규약에 따른 통신 설정정보
  // Content-Type: 데이터의 종류 JSON 포맷의 문자열이다.
  // Access-Control-Allow-Origin: '*' 누구라도 데이터를 요청하면
  // 조건없이 줄테니 브라우저가 중간에 차단하지 말라는 요청이다.
  // CORS: 브라우저가 데이터의 저작권을 보호하기 위해서
  // 도메인이 상이할 때 자동으로 데이터 요청을 차단하는 기능
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.end(JSON.stringify({
    platform: process.platform,
    nodeVersion: process.version,
    uptime: Math.round(process.uptime()),
  }));
});

const port = 7070;

server.listen(port, function() {
  console.log(`Ajax server started on port ${port}`);
});



