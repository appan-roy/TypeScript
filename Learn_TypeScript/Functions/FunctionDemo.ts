//named function
function Sum(x:number, y:number):number{
    return x + y;
}

console.log(Sum(17, 7));    //24

//anonymous function
var subtractOfNum = function(x:number, y:number):number{
    return x - y;
}

console.log(subtractOfNum(17, 7));  //10

//function with required params
function Greet1(message:string, name:string):string{
    return message+" "+name
}

console.log(Greet1('Welcome', 'John'));     //Welcome John

//function with optional params...here name is optional
function Greet2(message:string, name?:string):string{
    return message+" "+name
}

console.log(Greet2('Welcome'));     //Welcome undefined

//function with default params...here message is kept default
function Greet3(name:string, message:string = 'Hello'):string{
    return message+" "+name
}

console.log(Greet3('John'));     //Hello John
console.log(Greet3('John', 'Welcome'));     //Welcome John

//arrow function / lambda function
var Multiply = (x:number, y:number):number =>{
    return x * y;
}

console.log(Multiply(17, 7));   //119

//lambda function without params
var Print = () => {
    console.log('Welcome to TypeScript'); 
}

console.log(Print());   //Welcome to TypeScript


//if the function body consists of only single statement, then {} and the return keyword is optional
var Print2 = () => console.log('Welcome to TypeScript');    //Welcome to TypeScript
console.log(Print2());   //Welcome to TypeScript

var Divide = (x:number, y:number) => x / y;
console.log(Divide(17, 7));     //2.4285714285714284

//rest params...it is used if number of params are unknown
function greeting(message:string, ...name:string[]){
    return  message+" "+name.join(", ");
}

console.log('Hello');                   //Hello
console.log('Hello', 'John');           //Hello John
console.log('Hello', 'John', 'Doe');    //Hello John Doe
