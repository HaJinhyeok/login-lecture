"use strict";

// DOM: document object model

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login); // click이라는 이벤트 발생 여부를 확인하고 login 함수 실행

function login() {
    const req = {
        id: id.value,
        psword: password.value,
    };
    console.log(req);
    //fetch();
}