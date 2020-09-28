var Employee = /** @class */ (function () {
    function Employee(id, name, deptNo) {
        this.EmpId = id;
        this.EmpName = name;
        this.DeptNo = deptNo;
    }
    Employee.prototype.setData = function (id, name, deptNo) {
        this.EmpId = id;
        this.EmpName = name;
        this.DeptNo = deptNo;
    };
    Employee.prototype.display = function () {
        console.log(this.EmpId);
        console.log(this.EmpName);
        console.log(this.DeptNo);
    };
    return Employee;
}());
var emp = new Employee(101, 'John', 10);
emp.display();
