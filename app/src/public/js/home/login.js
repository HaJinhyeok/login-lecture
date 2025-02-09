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
    // object 값을 json 문자열로 바꿔 감싸줌

    fetch("/login", {
        method: "POST", // POST라는 http 메서드로 전달해 주어야함 ??? RESTful API 개념
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        // .then((res) => console.log(res));
        .then(console.log); // 해당 값을 받아와 그대로 사용할 때 이처럼 생략 가능
}