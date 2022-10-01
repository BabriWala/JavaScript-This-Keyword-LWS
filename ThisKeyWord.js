/* Akjon wife tar husband k bolse j ei bariti k tumi rong koro kintu eikhane ei bolte kinutu se pura address bole nai karon eita common sense  */

// implicit binding 
// explicit binding
// new binding
// window binding

// function printPlayerName(name){
//     console.log(name)
// }

// printPlayerName('Sakib');
var sakib = {
    name: 'Sakib',
    age: 35,
    printPlayerName: function(){
        console.log(this.name)
    }
    /* printPlayerName: ()=>{
        console.log(this.name)
    } */
}
// Dot Notation

// console.log(sakib);
// console.log(sakib.printPlayerName);
// console.log(sakib.printPlayerName('sakib'));
// console.log(sakib.printPlayerName(sakib.name));

// Implicit Binding Two Rules
// 1. Which nUmber line the function is called
// 2. When the function is called before that if a dot notation was there then immediate left side of that . is that this

//  It will work for normal function not work for arrow function
//  eita sara eita hobe window 
sakib.printPlayerName();