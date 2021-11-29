var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
function Autobind(target, name, descriptor) {
    console.log(descriptor);
    var originalMethod = descriptor.value;
    var desc = {
        configurable: true,
        enumerable: false,
        get: function () {
            return originalMethod.bind(this);
        }
    };
    return desc;
}
var Person2 = /** @class */ (function () {
    function Person2() {
        this.message = "Hii Abhi";
    }
    Person2.prototype.getMessage = function () {
        console.log(this.message);
    };
    __decorate([
        Autobind
    ], Person2.prototype, "getMessage");
    return Person2;
}());
var button = document.querySelector("button");
var p = new Person2();
(_a = button) === null || _a === void 0 ? void 0 : _a.addEventListener("click", p.getMessage);
// button?.addEventListener("click", () => {
//   p.getMessage();
// });

//# sourceMappingURL=using-ts.js.map
