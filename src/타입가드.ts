// 타입 가드 (Guards)

function GuardsLogText(el: Element)
{
    if (el) // If 조건이 Element를 못찾아서 null이나 undefined가 왔을경우 해당 내용을 실행하지 못하게 가드
    {
        console.log(el.textContent);
    }

    // 아래와 같이 타입을 직접 지정하여 사용 가능
    if (el instanceof HTMLHeadingElement)
    {
        console.log(el.textContent);
    }
}

function GuardAddFunction(val: string | number)
{
    let res = "Result =>";

    // 아래와 같이 타입을 직접 조건문으로 지정하여 가드
    if (typeof val === "number")
    {
        res += val.toFixed(2);
    }
    else
    {
        res += val.toUpperCase();
    }

    console.log(res);
}