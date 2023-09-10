class ClassUserA
{
    public name: string;
    protected age: number;
    private email: string = "email!"; // 초기 선언 가능

    constructor(name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }

    public getAge()
    {
        return this.age;
    }
}