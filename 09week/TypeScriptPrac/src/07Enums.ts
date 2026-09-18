

function doSomething(key: string){
    
}

doSomething("up");
doSomething("ups");
// without enums
// it was accepting any string;

type input = "up" | "down" | "left" | "right";
function doSomethingType(key: input) { 
    if(key == "up"){}
}
// but now doSomethingType("ups"); // gives error; 

// enum 
// enumeration; means we can iterate over some constant values;
enum Direction {
    up, // 0
    down, // 1
    left,
    right
}
function doEnum(key: Direction){
    if(key == Direction.up){}
}
doEnum(Direction.up); // we can get suggestions also rather than typing in string;
doEnum(Direction.down);

console.log(Direction.up); // 0
console.log(Direction.down); // 1

console.log("---------------------------------")
// if we wnat value starts from 1; or any other num; start from 1
enum Direction2 {
    up = 1, 
    down,
    left,
    right
}

console.log(Direction2.up); // 1
console.log(Direction2.down); // 2

console.log("---------------------------------")

// if we wanna give random vals
enum Direction4 {
    up = 10, 
    down = 900,
    left,
    right
}

console.log(Direction4.up); 
console.log(Direction4.down); 
console.log(Direction4.left); 
console.log(Direction4.right); 

console.log("---------------------------------")

enum Direction3 {
    up = "up", 
    down = "down", 
    left = "left",
    right = "right"
}
function doEnum3(key: Direction3){
    if(key == Direction3.up){}
}
doEnum3(Direction3.up);
doEnum3(Direction3.down);

console.log(Direction3.up); 
console.log(Direction3.down); 


enum responseStatus {
    Success = 200,
    NotFound = 411,
    Error = 500
}

// res.status(responseStatus.NotFound).json({})