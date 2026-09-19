- npm install -g typescript
- npm init -y
- tsc --init

- tsc -b / npx tsc
- node a.js

- root dir => src
- out => dist

- node dist/a.js
- vi .gitignore
- i (now insert=> dist/)
- Esc → leave Insert mode
- :wq → write (save) + quit

- noImplicitAny: false kerdo; if we dont want errs too fast; like converting js to ts immediately will give 1000 of errrs; so to avoid it; make it false; so that is no data type; it will assume is any;

- noComments: true kerdo; we dont need them in js files;
- "rootDir": "./src", "outDir": "./dist", "removeComments": true,

## Interfaces | Types
- interface User { 
    fN: string, 
    email?:string, // if i dont want to keep it required; optional argument;
}

- interfaces can be implemented as classes; Types can't be;
- anyone implementing interface is forced to implement all these vars & methods which r inside interface;

- interfaces used to implement as classes;
- cannot use Type to implement classes; but it gives some extra features;
- interfaces can be extended in the class; 
- Types let us to do (and or) (union & intersections) then we can use type;
- intesection; have properties of interfaces;


## Arrays
- function maxVal(arr: number[]);
- type numberArr = number[];
- function maxVal(arr: numberArr); // only types can do this not interfaces;

## Enums | enumeration
- Features that allow us to define a set of named constants
- concept is to create a human-readable way to represent set of constant vals
- enumeration; means we can iterate over some constant values;
- when we have limited set of inputs to any function

## Express
- for express we can define enum for responsesStatus
- enum responseStatus {
    Success = 200,
    NotFound = 411,
    Error = 500
}
- res.status(responseStatus.NotFound).json({})
- npm install express @types/express;
- now we can write in ES6 => import instead of require;
- export a;

- if we use export default a;
- we dont need to import in import {a} from ""; just; import a from "";

## Generics
- "noUncheckedIndexedAccess": true; make it false; 
- to avoid errors of undefined