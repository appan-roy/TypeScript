//variable
export var x:string = 'Welcome'

//function
export var myFunc = ()=>{
    console.log('This is my function');
    
}

//class
export class myClass{
    a:number;
    b:number;

    constructor(a:number, b:number){
        this.a = a;
        this.b = b;
    }

    add=()=>{
        return (this.a + this.b);
    }
}

