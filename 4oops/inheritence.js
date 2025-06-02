//Parent class
class Animal {
    eat(){
        console.log("This animal eats food");
    }
}
//child class
//new method
class Poppy {
    pop(){
        console.log("this is new poppy");
    }
}
class Dog extends Animal {
    bark(){
        console.log("The dog barks");
    }
}
//Using the classes
const dog = new Dog();
dog.eat();//from Animal (parent)
dog.bark();//from Dog (child)
