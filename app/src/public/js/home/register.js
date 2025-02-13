"use strict";

// DOM: document object model

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    registerBtn = document.querySelector("#button");


registerBtn.addEventListener("click", register); // click이라는 이벤트 발생 여부를 확인하고 register 함수 실행

function register() {
    const req = {
        id: id.value,
        name: name.value,
        psword: password.value,
        confirmPsword: confirmPassword.value,
    };

    // object 값을 json 문자열로 바꿔 감싸줌

    fetch("/register", {
        method: "POST", // POST라는 http 메서드로 전달해 주어야함 ??? RESTful API 개념
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                // 위치(location)을 루트로 바꿔줌
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("회원가입 중 에러 발생"));
        });
    // .then((res) => console.log(res));
    //.then(console.log); // 해당 값을 받아와 그대로 사용할 때 이처럼 생략 가능
}