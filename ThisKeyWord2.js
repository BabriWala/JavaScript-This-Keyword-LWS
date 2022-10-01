var printPlayerNameFunction = function(object){
    object.printPlayerName = function(){
        console.log(this.name);
    }
}

var sakib ={
    name: 'Sakib',
    age: 35
}

var tamim = {
    name: 'Tamim',
    age: 25
}

printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);

sakib.printPlayerName()
tamim.printPlayerName()