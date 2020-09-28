import {x, myFunc, myClass} from "../Modules/ModuleDemo"
//access variable
console.log(x)      //Welcome

//access function
myFunc()    //This is my function

//access class objects
var cls = new myClass(17, 7);
console.log(cls.add());     //24
