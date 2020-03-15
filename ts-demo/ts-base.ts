// -------------------------------------------------------------------
// Generic fn
// -------------------------------------------------------------------
function genericFn<T>(item: T): T {
  return item;
}

// -------------------------------------------------------------------
// Generic fn with array.
// -------------------------------------------------------------------
function makeGenericArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items)
}

const strArr = makeGenericArray<string>(['Hello', 'World']);
const numberArr = makeGenericArray<number>([100, 200]);

// console.log(numberArr);
// console.log(strArr);

// Multi types
function getInfo<T, U>(id: T, name: U): void {
  console.log(`id - ${typeof id}, name - ${typeof name}`);
}
getInfo<number, string>(22, 'Tom');
//

// -------------------------------------------------------------------
// Generic constrainst.
// -------------------------------------------------------------------
class Customer {
  login: string;
  age: number;

  constructor(login: string, age: number) {
    this.login = login;
    this.age = age
  }
}

function customerLogin<T extends Customer>(customer: T) {
  console.log(`${customer.login} - ${customer.age}`)
}

const customer1 = new Customer('tester', 28);
customerLogin(customer1);
// -------------------------------------------------------------------
// Generic interface.
// -------------------------------------------------------------------
interface Pair<T, U> {
  first: T,
  second: U
}

const pOne: Pair<string, string> = {first: 'test', second: 'pair'};
console.log(pOne);

// -------------------------------------------------------------------
// Generic class.
// -------------------------------------------------------------------
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, Y: T) => T
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;
