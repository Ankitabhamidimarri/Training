console.log(10);
console.log(20);
//setTimeout(()=>{console.log(30)},5000) // console.l0g(30); //? Syntax : setTimeout(()=>{callback} , time)
console.log(40);
console.log(50);
//^ interpreter of java script checks for errors line by line and hence when 
//^ there is a syntax error encounterd it does'nt move to the next lines of the code

/*setInterval(()=>{
    document.writeln("YOLO") 
},1500)*/

//* Promise
//let p1 = new Promise((resolve , reject)=>{
//console.log(p1);
//})

let p2 = new Promise((resolve , reject)=>{
resolve("Success!");
});
console.log(p2);
p2.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Finally is printing for both!");
})

/*console.log(p2);
p2.then((response)=>{
    console.log(response);
    })*/

let p3 = new Promise((resolve , reject)=>{
reject("Failure!");
})
console.log(p3);

/*p3.catch((error)=>{
    console.log(error);
})*/

/*p2.finally(()=>{
    console.log("Finally");
})*/



//& for handling the promise we have an instance methods
//& then(), catch(), finally()
//& then is used for success and catch is used for failure
//& catch is used to handle the error
//& finally is used for both success and failure
//& finally is used to execute the code after the promise is resolved or rejected

//^method chaining can include both then and catch