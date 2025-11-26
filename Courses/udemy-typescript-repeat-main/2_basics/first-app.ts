function add(a: number, b: number): number {
  return a + b;
}
type addFunc = (a: number, b: number) => number;

function calcNum(a: number, b: number, calcFunc: addFunc) {
  console.log(calcFunc(a, b));
}

calcNum(1, 3, add);

// Use interface as default (objects ect) and type for unions

interface User {
  user: string;
}

interface Admin {
  permissions: string[];
}

interface AppAdmin extends User, Admin {}

let admin: AppAdmin;

admin = {
  user: "Peter",
  permissions: ["access"],
};

type Role = "admin" | "teacher";
let role: Role;

role = "admin";

function perfromAction(action: string, role: Role) {
  if (role === 'admin')
}

type DataStorage<T> {
  storage: T[];
  add: (data: T) => void
}

const textStorage: DataStorage<string> = {
  storage: [],
  add(data){
    this.storage.push(data)
  }
}

