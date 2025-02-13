"use strict";

const User = require("../../models/User");
// 파일 위치 잘 보고 상위 폴더 이동 및 하위 폴더 접근 잘 해주기!
// const UserStorage = require("../../models/UserStorage");

// output이라는 object로 묶어주기
const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
}

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);

        // const id = req.body.id,
        //     psword = req.body.psword;

        // const users = UserStorage.getUsers("id", "psword");

        // const response = {};
        // // users의 id에 현재 입력된 id값이 있으면
        // if (users.id.includes(id)) {
        //     // 그 인덱스를 가져오고
        //     const idx = users.id.indexOf(id);
        //     // users의 psword에서 해당 인덱스에 해당하는 비밀번호 또한 현재 입력된 psword 값과 일치하면
        //     if (users.psword[idx] === psword) {
        //         response.success = true;
        //         // success: true라는 object를 json형태로 만들어 프론트엔드로 응답해준다
        //         return res.json(response);
        //     }
        // }
        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다.";
        // return res.json(response);
    },
};

module.exports = {
    output,
    process,
};

// 추가: object는 {key : value} 형태로 이루어져 있는데, 위처럼 써주게 되면
//
// {
//     hello: hello,
//     login: login,
// }
// 으로 써주는 거랑 같은 거임