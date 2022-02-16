"use strict";
//-------------------Class Body and Methods-------------------------------
/*
class person{
    constructor(name){ //called during object creations
        this.name = name;
        console.log(this.name+"constrctor");
    }
    //
    static staticMethod(){ //called directly help of the class
        console.log("this one is static method");
    }

    great(){ //prototype method called with each object
        console.log("Hello"+this.name);
    }
}
let p = new person("Jhon");
person.staticMethod();
p.great();
*/
//--------------------Class Inheritance----------------------------------
class person1 {
    constructor(name) {
        console.log(name + "This is parent constructor");
    }
    getId() {
        console.log("This is parent method");
    }
}
class emp extends person1 {
    constructor(name) {
        super(name);
        console.log(name + "This is child constructor");
    }
}
let e = new emp("kingsdfsd");
e.getId();
//--------------------------------------------------------------
