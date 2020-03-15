// -------------------------------------------------------------------
// Generic fn
// -------------------------------------------------------------------
function genericFn(item) {
    return item;
}
// -------------------------------------------------------------------
// Generic fn with array.
// -------------------------------------------------------------------
function makeGenericArray(items) {
    return new Array().concat(items);
}
var strArr = makeGenericArray(['Hello', 'World']);
var numberArr = makeGenericArray([100, 200]);
// console.log(numberArr);
// console.log(strArr);
// Multi types
function getInfo(id, name) {
    console.log("id - " + typeof id + ", name - " + typeof name);
}
getInfo(22, 'Tom');
//
// -------------------------------------------------------------------
// Generic constrainst.
// -------------------------------------------------------------------
var Customer = /** @class */ (function () {
    function Customer(login, age) {
        this.login = login;
        this.age = age;
    }
    return Customer;
}());
function customerLogin(customer) {
    console.log(customer.login + " - " + customer.age);
}
var customer1 = new Customer('tester', 28);
customerLogin(customer1);
// const testPair: Pair<string, number> = {first: 'Some first', second: 22};
// console.log(testPair);
// -------------------------------------------------------------------
// Generic class.
// -------------------------------------------------------------------
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
