var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(target, name, descriptor) {
    var original = descriptor.value;
    if (typeof original === 'function') {
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Arguments: " + args);
            try {
                var result = original.apply(this, args);
                console.log("Result: " + result);
                return result;
            }
            catch (e) {
                console.log("Error: " + e);
                throw e;
            }
        };
    }
    return descriptor;
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.square = function (n) {
        return n * n;
    };
    __decorate([
        log
    ], Calculator.prototype, "square", null);
    return Calculator;
}());
var calc = new Calculator();
calc.square(22);
