class Person {
    constructor(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }

    //Call the introduce method on each instance and print the returned string to the console.
    introduce() {
        return "My name is " + this.name + ", I am " + this.age + " years old, I am " + this.gender + ", and I am " + this.nationality + ".";
    }
}

//Create a subclass named "Student" that inherits from the Person class.
class Student extends Person {
    constructor(name, age, gender, nationality, subject) {
        super(name, age, gender, nationality);
        //Add a new property to the Student class named "subject" of type string.
        this.subject = subject;
    }
    //Create a method named "study" in the Student class that returns a string containing the subject that the student is studying.
    study() {
        return "I am studying " + this.subject + ".";
    }
}
//Create three instances of the Person class and assign values to their properties.
let person = new Person("John", 25, "male", "American");
let person2 = new Person("Jane", 30, "female", "Canadian");
let person3 = new Person("Bob", 20, "male", "Australian");

console.log(person.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

//Create an instance of the Student class and assign values to its properties.
let student = new Student("Sarah", 18, "female", "British", "Computer Science");
//Call the introduce method on the Student instance and print the returned string to the console.
console.log(student.introduce());
//Call the study method on the Student instance and print the returned string to the console.
console.log(student.study());