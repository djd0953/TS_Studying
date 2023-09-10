type TypeAlias1 = string;
type TypeAlias2 = string | number | boolean;
type TypeAlias3 = 
{
    name: string;
    age: number;
    isValiad: boolean;
} | [string, number, boolean];

let TypeAliasVariable: TypeAlias3 = 
{
    name: "John",
    age: 30,
    isValiad: true
};

function TypeAliasFunction(param: TypeAlias2): TypeAlias1
{
    switch (typeof param)
    {
        case "string":
            return param.toUpperCase();
        case "number":
            return param.toFixed(2);
        default:
            return "Boolean!!";
            // return true; // string이 아니기에 에러
    }
}

// 인터페이스와 타입별칭의 기능 차이는 없지만 굳이 묻는다면 인터페이스 추천
type TypeAliasUser =
{
    name: string;
    age: number;
    isValiad: boolean;
}

interface TypeAliasInterface 
{
    name: string;
    age: number;
    isValiad: boolean;
};

let TypeAliasUserVariable: TypeAliasInterface = 
{
    name: "John",
    age: 30,
    isValiad: true
}