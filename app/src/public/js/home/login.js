"use strict";

// DOM: document object model

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login); // click이라는 이벤트 발생 여부를 확인하고 login 함수 실행

function login() {
    if (!id.value) return alert("아이디를 입력해주십시오.");
    if (!password.value) return alert("비밀번호를 입력해주십시오.");
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
        .then((res) => {
            if (res.success) {
                // 위치(location)을 루트로 바꿔줌
                location.href = "/";
            } else {
                if (res.err) return alert(res.err);
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("로그인 중 에러 발생"));
        });
    // .then((res) => console.log(res));
    //.then(console.log); // 해당 값을 받아와 그대로 사용할 때 이처럼 생략 가능
}