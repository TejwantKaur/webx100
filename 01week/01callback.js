console.log("HI")

// callback functions;
function sq(n){ return n*n; }
function cube(n){ return n*n*n; }


// callback is func name, we are calling
function func(a,b, callback){ // sq; cube
    console.log(callback);

    const val1 = callback(a); // sq of a; sq(a); cube(a);
    const val2 = callback(b); // sq of b; sq(b); cube(b);

    return val1+val2; // 4+4=8; 8+8=16
}

function func2(a,b, fn){ // sq; cube
    console.log(fn);

    const val1 = fn(a); // sq of a; sq(a); cube(a);
    const val2 = fn(b); // sq of b; sq(b); cube(b);

    return val1+val2; // 4+4=8; 8+8=16
}

console.log(func2(2,2, sq));
console.log(func2(2,2, cube));