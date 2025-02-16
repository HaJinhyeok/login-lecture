"use strict";

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, psword, name] key값들만 받아와 배열로 만들기!
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        console.log(userInfo);

        return userInfo;
    }

    static getUsers(...fields) {
        // const users = this.#users;
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
        // const users = this.#users;
        // console.log(JSON.parse(data));
        return fs.readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);

    }


    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true };
    }
}

module.exports = UserStorage;