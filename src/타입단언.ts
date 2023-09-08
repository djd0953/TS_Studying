// 타입 단언(Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함

// 1) 단언 키워드 :: as를 사용한다
// 2) Non-null 연산자 :: !. 를 사용한다

let AssertionElement = document.querySelector(".AssertionElement");
// AssertionElement.textContent = "Hello?"; // AssertionElement Class가 Dom에 없으면 null일 수 있기에 Error
AssertionElement!.textContent = "Hello!"; // Non-null 단언

AssertionElement =  document.querySelector(".AssertionElement") as HTMLBodyElement;
AssertionElement.textContent = "Hello?"; // 확실히 있다고 단정하여 지정해주기에 Error가 나오지 않음

function AssertionFunctionGetNumber(x: number | null | undefined)
{
    // return Number(x.toFixed(2)); // x는 null이거나 undefined일 수 있기에 toFixed(2)를 할 수 없어서 Error
    // x를 number라고 단정했기에 컴파일 에러는 없으나 사용시 null이 들어오면 에러가 나올 수 있음
    return Number((x as number).toFixed(2));
    return Number(x!.toFixed(2)); // Non-null 단언
    // 타입가드
    if (x) Number(x!.toFixed(2)); // if 조건을 통해 null이나 undefined가 못들어오기에 Non-null 사용 가능
}

AssertionFunctionGetNumber(null); // Error!!

function AssertionFunctionGetValue(x: string | number, isNumber: boolean)
{
    // isNumber 변수를 통해 확실히 지정했으나 컴파일 에러를 잡을때
    // if (isNumber) return Number(x.tofixed(2));
    // return x.toUppercase();

    // 아래와 같이 사용 할 수 있긴 하나 x: string을 쓰고 isNumber를 true 넣으면 여전히 에러가 나옴
    if (isNumber) Number((x as number).toFixed(2)); 
    return (x as string).toUpperCase();
}