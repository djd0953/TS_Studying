
function OverloadingFunction(a: string, b: string)
{
    return a + b;
}

function OverloadingFunction2(a: number, b: number)
{
    return a + b;
}

OverloadingFunction("Hello", "World");
OverloadingFunction2(1, 2);

// 위처럼 사용하기보단 아래처럼 사용할 수 있단다

function OverloadingFunction3(a: string, b: string): string;
function OverloadingFunction3(a: number, b: number): number;
function OverloadingFunction3(a: any, b: any)
{
    return a + b;
}

OverloadingFunction3("Hello", "World");
OverloadingFunction3(1, 2);
// OverloadingFunction3("Hello", 2); // 이건 에러!