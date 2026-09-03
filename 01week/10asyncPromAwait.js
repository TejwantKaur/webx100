// callback;

function myTimeout(cb, duration){
    setTimeout(function(){cb()}, duration);
}
myTimeout(function(){}, 1000);

// ------------------------------------------------------
// Promise
function pro(duration){
    const p = new Promise(
        function(resolve, reject){
            reject();
            setTimeout(function(){
                resolve()
            },duration)
        }
    );
    return p;
}

const ans = pro(1000);
ans.then(function(){
    console.log("Timeout done")
})
.catch(function(){

})