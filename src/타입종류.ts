///////////////// 타입 종류

/// 문자
let variableString: string = "string";

/// 숫자
let variableNumber: number = 123;
let variableFloat: number = 123.456;
let variableInfinity: number = Infinity;
let variableNaN: number = NaN;

/// boolean
let variableBoolean: boolean = true;

/// null / undefined
let variablenull: null = null;
let variableUndefinedVar: undefined = undefined;

/// 배열
let variableNumberArray: number[] = [1, 2, 3];
let variableStringArray: string[] = ["a", "b", "c"];
let variableUnionArray: (string | number)[] = ["a", "b", "c", 1, 2, 3];

/// 객체
interface variableObjectInterface
{
    name: string;
    age: number;
    isValid: boolean;
}

let variableObject: object = {};
let variableObjectNotUseInterface: 
{ 
    name: string; 
    age: number;
    isValid: boolean;
} = {
  name: "홍길동",
  age: 23,
  isValid: true
};

let variableObjectUseInterface: variableObjectInterface = 
{
    name: "홍길동",
    age: 23,
    isValid: false
};

/// 함수
let variableAddFunction= (x : number , y : number) : number => x + y;
let variableConsoleLogFunction = (): void => console.log("Hello");

/// Any 되도록 사용하지 않음
let variableAny : any = 123;
variableAny = "123";
variableAny = true;
variableAny = null;
variableAny = undefined;
variableAny = [1, 2, 3];
variableAny = { name: "홍길동", age: 23, isValid: true};
variableAny = () => console.log("Hello");

/// Unknown
let variableUnknown: unknown = 123;

// Any 타입은 어디에 넣어도 넣을 수 있음
let variableAny2: any = variableAny;
let booleanVar2: boolean = variableAny;
let numberVar2: number = variableAny;
let stringVar2: string = variableAny;
let arrVar2: number[] = variableAny;

/* Unknown 타입은 조금 더 엄격
let anyVar3: any = variableUnknown;
let booleanVar3: boolean = variableUnknown;
let numberVar3: number = variableUnknown;
let stringVar3: string = variableUnknown;
let arrVar3: number[] = variableUnknown;
*/

/// Tuple
// 각 부분에 맞게 타입을 지정해야함
let variableTuple: [string, number, boolean] = ["홍길동", 23, true];
let variableTupleArray: [number, string, boolean][] = 
[
    [1, "a", false],
    [2, "b", true],
    [3, "c", false]
]

/// Void
function variableConsoleLogFunction2(msg: string): void
{
    console.log(`Hello ${msg}`);
};

/// Never
// 절대 사용되지 않을 형태. 우리가 직접 사용 할 일은 없을것이고 알고만 있을것
const variableNever: [] = [];
// variableNever.push(3); // Error

// Union
let variableUnion: (string | number);
variableUnion = 123;
variableUnion = "123";
// variableUnion = true; // Error

/// Intersection
interface variableIntersectionInterface1
{
    name: string,
    age: number
};

interface variableIntersectionInterface2 
{
    isValid: boolean
}

// 위와 같이 인터페이스 여러개를 아래 변수와 같이 모두 필수로 사용해야 함을 명시적으로 표시
const variableIntersection: variableIntersectionInterface1 & variableIntersectionInterface2 = 
{
    name: "홍길동",
    age: 23,
    isValid: true
};