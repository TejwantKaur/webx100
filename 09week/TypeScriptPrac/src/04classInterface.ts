// anyone implementing it forced to implement all these which r inside interface;
interface Person {
    name: string,
    age: number,
    
    greet(greetingMaterial: string): void;
}

// class that follows all the properties of interface;
//  but type; we will study donot allow this; main interview ques;
// interfaces can be implemented as classes; Types can't be;
class Employee implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    }

    greet(greetingMaterial: string){
        console.log(`${greetingMaterial} ${this.name}`)
    }
}

const emp = new Employee("Tejwant", 23);
console.log(emp.name);