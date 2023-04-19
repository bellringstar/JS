# 함수
- 함수 선언식
```javascript
function 함수명(){
  //do something
}
```
- 함수 표현식
```javascript
변수키워드 함수명 = function() {
  //do something
}
```
- 매개변수와 인자의 개수 불일치 허용
```javascript
const noArgs = function () {
  //인자 0개
  return 0
}
noArge(1, 2, 3) // 0 에러가 안난다.

const twoArgs = function(arg1, arg2) {
  return [arg1,arg2]
}
twoArgs(1,2,3)// [1,2] 에러 안난다.
```
- spread syntax(...)
전개 구문
```javascript
const restArgs = function(arg1, arg2, ...restArgs){
  return [arg1, agr2, restArgs]
}
restArgs(1,2,3,4,5) // [1,2,[3,4,5]]
```
- 선언식과 표현식에서 호이스팅
선언식으로 정의한 함수는 var로 정의한 변수처럼 호이스팅 발생<br>
-> 함수 호출 이후에 선언해도 동작함

- Arrow Function
함수를 비교적 간결하게 정의할 수 있는 문법<br>
  1. function 키워드 생략가능
  2. 함수의 매개변수가 하나 뿐이라면 매개변수의 '()' 생략 가능
  3. 함수의 내용이 한 줄이라면 '{}'와 'return'도 생략 가능
  4. Arrow Function은 익명함수 === 함수 표현식에서만 사용가능
```javascript
const arrow1 = function(name){
  return `hello, ${name}`
}
// function 키워드 생략 가능
const arrow2 = (name) => {return `hello, ${name}`}
// argument가 1개인 경우에만 () 생략 가는
const arrow3 = name => {return `hello, ${name}`}
// 내용이 한 줄이라면 {}와 return 생략 가능
const arrow4 = name => `hello, ${name}`
// argument가 없다면 () or _로 표시 가능
let noArgs = () => 'No args'
// object를 return 한다면 return과 {} 생략 불가
let returnObject = () => { return {key:'value'}}
// return을 쓰지 않으려면 괄호를 써야한다
let returnObject = () => ({key:'value'})
```
## this
- 어떠한 object를 가리키는 키워드(자바의 경우 this는 인스턴스 자기자신을 가리킴)<br>
- JS의 경우 함수 호출될 때 this를 암묵적으로 전달 받음
- JS는 해당 함수 호출 방식에 따라 this에 바인딩 되는 객체가 달라짐
- 즉 함수를 선언할 때 this에 객체가 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출 되었는지에 따라 '동적'으로 결정된다.

1. 전역 문맥에서의 this
전역객체는 모든 객체의 유일한 최상위 객체
2. 함수 문맥에서의 this
  - 단순 호출
  전역 객체를 가리킴
  ```javascript
  const myFunc = function () {
    console.log(this)
  }
  myFunc() // window
  ```
  - Method
  메서드로 선언하고 호출한다면, 객체의 메서드이므로 해당 객체가 바인딩
```javascript
const myObj = {
  data:1,
  myFunc() {
    console.log(this) //myObj
    console.log(this.data) // 1
  }
}
myObj.myFunc() //myObj
```
  - Nested
  forEach의 콜백 함수에서의 this가 메서드의 객체를 가리키지 못하고 전역객체 window를 가리키는 문제가 발생(단순 호출 방식으로 사용) -> 이를 해결하기 위해 화살표 함수 등장<br>
  <br>
  화살표 함수를 사용하면 자동으로 한 단계 상위의 scope의 context를 바인딩<br>
```javascript
const myObj = {
  numbers:[1],
  myFunc() {
    console.log(this) // myObj
    this.numbers.forEach(function (number)){
      console.log(number) //1
      console.log(this) //window
    }
  }
}
```
```javascript
const myObj = {
  numbers:[1,2],
  myFunc() {
    console.log(this) // myObj
    this.numbers.forEach((number) => {
      console.log(number) //1, 2
      console.log(this) //myObj
    })
  }
}
```
  - Lexical scope
  함수를 어디서 호풀하는지가 아니라 어디에 선언하였는지에 따라 결정<br>
  Static scope라고도 하며 대부분의 프로그래밍 언어에서 따르는 방식

# 배열
- 키와 속성을 담고있는 참조 타입의 객체
- 메서드
  - reverse
  - push & pop
  배열의 가장 뒤
  - unshift & shift
  배열의 가장 앞
  - includes
  - indexOf

- Array Helper Methods
배열을 순회하며 특정 로직을 수행하는 메서드
  - callback함수를 인자로 받는다
  callback함수: 다른 함수의 인자로 전달되는 함수
  - forEach
  return이 없다<br>
  ```javascript
  array.forEach(function (element, index, array)){
    //do something
  }

  const colors = ['red', 'blue', 'grean']
  printFunc = function (color) {
    console.log(color);
  }
  colors.forEach(printFunc)

  colors.forEach(function (color, index, array){
    console.log(color)
    console.log(index) //인덱스
    console.log(array) //전체 array

  })

  arrays.forEach(element => {
    return console.log(color)
  })
  ```
  - map
  return이 존재하는 forEach
  - filter
  - reduce
  배열을 하나의 값으로 계산하는 동작이 필요할 때(총합, 평균..)
  ```javascript
  array.reduce(function (acc, element, index, array){
    //do something, initialValue=초기값, acc=이전 callback함수의 반환 값이 누적되는 변수
  }, initialValue)

  const tests = [90, 90, 80, 77]
  const sum = tests.reduce(function (total, x){
    return total + x
  }, 0)

  const sum = tests.reduce((total, x) => total+x, 0)

  const avg = tests.reduce((total, x) => total+x, 0) / tests.length

  ```
  - find
  - some
  - every 
# 객체
- 속성(property)의 집합이며, 중괄호 내부에 key와 value 쌍으로 표현
