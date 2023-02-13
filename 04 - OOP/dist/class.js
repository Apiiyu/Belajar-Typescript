"use strict";
class Departement {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log('Departement: ' + this.name);
    }
}
const DepartementIT = new Departement('Information Technology');
DepartementIT.describe();
const DepartementAccounting = { name: 'Accounting', describe: DepartementIT.describe };
DepartementAccounting.describe();
//# sourceMappingURL=class.js.map