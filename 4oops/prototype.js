//Example for the prototypes 
//Example 1
function Person (name , age){
    this.name = name;
    this.age = age;

}
//Add a method to the prototype
Person.prototype.greet = function(){
    console.log(`Hi, I,m ${this.name} and I am ${this.age}`);
};

const p1 = new Person ("Tushar" , 20);
p1.greet();
//Example 2
function Developer (name , stack){
    this.name = name;
    this.stack = stack;

}
//adding methds to the prototypes
Developer.prototype.greet = function(){
    console.log(`I am ${this.name} my exprence with ${this.stack}`);
}
//creating object for the developer function
const d1 = new Developer("tushar", "mern");
d1.greet();