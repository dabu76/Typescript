var 회원들 = ["asd", 123];
var nem = ["213", 23, "123"];
var 오브젝트 = { a: "123" };
var 이름 = "조호성";
var 나이 = 32;
var 출생지역 = "광주";
var fav = {
    singer: "dpr ian",
    song: "nerves",
};
var member;
var days;
var started;
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "phil",
    friend: "john",
};
학교.score[4] = false;
학교.friend = ["lee", 학교.teacher];
function 함수(x) {
    if (typeof x === "string") {
        console.log(x + 3);
    }
    else {
        x;
    }
}
함수(2);
function 이름2(x) {
    if (x === undefined) {
        x = "이름이 없습니다";
    }
    console.log(x);
}
이름2();
function 카운트(x) {
    var 갯수 = x.length;
    return 갯수;
}
카운트("422");
function 결혼(x, y, z) {
    var 매력;
    var 집;
    var 월소득;
    var 결과;
    if (x === "상") {
        매력 = 100;
    }
    else {
        매력 = 0;
    }
    월소득 = y / 10000;
    if (z === true) {
        집 = 500;
    }
    else {
        집 = 0;
    }
    var total = 매력 + 집 + 월소득;
    if (total >= 600) {
        return "결혼가능";
    }
    return "";
}
결혼("상", 4000000, true);
function 변환기(x) {
    return x.map(Number);
}
변환기([1, "2", 3]);
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
function 만들함수(x) {
    var last;
    if (Array.isArray(x.subject)) {
        last = x.subject[x.subject.length - 1];
    }
    else {
        last = x.subject;
    }
    return last;
}
만들함수(민수쌤);
var 동물 = { name: "kim", age: 20 };
var 여친 = {
    name: "엠버",
};
var position = { x: 10, y: 20 };
var check = { name: "kim", phone: 123, email: "ss", kid: true };
var 사람;
var 접니다;
var 가바보;
function 가위바위보(x) {
    return [x];
}
가위바위보("가위");
var 자료 = {
    name: "kim",
};
자료.name;
function 내함수(a) { }
내함수(자료.name);
var 함수2 = function (a) {
    return 12;
};
var 회원정보 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function (a) { return void {}; },
};
회원정보.plusOne(1);
function cutZero(x) {
    var result = x.replace(/^0/, "");
    return result;
}
function removeDash(x) {
    var result = x.replace(/-/g, "");
    return Number(result);
}
function 콜백(a, b, c) {
    var result = b(a);
    var result2 = c(result);
    console.log(result2);
}
콜백("010-1111-2222", cutZero, removeDash);
var 제목 = document.querySelector("#title");
if (제목 != null) {
    제목.innerHTML = "하이";
}
if (제목 instanceof Element) {
    제목.innerHTML = "반가워";
}
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
    제목.innerHTML = "안녕";
}
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
var 버튼 = document.querySelector("#button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () { });
var 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
}
var 링크2 = document.querySelectorAll(".naver");
링크2.forEach(function (link) {
    link.href = "https://kakao.com";
});
function product(a, b) {
    this.name = a;
    this.price = b;
}
var product1 = product("shirts", 50000);
var product2 = product("pants", 60000);
console.log(product1);
