class Department {
  //name: string;
  private employees: string[] = [];

  //   constructor(name: string) {
  //     this.name = name;
  //   }

  constructor(private id: string, public name: string) {}

  describe(this: Department) {
    console.log("department is " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

let department = new Department("d1", "Accounting");
console.log(department);
department.describe();

let departmentCopy = {
  describe: department.describe,
};
departmentCopy.describe.bind(department)();

department.addEmployee("Jyoti");
department.addEmployee("Abhi");
