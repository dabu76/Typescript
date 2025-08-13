let 회원들 = ["asd", 123];
let nem: (string | number)[] = ["213", 23, "123"];
let 오브젝트: { a: string | number } = { a: "123" };
let 이름 = "조호성";
let 나이 = 32;
let 출생지역 = "광주";

let fav: { singer: string; song: string } = {
  singer: "dpr ian",
  song: "nerves",
};
let member: string[];
let days: number;
let started: boolean;
let project = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
let user: string = "kim";
let age: undefined = undefined;
let married: boolean = false;
let 철수: (string | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: any[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "phil",
  friend: "john",
};
학교.score[4] = false;
학교.friend = ["lee", 학교.teacher];
function 함수(x: number | string): void {
  if (typeof x === "string") {
    console.log(x + 3);
  } else {
    x;
  }
}

함수(2);
function 이름2(x?: string): void {
  if (x === undefined) {
    x = "이름이 없습니다";
  }
  console.log(x);
}
이름2();
function 카운트(x: string): number {
  let 갯수 = x.length;
  return 갯수;
}

카운트("422");
function 결혼(x: string, y: number, z: boolean): string {
  let 매력: number;
  let 집: number;
  let 월소득: number;
  let 결과: string;
  if (x === "상") {
    매력 = 100;
  } else {
    매력 = 0;
  }
  월소득 = y / 10000;
  if (z === true) {
    집 = 500;
  } else {
    집 = 0;
  }

  let total = 매력 + 집 + 월소득;
  if (total >= 600) {
    return "결혼가능";
  }
  return "";
}
결혼("상", 4000000, true);
function 변환기(x: (string | number)[]) {
  return x.map(Number);
}

변환기([1, "2", 3]);
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };
function 만들함수(x: { subject: string } | { subject: string[] }): string {
  let last: string;
  if (Array.isArray(x.subject)) {
    last = x.subject[x.subject.length - 1];
  } else {
    last = x.subject;
  }
  return last as string;
}
만들함수(민수쌤);
type AnimalType = { name: string; age: number };
let 동물: AnimalType = { name: "kim", age: 20 };

type GirlfriendType = {
  readonly name: string;
};
const 여친: GirlfriendType = {
  name: "엠버",
};

type Name = string;
type Age = number;
type Person2 = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

type a = { color?: string; size: number };
type b = { readonly position: number[] };
type c = a & b;
type 검사 = {
  name: string;
  phone: number;
  email: string;
  kid: boolean;
};
const check: 검사 = { name: "kim", phone: 123, email: "ss", kid: true };

let 사람: 123;

let 접니다: "대머리" | "솔로";

let 가바보: "가위" | "바위" | "보";

function 가위바위보(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return [x];
}
가위바위보("가위");

var 자료 = {
  name: "kim",
} as const;
자료.name;
function 내함수(a: "kim") {}
내함수(자료.name);
type 함수타입 = (a: string) => number;
let 함수2: 함수타입 = function (a) {
  return 12;
};
let 회원정보 = {
  name: "kim",
  plusOne(a: number): number {
    return a + 1;
  },
  changeName: (a: number) => void {},
};
회원정보.plusOne(1);
function cutZero(x: string): string {
  let result = x.replace(/^0/, "");
  return result;
}
function removeDash(x: string): number {
  let result: string = x.replace(/-/g, "");

  return Number(result);
}
function 콜백(a: string, b: (s: string) => string, c: (s: string) => number) {
  let result = b(a);
  let result2 = c(result);
  console.log(result2);
}
콜백("010-1111-2222", cutZero, removeDash);

let 제목 = document.querySelector("#title");
if (제목 != null) {
  제목.innerHTML = "하이";
}
if (제목 instanceof Element) {
  제목.innerHTML = "반가워";
}
if (제목?.innerHTML != undefined) {
  제목.innerHTML = "안녕";
}
let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}
let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", function () {});
let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "new.jpg";
}
let 링크2 = document.querySelectorAll<HTMLAnchorElement>(".naver");
링크2.forEach((link) => {
  link.href = "https://kakao.com";
});
class Person {
  name: string;
  data: number = 0;
  constructor(a: string) {
    this.name = a;
  }
  함수(a: string) {
    console.log("안녕" + a);
  }
}

Person.prototype.함수 = function () {};
let 사람1 = new Person("kim");
let 사람2 = new Person("park");
class 차 {
  model: string;
  money: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.money = b;
  }
  세금() {
    return this.money / 10;
  }
}
let car = new 차("소나타", 3000);
console.log(car.세금());
class Word {
  num: (string | number)[] = [];
  str: (string | number)[] = [];
  constructor(a: (string | number)[]) {
    for (let i = 0; i < a.length; i++) {
      if (typeof a[i] === "string") {
        this.str.push(a[i]);
      }
      if (typeof a[i] === "number") {
        this.num.push(a[i]);
      }
    }
  }
}
let obj2: (string | number)[] = ["kim", 3, 5, "park"];
let obj = new Word(obj2);
console.log(obj.num);
console.log(obj.str);
interface square {
  color: string;
  width: number;
}
interface school {
  name: string;
  age?: number;
}

type Animal = { name: string };
type Cat = { age: number } & Animal;
let 학생: school = { name: "kim" };
let 선생: school = { name: "kim", age: 20 };

interface 브랜드 {
  brand: Name;
}
interface 시리얼 extends 브랜드 {
  serialNumber: number;
}
interface 모델 extends 시리얼 {
  model: string[];
}

let 상품: 모델 = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};
interface Cart {
  product: string;
  price: number;
}
interface 불린 extends Cart {
  card: boolean;
}

let 장바구니: 불린[] = [
  { product: "청소기", price: 7000, card: false },
  { product: "삼다수", price: 800, card: false },
];
interface MathObj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let 오브젝트2: MathObj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
function 전부더하기(...a: number[]) {}
전부더하기(1, 2, 4, 6, 5, 3);
let { student2, age2 } = {
  student2: true,
  age2: 20,
};
let 오브젝트6 = { student2: true, age2: 20 };
function 함수6({ student2, age2 }: { student2: boolean; age2: number }) {
  console.log(student2, age2);
}

function 반복(...a: number[]) {
  for (let i = 0; i < a.length; i++) {
    let result: number = 0;
    if (a[i] >= result) {
      result = a[i];
    } else if (a[i] <= result) {
      result = result;
    }
    return result;
  }
}

반복(6, 3, 7, 2);
function 함수8({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}) {
  console.log(user, comment, admin);
}
함수8({ user: "kim", comment: [3, 5, 4], admin: false });
function 함수9(a: [number, string, boolean]) {
  console.log(a);
}
함수9([40, "wine", false]);
