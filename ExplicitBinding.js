let printName = function(v1, v2, v3){
    console.log(`${this.name} is ${v1} and ${v2} and ${v3}`);
}

var sakib = {
    name: 'Sakib',
    age: 35,
    
};

var v1 = 'Handsome';
var v2 = 'All Rounders';
var v3 = 'Energetic';

// const v = [v1, v2, v3];

// printName.call(sakib, v1, v2, v3)
// printName.apply(sakib, v);
const newFunc = printName.bind(sakib, v1, v2, v3);
newFunc();
