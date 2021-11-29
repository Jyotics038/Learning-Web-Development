var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function autobind(target, name, descriptor) {
    var originalMethod = descriptor.value;
    var newDescriptor = {
        configurable: true,
        get: function () {
            return originalMethod.bind(this);
        }
    };
    return newDescriptor;
}
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
var Project = /** @class */ (function () {
    function Project(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
    return Project;
}());
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.FormE1 = document.querySelector('form');
        this.titleE1 = document.getElementById('title');
        this.peopleE1 = document.getElementById('people');
        this.descriptionE1 = document.getElementById('description');
        this.configure();
    }
    ProjectInput.prototype.configure = function () {
        this.FormE1.addEventListener('submit', this.submitHandler);
    };
    ProjectInput.prototype.submitHandler = function (event) {
        event.preventDefault();
        var title = this.titleE1.value;
        //console.log(title);
        var description = this.descriptionE1.value;
        var people = new.peopleE1.value;
    };
    __decorate([
        autobind
    ], ProjectInput.prototype, "submitHandler");
    return ProjectInput;
}());
var projectInput = new ProjectInput();
