"use strict";
exports.__esModule = true;
var ModuleDemo_1 = require("../Modules/ModuleDemo");
//access variable
console.log(ModuleDemo_1.x);
//access function
ModuleDemo_1.myFunc();
//access class objects
var cls = new ModuleDemo_1.myClass(17, 7);
console.log(cls.add());
