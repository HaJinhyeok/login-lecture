"use strict";

// 모듈
const express = require("express"); //express 라는 모듈 다운
const bodyParser = require("body-parser");
// 환경 변수 관리 모듈
// 일반적으로 개발은 여러 명이 같이 하는데, 개인마다 OS(윈도우, 맥, 리눅스 등)가 다른 경우가 있고,
// OS마다 환경 변수 등록 방식이 다르기 때문에 노드 측에서 제시한 dotenv 모듈을 사용해 동일하게 환경 변수 등록 가능해짐
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");    // views라는 폴더로 뷰 설정
app.set("view engine", "ejs"); // ejs라는 뷰 엔진으로 해석해주겠다.
app.use(express.static(`${__dirname}/src/public`)); // __dirname: 현재 app.js가 존재하는 파일에서 정적 경로(static으로 추가해주겠다)
app.use(bodyParser.json());
// url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // use-> 미들 웨어를 등록해주는 메서드

module.exports = app;


// // 코드 지저분, 한글 처리 등 http보단 express가 훨 낫다...

// const http = require("http"); // 내장 모듈이라 npm으로 다운받을 필요는 없음
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     if (req.url === "/") {
//         res.end("여기는 루트입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면입니다.");
//     }
//     // console.log(req.url); // => request.url을 이용해서 사이트url에서 루트(/)이후를 파싱해올 수 있다.
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// })
