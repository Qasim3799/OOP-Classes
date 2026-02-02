// Object Oriented Programming 

// classes are templates for creating objects. 
// classes have 3 major components:
// 1. constructor
// 2. properties/ features/ attributes
// 3. Functions


class Car{
    year = 2000;   // class variable
    constructor(color, brand, model){
        this.color = color;  // instance variable
        this.brand = brand;   // instance variable
        this.model = model;   // instance variable
    }

    // methods / functions   (instance method)
    showAttributes(){
        console.log(this.color)
        console.log(this.brand)
        console.log(this.model) 
        console.log(this.year)
    }
}   

const myCar = new Car('Red', 'Toyota', 'Corolla')
myCar.showAttributes()

myCar.year = 2005

myCar.showAttributes()

const car2 = new Car('Black', 'Honda', 'Crosstour')
car2.showAttributes()



// OOP has 4 major pillars
// 1. Inheritance
// 2. Polymorphism
// 3. Encapsulation
// 4. Abstraction



