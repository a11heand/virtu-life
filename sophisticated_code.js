/*
File: sophisticated_code.js

This code demonstrates a sophisticated and complex implementation of a payroll management system.
*/

// Employee class definition
class Employee {
  constructor(id, firstName, lastName, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getSalary() {
    return this.salary;
  }

  setSalary(newSalary) {
    this.salary = newSalary;
  }
}

// Payroll class definition
class Payroll {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEmployee(employeeId) {
    this.employees = this.employees.filter(emp => emp.id !== employeeId);
  }

  calculateTotalSalary() {
    let totalSalary = 0;
    for (let employee of this.employees) {
      totalSalary += employee.getSalary();
    }
    return totalSalary;
  }

  calculateAverageSalary() {
    const totalSalary = this.calculateTotalSalary();
    return totalSalary / this.employees.length;
  }
}

// Creating new employees
const employee1 = new Employee(1, 'John', 'Doe', 5000);
const employee2 = new Employee(2, 'Jane', 'Smith', 6000);
const employee3 = new Employee(3, 'Michael', 'Johnson', 5500);

// Creating a payroll instance and adding employees
const payroll = new Payroll();
payroll.addEmployee(employee1);
payroll.addEmployee(employee2);
payroll.addEmployee(employee3);

// Modifying salary of an employee
employee1.setSalary(5500);

// Removing an employee from the payroll
payroll.removeEmployee(3);

// Retrieving employee details and printing them
for (let employee of payroll.employees) {
  console.log(`Employee ID: ${employee.id}`);
  console.log(`Full Name: ${employee.getFullName()}`);
  console.log(`Salary: $${employee.getSalary()}`);
  console.log('---------------------');
}

// Calculating and printing payroll summary
console.log(`Total Salary: $${payroll.calculateTotalSalary()}`);
console.log(`Average Salary: $${payroll.calculateAverageSalary()}`);

// ... Continue with more sophisticated and complex functionalities ...
// ... This code snippet demonstrates only a small portion of the entire system ...

// End of sophisticated_code.js