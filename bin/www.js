"use strict";

const app = require("../app");
const PORT = 3000;

// listen이 들어간 파일을 실행해주어야 함!!!
app.listen(PORT, () => {
    console.log("서버 가동");
})