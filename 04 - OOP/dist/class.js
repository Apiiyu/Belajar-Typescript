"use strict";
class Departement {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Departement (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const DepartementIT = new Departement('IT', 'Information Technology');
DepartementIT.addEmployee('Rafi');
DepartementIT.addEmployee('Johhny');
DepartementIT.describe();
DepartementIT.printEmployeeInformation();
//# sourceMappingURL=class.js.map