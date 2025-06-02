//constructor - does not return anything and start with the capital letter function and function name
function Person(name, age){
   this.name = name;
    this.age = age;
    console.log(this);

}
Person.prototype.talk = function (){
    console.log(`Hi , my name is ${this.name}`);
};
let p1 = new Person("adever", 49);
let p2 = new Person("Loren", 48);