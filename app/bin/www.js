"use strict";

const app = require("../app");
const logger = require("../src/config/logger");
// const PORT = 3000;
const PORT = process.env.PORT || 3000;

// listen이 들어간 파일을 실행해주어야 함!!!
app.listen(PORT, () => {
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
})