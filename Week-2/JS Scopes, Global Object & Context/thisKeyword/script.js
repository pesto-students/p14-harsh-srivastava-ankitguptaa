var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, gender, nationality) {
        if (nationality === void 0) { nationality = "Indian"; }
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }
    Person.prototype.introduce = function () {
        return "Name: " + this.name + " ,Age: " + this.age + " ,Gender: " + this.gender + " ,Nationality: " + this.nationality;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.study = function () {
        return "Subject: " + this.subject;
    };
    return Student;
}(Person));
var person = new Person("Ranveer Singh", 31, "Male");
var person2 = new Person("Akshay Kumar", 24, "Male");
var person3 = new Person("Jackie Chain", 41, "Male", "Japan");
console.log(person.introduce());
console.log(person2.introduce());
console.log(person3.introduce());
var student = new Student("Sanjay Dutt", 34, "Male");
console.log(student.introduce());
console.log(student.study());
