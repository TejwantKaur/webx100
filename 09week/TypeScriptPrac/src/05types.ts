// cannot use this to implement classes;
type User = {
    firstName: string, 
    lastName: string, 
    email?:string, // if i dont want to keep it required
    age: number,
}

// only interfaces are used to implement classes;
interface User2 {
    firstName: string, 
    lastName: string, 
    email?:string,
    age: number,
}

// cannot use types to implement classes;
// but allowes us to do some extra things;

// 1 union;
type greetArg = number | string | boolean; // any dataType

// intersection;
type Employee = {
    name: string,
    startDate: Date
}

type Manager = { // can be interface also;
    name: string,
    newDate: Date
}

type TechLead = Employee & Manager;
type techLead2 = { // TechLead & TechLead2 both r same;
    name: string,
    startDate: Date,
    newDate: Date
}


