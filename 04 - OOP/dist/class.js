"use strict";
class Department {
    constructor(id, president, name) {
        this.id = id;
        this.president = president;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Departement (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    static createEmployee(name) {
        return { name };
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    printDepartmentInformation() {
        console.log(this.president);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, leader, room, techStack = []) {
        super(id, leader, 'Information Technology');
        this.leader = leader;
        this.techStack = techStack;
        this.room = room;
    }
    get listTechnologyStack() {
        if (this.techStack.length === 0)
            throw new Error('Tech stack is empty');
        return this.techStack[0];
    }
    set listTechnologyStack(tech) {
        if (!tech)
            throw new Error('Please enter a valid tech stack');
        this.techStack.push(tech);
    }
    addEmployee(employee) {
        if (employee === 'Rafi')
            return;
        this.employees.push(employee);
    }
    showThePresident() {
        console.log(this.president);
    }
    addTechStack(tech) {
        this.techStack.push(tech);
        this.listTechnologyStack = tech;
    }
    printTechStack() {
        console.log(this.techStack);
    }
}
const IT = new ITDepartment('IT', 'Mark', 'Room 1');
IT.addEmployee('Rafi');
IT.addEmployee('Johhny');
const newEmployee = Department.createEmployee('Rafi');
console.log(newEmployee);
console.log(Department.fiscalYear);
IT.addTechStack('Javascript');
IT.addTechStack('Typescript');
IT.listTechnologyStack = 'React';
IT.describe();
IT.printEmployeeInformation();
IT.printTechStack();
//# sourceMappingURL=class.js.map