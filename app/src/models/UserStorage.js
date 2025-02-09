"use strict";

class UserStorage {
    static #users = {
        id: ["woorimIT", "나계발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["우리밋", "나계발", "김팀장"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        // reduce 함수는 일종의 foreach문 같은 느낌: fields 내의 요소들을 iterator로 한 바퀴 도는것
        const newUsers = fields.reduce((newUsers, fields) => {
            if (users.hasOwnProperty(fields)) {
                newUsers[fields] = users[fields];
            }
            // 이렇게 리턴해주면 reduce 함수 돌면서 다시 자기자신이 인자로 들어가게 됨
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, psword, name] key값들만 받아와 배열로 만들기!
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;