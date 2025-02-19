"use strict";

const { json } = require("body-parser");

// const fs = require("fs").promises;

const db = require("../config/db");

class UserStorage {
    // static #getUserInfo(data, id) {
    //     const users = JSON.parse(data);
    //     const idx = users.id.indexOf(id);
    //     const userKeys = Object.keys(users); // => [id, psword, name] key값들만 받아와 배열로 만들기!
    //     const userInfo = userKeys.reduce((newUser, info) => {
    //         newUser[info] = users[info][idx];
    //         return newUser;
    //     }, {});

    //     return userInfo;
    // }

    // static #getUsers(data, isAll, fields) {
    //     const users = JSON.parse(data);
    //     if (isAll) return users;
    //     const newUsers = fields.reduce((newUsers, fields) => {
    //         if (users.hasOwnProperty(fields)) {
    //             newUsers[fields] = users[fields];
    //         }
    //         // 이렇게 리턴해주면 reduce 함수 돌면서 다시 자기자신이 인자로 들어가게 됨
    //         return newUsers;
    //     }, {});
    //     return newUsers;
    // }

    // static getUsers(isAll, ...fields) {
    //     // return fs.readFile("./src/databases/users.json")
    //     //     .then((data) => {
    //     //         return this.#getUsers(data, isAll, fields);
    //     //     })
    //     //     .catch(console.error);

    //     // const users = this.#users;
    //     // reduce 함수는 일종의 foreach문 같은 느낌: fields 내의 요소들을 iterator로 한 바퀴 도는것

    // }

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                // err는 object 타입이므로, 알람 역할을 하려면 문자열로 바꿔주어야한다.
                if (err) reject(`${err}`);
                // 그냥 data는 배열로 감싸져 있으므로 안되고 그 안의 RowDataPacket만 전달해주어야한다.
                // console.log(data);
                resolve(data[0]);
            });
        });


        // const users = this.#users;
        // console.log(JSON.parse(data));
        // return fs.readFile("./src/databases/users.json")
        //     .then((data) => {
        //         return this.#getUserInfo(data, id);
        //     })
        //     .catch(console.error);

    }


    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword],
                (err) => {
                    if (err) reject(`${err}`);
                    resolve({ success: true });
                });
        });
        // const users = await this.getUsers(false, "id", "psword", "name");
        // // const users = await this.getUsers(true);
        // // 유저 데이터에 해당 아이디가 포함되어 있으면 넘어가고 없으면 새로운 데이터값 입력
        // if (users.id.includes(userInfo.id)) {
        //     //return new Error("이미 존재하는 아이디입니다.");
        //     throw "이미 존재하는 아이디입니다.";
        // }
        // users.id.push(userInfo.id);
        // users.name.push(userInfo.name);
        // users.psword.push(userInfo.psword);
        // fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        // return { success: true };

        // // const users = this.#users;
        // users.id.push(userInfo.id);
        // users.name.push(userInfo.name);
        // users.psword.push(userInfo.psword);
        // return { success: true };
    }
}

module.exports = UserStorage;