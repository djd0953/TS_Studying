// 첫글자를 대문자로

// 선택적 속성 - ?
// 읽기전용 속성 - readonly

interface InterfaceFunction
{
    (param: string): string;
}

interface InterfaceArray
{
    [item: number]: number;
}

let InterfaceArrayVariable: InterfaceArray = [1, 2, 3];

interface InterfaceUser
{
    name: string;
    readonly age: number; // 읽기전용 속성이기에 처음 초기화만 할 수 있고, 이후 값 변경 불가능
    isValid?: boolean; // 선택적 속성 :: 있어도 되고 없어도 되는 속성

    // 함수 타입 - 호출 시그니처(Call Signature)
    getName?: InterfaceFunction; // 함수를 다른식으로 재사용 가능
    // getName?: (param: string) => string;

    // 인턱세 가능 타입 - 인덱스 시그니처(Index Signature)
    [key: string]: unknown;

}

// 확장(상속)
interface InterfaceUser2 extends InterfaceUser
{
    email: string;
}

let InterfaceVariable1: InterfaceUser = 
{
    name: "Heropy",
    age: 20,
    isValid: true,
    getName(msg: string)
    {
        console.log(msg);
        return this.name;
    }
};
// InterfaceVariable1.age = 22; // 읽기전용 속성 오류
console.log(InterfaceVariable1["name"]); // 인덱스 시그니처로 이런식으로 사용 가능하게 함
console.log(InterfaceVariable1["age"]); // 인덱스 시그니처 unkonwn 부분을 string으로 바꾸면 에러나는 부분

let InterfaceVariable2: InterfaceUser =
{
    name: "Neo",
    age: 30
};
InterfaceVariable2.email = "<EMAIL>"; // ????

let InterfaceVariable3: InterfaceUser2 =
{
    name: "aa",
    age: 10,
    isValid: true,
    email: "<EMAIL>"
}

