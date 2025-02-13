"use strict"; // 이크마 스크립트의 문법을 준수하겠다 명시

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// 루트 경로로 받아오겠다
// request와 response 받아오기
router.get("/", ctrl.output.home);

// login이라는 경로 전달 시
router.get("/login", ctrl.output.login); //=> 실제 기능을 하는 뒤 함수 부분을 controller라 칭함
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login); // 로그인 기능을 받아와 처리하는 기능 부분
router.post("/register", ctrl.process.register);

// 외부파일에서 사용할 수 있도록 던져주기
module.exports = router;