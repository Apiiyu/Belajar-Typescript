class Department {
  // private id: string;
  // private name: string;
  static fiscalYear: number = 2020; // We know static keyword is also can be used in property of class
  private president:string = 'Rafi';  // As we know, in Typescript we also can use access modifiers like in Java. In this case, we use private access modifier, so we can't access the property employees from outside the class. But I remember you again is working only with Typescript. In Javascript they are not working and then also know just public access modifier.
  protected employees: string[] = []; // Besides private access modifier, we also can use protected access modifier. You should know protected is not same with private. The property where it has private access modifier, It also can be modified/change in the same class, either we use Inheritance or not. But the property where it has protected access modifier, It also can be modified/change in the same class, or it can be modified/change in the child class. So, we can use protected access modifier if we want to use Inheritance.

  constructor(private readonly id: string, public name: string) {
    // In this case, we try to use shorthand Initialization. In this case, we don't need to declare the property id and name, and then assign the value of the parameter id and name to the property id and name. We can use shorthand Initialization, and we can declare the property id and name in the constructor parameter (Don't forget to define access modifiers xD). So, we don't need to declare the property id and name, and then assign the value of the parameter id and name to the property id and name. We can use shorthand Initialization, and we can declare the property id and name in the constructor parameter. Besides that, we also can use readonly access modifier in the constructor parameter. In this case, we won't change the value of the property id from outside the class. But I remember you again is working only with Typescript.
  }

  describe(this: Department) {
    // As we know, in Javascript there have keyword this, and it's refer to the object that call the method. But in typescript, we can specify the type of this keyword. In this case, we specify the type of this keyword is Departement. So, we can use this.name in the method describe. If we don't specify the type of this keyword, we can't use this.name in the method describe. Because this keyword refer to the object that call the method, and in this case, the object that call the method is DepartementAccounting, and DepartementAccounting doesn't have property name. So, we will get error when we try to use this.name in the method describe.
    console.log(`Departement (${this.id}): ${this.name}`);
  }

  addPresident(president: string) {
    this.president = president;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  static createEmployee(name: string) {
    return { name };
  } // As we know, in Javascript/Typescript we also can use static keyword. We use static keyword to create static method. As we know, the static method is useful for utility function. 

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  printDepartmentInformation() {
    console.log(this.president);
  }
}

class ITDepartment extends Department { // In this case, we try to use inheritance. In this case, we try to create a new class ITDepartement, and we want to use the property and method from the class Departement. So, we can use extends keyword to use the property and method from the class Departement. In this case, we can use the property and method from the class Departement in the class ITDepartement.
  public room: string;
  constructor(id: string, public leader: string, room: string, private techStack: string[] = []) {
    super(id, 'Information Technology'); // We should know about super keyword. In this case, we use super keyword to call the constructor of the parent class. In this case, we use super keyword to call the constructor of the class Departement. So, we can use the property id and name from the class Departement in the class ITDepartement. And if we want to use this keyword we should call the constructor of the parent class first.
    this.room = room;
  }

  get listTechnologyStack() { // As we know in Javascript/Typescript we also can use getter and setter. Getter is used to get the value of the property, Usually we use getter to get the value of the private property or usually we use getter because we want to do something before we return the value of the property. 
    if (this.techStack.length === 0) throw new Error('Tech stack is empty');
    return this.techStack[0];
  }

  set listTechnologyStack(tech: string) { // And then this is setter. Setter is used to set the value of the property. Usually we use setter to set the value of the private property or usually we use setter because we want to do something before we set the value of the property.
    if (!tech) throw new Error('Please enter a valid tech stack');
    this.techStack.push(tech);
  }

  addEmployee(employee: string): void { // We also can override the method from the parent class. In this case, we override the method addEmployee from the class Departement. In this case, we can't add employee with name Rafi in the class ITDepartement.
    if (employee === 'Rafi') return;
    this.employees.push(employee);
  }

  addTechStack(tech: string) {
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
