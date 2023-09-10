interface thisCat
{
    name: string;
    age: number;
}

let thisCatValiable: thisCat = 
{
    name: 'Lucy',
    age: 8
}

// this가 무엇인지 명시적으로 알기 힘든 상황에는 this를 명시적으로 알려줘야 에러가 나지 않는다!!
function thisFunctionHello(this: thisCat, msg: string)
{
    console.log(`Bye!! ${this.name}, ${msg}`);
}

thisFunctionHello.call(thisCatValiable, 'Thank you');