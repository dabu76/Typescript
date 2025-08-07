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
