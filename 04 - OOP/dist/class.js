"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.president = 'Rafi';
        this.employees = [];
    }
    describe() {
        console.log(`Departement (${this.id}): ${this.name}`);
    }
    addPresident(president) {
        this.president = president;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    printDepartmentInformation() {
        console.log(this.president);
    }
}
class ITDepartment extends Department {
    constructor(id, leader, room, techStack = []) {
        super(id, 'Information Technology');
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
IT.addTechStack('Javascript');
IT.addTechStack('Typescript');
IT.listTechnologyStack = 'React';
IT.describe();
IT.printEmployeeInformation();
IT.printTechStack();
//# sourceMappingURL=class.js.map