//declare in general way
var empId = 101;
var empName = 'John';
var empSal = 20000;
//tuple is a collection of heterogeneous data types e.g., number, string, char etc.
//declare tuple - method 1
var employee = [101, 'John', 20000];
console.log(employee); //[ 101, 'John', 20000 ]
//declare tuple - method 2
var Employee = [101, 'John', 20000];
console.log(Employee); //[ 101, 'John', 20000 ]
//access tuple elements
console.log(Employee[0]); //101
console.log(Employee[1]); //John
console.log(Employee[2]); //20000
//add elements to tuple - push()
Employee.push(102, 'Jill', 30000);
console.log(Employee); //[ 101, 'John', 20000, 102, 'Jill', 30000 ]
//remove element from tuple - pop()
Employee.pop();
console.log(Employee); //[ 101, 'John', 20000, 102, 'Jill' ]
//update element in tuple
Employee[1] = 'Jack';
console.log(Employee); //[ 101, 'Jack', 20000, 102, 'Jill' ]
//declare tuple array
var student = [[101, 'John'], [102, 'Jill'], [103, 'Jack']];
//access tuple array elements
console.log(student[0]); //[ 101, 'John' ]
console.log(student[1]); //[ 102, 'Jill' ]
console.log(student[2]); //[ 103, 'Jack' ]
