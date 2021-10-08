class UserAccount{
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

const cyro = new UserAccount("Cyro", 25)
console.log(cyro)