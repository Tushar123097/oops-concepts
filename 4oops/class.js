class Person {
// Defines a new class called 'Person'. Classes are blueprints for creating objects with specific properties and methods.

    constructor (name, age){
// The constructor method is a special function that runs when a new object is created from the class. It takes 'name' and 'age' as parameters.
//<--yaha name instance hai aur iske liye object create karna hai--->
       this.name = name;
// 'this.name' creates a property called 'name' on the object and sets it to the value passed in.

       this.age = age;
// 'this.age' creates a property called 'age' on the object and sets it to the value passed in.
    }

    greet() {
// Defines a method called 'greet' for the Person class. This method can be called on any Person object.

        console.log(`Hi, I',m ${this.name} and I am ${this.age} years old`);
// Prints a message to the console using the object's 'name' and 'age' properties.
    }
}
//<INSTANCE KE LIYE>
//<--yahi hai jo object banaya hai-->
const p1 = new Person("Tushar", 22);
// Creates a new Person object called 'p1' with the name "Tushar" and age 22.

p1.greet();
// Calls the 'greet' method on the 'p1' object, which prints the greeting message.