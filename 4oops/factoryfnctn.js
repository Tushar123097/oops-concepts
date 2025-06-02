function createPerson(name, age){
// Defines a function called 'createPerson' that takes 'name' and 'age' as parameters.

    return{
// Returns a new object with the following properties and methods:

        name: name,
// Sets the 'name' property of the object to the value passed as 'name'.

        age: age,
// Sets the 'age' property of the object to the value passed as 'age'.

        greet: function(){
// Adds a method called 'greet' to the object.

            console.log(`Hi, I,m ${this.name} and I am ${this.age} years old`)
// When 'greet' is called, it prints a message using the object's 'name' and 'age'.
        }
    }
}

const p1 = createPerson("Tushar", 20);
// Calls 'createPerson' with "Tushar" and 20, and stores the returned object in 'p1'.

p1.greet();
// Calls the 'greet' method on 'p1', printing the greeting message.