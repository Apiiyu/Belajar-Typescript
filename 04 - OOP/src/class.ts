class Departement {
  name: string;
  private employees: string[] = []; // As we know, in Typescript we also can use access modifiers like in Java. In this case, we use private access modifier, so we can't access the property employees from outside the class. But I remember you again is working only with Typescript. In Javascript they are not working and then also know just public access modifier.

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Departement) { // As we know, in Javascript there have keyword this, and it's refer to the object that call the method. But in typescript, we can specify the type of this keyword. In this case, we specify the type of this keyword is Departement. So, we can use this.name in the method describe. If we don't specify the type of this keyword, we can't use this.name in the method describe. Because this keyword refer to the object that call the method, and in this case, the object that call the method is DepartementAccounting, and DepartementAccounting doesn't have property name. So, we will get error when we try to use this.name in the method describe.
    console.log('Departement: ' + this.name);
  }

  addEmployee(employee: string) {
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

// const DepartementAccounting = { name: 'Accounting', describe: DepartementIT.describe };
// DepartementAccounting.describe();