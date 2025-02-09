"use strict";

const users = {
    id: ["woorimIT", "나계발", "김팀장"],
    psword: ["1234", "1234", "123456"],
}

// output이라는 object로 묶어주기
const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    }
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        // users의 id에 현재 입력된 id값이 있으면
        if (users.id.includes(id)) {
            // 그 인덱스를 가져오고
            const idx = users.id.indexOf(id);
            // users의 psword에서 해당 인덱스에 해당하는 비밀번호 또한 현재 입력된 psword 값과 일치하면
            if (users.psword[idx] === psword) {
                // success: true라는 object를 json형태로 만들어 프론트엔드로 응답해준다
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다",
        })
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