"use strict"

const mysql = require("mysql");

const db = mysql.createConnection({
    host: "login-lecture.cj6kisee0yfg.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "12345678",
    database: "login_lecture",
});

//연결 요청
db.connect();

module.exports = db;