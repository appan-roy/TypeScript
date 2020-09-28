interface Iemployee{
    empName:string;
    empID:number;
    empSalary:number;

    display:() => void;
}

var emp:Iemployee = {
    empName: 'John',
    empID: 101,
    empSalary: 20000,

    display():void{
        console.log(this.empName+" "+this.empID+" "+this.empSalary);
    }
}

console.log(emp.empName);   //John
console.log(emp.empID);     //101
console.log(emp.empSalary); //20000
emp.display()   //John 101 20000

//interface can be inherited from another interface
interface iface1{
    a:number;
    b:number;
    sum():number;
}

interface iface2 extends iface1{
    x:number;
    y:number;
    sub():number;
}

class myClass implements iface2{
    a:number;
    b:number;
    x:number;
    y:number;

    sum():number{
        return (this.a + this.b)
    }

    sub():number{
        return (this.x - this.y)
    }
}

var cls = new myClass()

cls.a = 17
cls.b = 7
cls.x = 10
cls.y = 8

console.log(cls.sum());     //24
console.log(cls.sub());     //2
