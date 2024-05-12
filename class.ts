import { Login, User } from "./interface";

class Employee implements Login {
  //private id!: number;
  #id!: number;
  protected name!: string;
  address: string;

  constructor(id: number, name: string, address: string) {
    this.address = address;
    this.#id = id;
    this.name = name;
  }
  Login(): User {
    return { name: "Nigar", id: 90, email: "xyz@gmail.com" };
  }

  getNameWithAddress() {
    return `${this.name} ${this.address}`;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }
}

// (john.id = 121), (john.name = " John");
// john.address = "Highway 12";

let john = new Employee(1, "Johni", "Jighway");
let address = john.getNameWithAddress();
john.empId = 100;
console.log(john.empId);
console.log(john);
console.log(address);

let mike = new Manager(2, "Mike", "Subways");
console.log(mike);
console.log(mike.getNameWithAddress());

console.log(Employee.getEmployeeCount());
