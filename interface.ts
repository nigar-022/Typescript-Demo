export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

//let user: User = { name: "Nigar", id: 90, email: "xyz@gmail.com" };
// destructure
let { name, email: userEmail }: User = {
  name: "Nigar",
  id: 90,
  email: "xyz@gmail.com",
};
console.log(name, userEmail);

interface Empp extends User {
  salary: number;
}

let joo: Empp = { name: "Joo", age: 90, id: 89, salary: 7800, email: "89" };
console.log(joo);

export interface Login {
  Login(): User;
}

let [user1, user2, ...restUsers]: User[] = [
  { name: "Nigar", id: 90, email: "xyz@gmail.com" },
  { name: "Niga1r", id: 91, email: "xyz@gmail.com" },
  { name: "Nigar2", id: 92, email: "xyz@gmail.com" },
  { name: "Nigar3", id: 93, email: "xyz@gmail.com" },
];
console.log(user1, user2, restUsers);
