// 노드 메일러 사용

const nodemailer = require('nodemailer'); // nodemailer 을 require 로 불러옴
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "dafea5e72fc18f",
        pass: "5534aa1f21c837"
    }
};

const send = async(option) =>{
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) console.log(error);
        else {
            console.log(info);
            return info.response;
        }
    }); // createTransport : 계정 정보 입력  , sendMail 메시지 전송
    
};

let email_data = {
    from : 'hyg4196@gmail.com',
    to : 'hyg4196@naver.com',
    subject : 'TEST Mail',
    text : 'node js nodemailer  테스트'
}


send(email_data);

$('.test').css("color", "red");