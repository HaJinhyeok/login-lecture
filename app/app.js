"use strict";

// 모듈
const express = require("express"); //express 라는 모듈 다운
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");    // views라는 폴더로 뷰 설정
app.set("view engine", "ejs"); // ejs라는 뷰 엔진으로 해석해주겠다.
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
