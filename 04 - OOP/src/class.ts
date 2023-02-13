class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = []; // As we know, in Typescript we also can use access modifiers like in Java. In this case, we use private access modifier, so we can't access the property employees from outside the class. But I remember you again is working only with Typescript. In Javascript they are not working and then also know just public access modifier.

  constructor(private readonly id: string, public name: string) { // In this case, we try to use shorthand Initialization. In this case, we don't need to declare the property id and name, and then assign the value of the parameter id and name to the property id and name. We can use shorthand Initialization, and we can declare the property id and name in the constructor parameter (Don't forget to define access modifiers xD). So, we don't need to declare the property id and name, and then assign the value of the parameter id and name to the property id and name. We can use shorthand Initialization, and we can declare the property id and name in the constructor parameter. Besides that, we also can use readonly access modifier in the constructor parameter. In this case, we won't change the value of the property id from outside the class. But I remember you again is working only with Typescript.
  }

  describe(this: Department) { // As we know, in Javascript there have keyword this, and it's refer to the object that call the method. But in typescript, we can specify the type of this keyword. In this case, we specify the type of this keyword is Departement. So, we can use this.name in the method describe. If we don't specify the type of this keyword, we can't use this.name in the method describe. Because this keyword refer to the object that call the method, and in this case, the object that call the method is DepartementAccounting, and DepartementAccounting doesn't have property name. So, we will get error when we try to use this.name in the method describe.
    console.log(`Departement (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department { // In this case, we try to use inheritance. In this case, we try to create a new class ITDepartement, and we want to use the property and method from the class Departement. So, we can use extends keyword to use the property and method from the class Departement. In this case, we can use the property and method from the class Departement in the class ITDepartement.
  public room: string;
  constructor(id: string, public leader: string, room: string, private techStack: string[] = []) {
    super(id, 'Information Technology'); // We should know about super keyword. In this case, we use super keyword to call the constructor of the parent class. In this case, we use super keyword to call the constructor of the class Departement. So, we can use the property id and name from the class Departement in the class ITDepartement. And if we want to use this keyword we should call the constructor of the parent class first.
    this.room = room;
  }

  addTechStack(tech: string) {
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
