
function Person(name, age){
    // let this = object.cereate(null); 
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age} years old`);
    // return this;
}

var sakib = new Person('Sakib', 35);