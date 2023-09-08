// 타입 추론 (Interface)
// '추론' - 어떠한 판단을 근거로 삼아 다른 판단을 이끌어 냄

// 1) 초기화된 변수
// 2) 기본값이 설정된 매개 변수
// 3) 반환 값이 있는 함수

// 초기값을 이용해 number타입임을 추론
let InterfaceNumber = 12;

// 'b'처럼 기본값이 number타입임을 추론
// number + number가 리턴으로 나오면 함수가 number타입임을 추론
function funcAdd2(a: number, b = 2)
{
    return a + b;
}

