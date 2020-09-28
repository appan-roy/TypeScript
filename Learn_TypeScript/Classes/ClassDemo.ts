class Employee{

    EmpId:number;
    EmpName:string;
    DeptNo:number;

    constructor(id:number, name:string, deptNo:number){
        this.EmpId = id;
        this.EmpName = name;
        this.DeptNo = deptNo;
    }

    setData(id:number, name:string, deptNo:number):void{
        this.EmpId = id;
        this.EmpName = name;
        this.DeptNo = deptNo;
    }

    display():void{
        console.log(this.EmpId);
        console.log(this.EmpName);
        console.log(this.DeptNo);
    }

}

var emp = new Employee(101, 'John', 10);
emp.display()
