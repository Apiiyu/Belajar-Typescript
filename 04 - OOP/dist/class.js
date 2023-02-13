"use strict";
class Department {
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
class ITDepartment extends Department {
    constructor(id, leader, room, techStack = []) {
        super(id, 'Information Technology');
        this.leader = leader;
        this.techStack = techStack;
        this.room = room;
    }
    addTechStack(tech) {
        this.techStack.push(tech);
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
IT.describe();
IT.printEmployeeInformation();
IT.printTechStack();
//# sourceMappingURL=class.js.map