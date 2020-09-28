var emp = {
    empName: 'John',
    empID: 101,
    empSalary: 20000,
    display: function () {
        console.log(this.empName + " " + this.empID + " " + this.empSalary);
    }
};
console.log(emp.empName); //John
console.log(emp.empID); //101
console.log(emp.empSalary); //20000
emp.display(); //John 101 20000
var myClass = /** @class */ (function () {
    function myClass() {
    }
    myClass.prototype.sum = function () {
        return (this.a + this.b);
    };
    myClass.prototype.sub = function () {
        return (this.x - this.y);
    };
    return myClass;
}());
var cls = new myClass();
cls.a = 17;
cls.b = 7;
cls.x = 10;
cls.y = 8;
console.log(cls.sum());
console.log(cls.sub());
