"use strict"; // 이크마 스크립트의 문법을 준수하겠다 명시

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// 루트 경로로 받아오겠다
// request와 response 받아오기
router.get("/", ctrl.home);

// /login이라는 경로 전달 시
router.get("/login", ctrl.login); //=> 실제 기능을 하는 뒤 함수 부분을 controller라 칭함

// 외부파일에서 사용할 수 있도록 던져주기
module.exports = router;