var Person = function(name,age){
    return{
        name: name,
        age: age,
        printName: function(){
            console.log(this.name)
            // console.log(this) = full object
        },
        father: {
            name: 'Mr. X',
            printName: function(){
                console.log(this.name);
            }
        }
    }
};

var sakib = Person('Sakib', 50);
sakib.printName();
sakib.father.printName();