class Departement {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const DepartementIT = new Departement('Information Technology');
console.log(DepartementIT);