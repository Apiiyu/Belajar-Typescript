"use strict";
class Departement {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    describe() {
        console.log('Departement: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const DepartementIT = new Departement('Information Technology');
DepartementIT.addEmployee('Rafi');
DepartementIT.addEmployee('Johhny');
DepartementIT.describe();
DepartementIT.printEmployeeInformation();
//# sourceMappingURL=class.js.map