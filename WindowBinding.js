// 'use strict';
var PrintName = function(){
    // console.log(this); //window
    // console.log(window === this);
    console.log(this.name);
}

// var name = 'Sakib';

var sakib = {
    name: 'Sakib'
};

PrintName();

