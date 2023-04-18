# JavaScript란?
클라이언트 측 웹(브라우저)에서 실행<br>
웹 페이지가 이벤트 발생 시 어떻게 작동하는 지 디자인 / 프로그래밍 <br>
웹 페이지 동작을 제어하는 데 널리 사용<br>
HTML + CSS + JS == 구조 + 표현 + 동작
# JavaScript Engine
JS 코드를 실행하는 프로그램 또는 인터프리터, 대체적으로 웹 브라우저에서 사용<br>
브라우저 환경 이외에는 Node.js를 통해 서버측에서 JS 코드 실행 가능
> EcmaScript
JS를 표준화하기 위해 만들어짐


## 변수 선언 키워드
1. let
블록 스코프 지역 변수 선언(초기화)<br>
재할당 가능 재선언 불가능
2. const
블록 스코프 읽기 전용 상수 선선(초기화)<br>
재할당, 재선언 불가능
3. var
변수 선언(초기화) / 현재는 주로 사용하지 않음<br>
재할당,재선언 가능 하지만 '호이스팅'되는 특성으로 예기치 못한 문제 발생
> hoisting
변수를 선언 이전에 참조할 수 있는 현상.<br>
var로 선언된 변수는 선언 이전에 참조할 수 있으며 변수 선언 이전의 위치에서 접근 시 undefined 반환<br>


# 데이터 타입
## 원시 타입
Number,String,Boolean,null(없다),undefined(할당이 안됐다),Symbol..
## 참조 타입
Objects,Array,Function...
1. Object(딕셔너리와 유사)
property의 집합, key value의 쌍으로 표현