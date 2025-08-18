export var 이름3 = "kim";
export var 나이3 = 20;
export namespace 네임스페이스 {
  export type Name3 = string | number;
}
let 변수: 네임스페이스.Name3 = "kim";
export type Car2 = {
  wheel: number;
  model: string;
};
export interface Bike2 {
  wheel: 2;
  model: string;
}
export type ObjFunction = (a?: object) => void;
namespace 네임스페이스2 {
  export type Dog = string;
}

namespace BadDog {
  export interface Dog {
    name: string;
  }
}

let dog: 네임스페이스2.Dog = "bark";
let dog2: BadDog.Dog = { name: "paw" };

let 멍멍: [string, boolean?, number?] = ["dog", true, 12];

function 함수655(...x: [number, string]) {
  console.log(x);
}
함수655(1, "2");

let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3: [...number[], number, number] = [...arr, 4, 5];

let 음식: [string, number, boolean] = ["동서녹차", 4000, true];

let arr4: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

function 함수878(...x: [string, boolean, ...(number | string)[]]) {}
function 함수(...rest: (string | number)[]) {
  let result: [string[], number[]] = [[], []];

  rest.forEach((a) => {
    if (typeof a === "string") {
      result[0].push(a);
    } else {
      result[1].push(a);
    }
  });

  return result;
}
