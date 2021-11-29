class Departments {
  //name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {}

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  printEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  describe(this: Departments) {
    console.log("department is " + this.name);
  }
}

class ItDepartment extends Departments {
  constructor(id: string, public admins: string[]) {
    super(id, "ITDepartment");
  }
}

class AccountingDepartment extends Departments {
  constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
  }

  get mostRecentReport() {
    if (!this.reports) {
      throw new Error("No reports");
    }
    return this.reports[this.reports.length - 1];
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Report can't be inserted");
    }
    this.addReport(value);
  }

  addEmployee(employee: string) {
    if (employee == "Jyoti") {
      return;
    }
    super.addEmployee(employee);
    // this.employees.push(employee);
  }
  addReport(report: string) {
    this.reports.push(report);
  }
  printReport() {
    console.log(this.reports);
  }
}

const it = new ItDepartment("d1", ["Jyoti"]);
it.addEmployee("Jyoti");
console.log(it);

const accounting = new AccountingDepartment("A1", []);
accounting.addEmployee("Abhi");
accounting.addEmployee("Jyoti");
accounting.printEmployees();
accounting.addReport("Something wrong");
accounting.printReport();
console.log(accounting);

console.log(Departments.createEmployee("Jyoti"));
