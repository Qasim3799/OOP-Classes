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




class Dog{
  constructor(name,color,breed){
    this.name = name
    this.color = color
    this.breed = breed
  }

  // Methods
  bark(){
    console.log("Barking")
  }
}

const myDog = new Dog("Bingo","Black","Bull Dog")

console.log(myDog.name)
console.log(myDog.color)
console.log(myDog.breed)

myDog.color ="Brown"
console.log(myDog.color)

myDog.bark()
Student class
class Student{
  level = 100
constructor(name,gender,department){
  this.name = name
  this.gender = gender
  this.department = department;
}

  // Function to change level

  changeLevel(newLevel){
    this.level=newLevel
  }

  changeDept(newDept){
    this.department = newDept
  }

}


const student1 = new Student("Olamide","Male","Mass Com")
console.log(student1.level)
student1.changeLevel(300)

console.log(student1.level)
console.log(student1.department)
console.log(student1.name)
console.log(student1.gender)
student1.changeDept("Computer science")
console.log(student1.department)



// OOP has 4 major pillars
// 1. Inheritance
// 2. Polymorphism
// 3. Encapsulation
// 4. Abstraction


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


// Creating object of the Car class named myCar

const myCar = new Car('Red', 'Toyota', 'Corolla')
myCar.showAttributes()

myCar.year = 2005
myCar.showAttributes()


// creating another instance / object of the Car class named car2

const car2 = new Car('Black', 'Honda', 'Crosstour')
car2.showAttributes()  





class Dog{
  constructor(name,color,breed){
    this.name = name
    this.color = color
    this.breed = breed
  }

  // Methods
  bark(){
    console.log("Barking")
  }
}

const myDog = new Dog("Bingo","Black","Bull Dog")

console.log(myDog.name)
console.log(myDog.color)
console.log(myDog.breed)

myDog.color ="Brown"
console.log(myDog.color)

myDog.bark()


// Student class
class Student{
  level = 100
constructor(name,gender,department){
  this.name = name
  this.gender = gender
  this.department = department;
}

  // Function to change level

  changeLevel(newLevel){
    this.level=newLevel
  }

  changeDept(newDept){
    this.department = newDept
  }

}


const student1 = new Student("Olamide","Male","Mass Com")
console.log(student1.level)
student1.changeLevel(300)

console.log(student1.level)
console.log(student1.department)
console.log(student1.name)
console.log(student1.gender)
student1.changeDept("Computer science")
console.log(student1.department)

// OOP has 4 major pillars
// 1. Inheritance
// 2. Polymorphism
// 3. Encapsulation
// 4. Abstraction



// Inheritance


// Example 1

class Parent{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}


class Child extends Parent{
    constructor(name, age, gender, school){
        super(name,age,gender)
        this.school = school
    }
}


// creating object of the Child class

let child1 = new Child('Boluwaji Akinola', 15, 'Male', 'Glad Tidings International School')

console.log(child1.name)
console.log(child1.age)
console.log(child1.gender)
console.log(child1.school)




// Example 2

class Shape{
    constructor(type){
        this.type = type
    }
}

class Square extends Shape{
    constructor(type, length){
        super(type)
        this.length = length
        this.area = length ** 2     // area of a square   => lxl  => l**2
    }
}

class Triangle extends Shape{
    constructor(type, base, height){
        super(type)
        this.base = base
        this.height = height
        this.area = 1/2 * base * height   // area of a triangle  => 1/2 * base * height
    }
}


// creating objects of the square and the triangle classes

let square1  = new Square('Square', 5)

console.log(square1.type)     // Square
console.log(square1.length)   // 5
console.log(square1.area)    // 25





// POLYMORPHISM
// Polymorphism ( "many forms" - derived from Greek) is a core OOP concept allowing entities like functions, objects or methods to exhibit different behaviours based on context.

// e.g. 
//       3 + 3 = 6
//      "3" + "3" = "33"

// Types 
// 1. Method Overloading/ Overriding
// 2. Operator Overloading/ Overriding   (Not supported in JavaScript)




//1.  Method Overloading

// Example 

class Animal {
    constructor(color, legs){
        this.color = color
        this.legs = legs
    }

    speak(){
        console.log('The animal makes a sound')
    }
}


class Dog extends Animal{
    constructor(color, legs, breed){
        super(color, legs)
        this.breed = breed
    }

    // overloading the speak function inherited from the Animal class
    speak(){
        console.log('The Dog is barking')
    }

}


let dog2 = new Dog('Black', 4, 'Bull Dog')
dog2.speak()

console.log(dog2.color)   // Black

dog2.color = 'Brown'

console.log(dog2.color)  // Brown



// ENCAPSULATION 
// Encapsulation is an Object-Oriented Programming principle that means bundling data and the methods that operate on that data into a single unit (class) and restricting direct access to some of the object's internal details.

// In other words, encapsulation means hiding internal data and exposing only what is necessary


class Boy {
    #age;
    constructor(name, age){
        this.name = name  // public variable
        this.#age = age  // private variable
    }
}




