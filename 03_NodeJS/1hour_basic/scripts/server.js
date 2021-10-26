// 서버 구현

const express = require('express');

const app = express();

const server = app.listen(3000, () => {     //  포트 3000 번으로 로컬호스트 
    console.log('start server : local host 3000')     
});

//Cannot GET / 이 나옴, 웹 서버는 정상 구동중임 - 사이트연결할수 없음이 떠야 서버 구동이 안된건데, 웹 서버 접속은 된거임.

app.set('views', __dirname+'/../views');
app.set('view engine', 'ejs');   // ejs 템플릿 엔진 : html 안에서 js 를 같이 사용할 수 있게끔 해줌
app.engine('html',require('ejs').renderFile);


app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/message', function(req, res){
    res.send('message for u - to server');
});


// 해당 '/' /message 파라미터에 따라 띄워주는 메시지 다름




