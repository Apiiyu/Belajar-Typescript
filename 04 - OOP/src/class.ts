class Departement {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Departement) { // As we know, in Javascript there have keyword this, and it's refer to the object that call the method. But in typescript, we can specify the type of this keyword. In this case, we specify the type of this keyword is Departement. So, we can use this.name in the method describe. If we don't specify the type of this keyword, we can't use this.name in the method describe. Because this keyword refer to the object that call the method, and in this case, the object that call the method is DepartementAccounting, and DepartementAccounting doesn't have property name. So, we will get error when we try to use this.name in the method describe.
    console.log('Departement: ' + this.name);
  }
}

const DepartementIT = new Departement('Information Technology');
DepartementIT.describe();

const DepartementAccounting = { name: 'Accounting', describe: DepartementIT.describe };
DepartementAccounting.describe();