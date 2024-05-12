"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        //private id!: number;
        _Employee_id.set(this, void 0);
        this.address = address;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
    }
    Login() {
        return { name: "Nigar", id: 90, email: "xyz@gmail.com" };
    }
    getNameWithAddress() {
        return `${this.name} ${this.address}`;
    }
    static getEmployeeCount() {
        return 50;
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
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
