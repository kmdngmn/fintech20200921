function multi(p1, p2) {
  return p1 * p2; // p1, p2 곱연산의 결과를 반환한다.
}
//#work1 더하기, 나누기 , 빼기;
function plus(p1, p2) {
  return p1 + p2; // p1, p2 곱연산의 결과를 반환한다.
}

function div(p1, p2) {
  return p1 / p2; // p1, p2 곱연산의 결과를 반환한다.
}

function minus(p1, p2) {
  return p1 - p2; // p1, p2 곱연산의 결과를 반환한다.
}

console.log(multi(5, 3));
console.log(plus(5, 3));
console.log(div(5, 3));
console.log(minus(5, 3));

//es6 문법
const multiful = (p1, p2) => {
  return p1 * p2;
};
