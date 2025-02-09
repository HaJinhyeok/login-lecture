"use strict";

const home = (req, res) => {
    res.render("home/index");
}

const login = (req, res) => {
    res.render("home/login");
}

module.exports = {
    home,
    login,
};

// 추가: object는 {key : value} 형태로 이루어져 있는데, 위처럼 써주게 되면
//
// {
//     hello: hello,
//     login: login,
// }
// 으로 써주는 거랑 같은 거임