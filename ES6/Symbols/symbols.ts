//symbols is always creates unique id
let s = Symbol("first Symbol");
console.log(typeof(s));
console.log(s.toString());

let s2 = Symbol('Test')
let s3 = Symbol('Test')
console.log(s2===s3)//false bcoz unique ids

let s4 = Symbol.for('Test')
let s5 = Symbol.for('Test')

console.log(s4===s5); //true

console.log(Symbol.keyFor(s4)); //give present value

let fname = Symbol("First Name");

let person = {
    [fname] : "Jhon"
}
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));

//_______________________________________________________________________________________________________
//for ..of --> iterator method

let str = "sumit"
let arr = [1,2]
let obj = {name:"Sumit"}
let num = 10;

console.log("For String : "+ typeof str[Symbol.iterator]);
console.log("For Array : "+ typeof arr[Symbol.iterator]);
//console.log("For object : "+ typeof obj[Symbol.iterator]); //undefined
//console.log("For number : "+ typeof num[Symbol.iterator]); //undefined

//------------------------Iterable and Iterators---------------------------------------------------------
let Iterable = [1,2,3,4];

function createIterator(array1: string | any[]){
    let count = 0;
    return{
        next: function(){
            return count<array1.length?
            {value: array1[count++], done: false}:
            {value: undefined, done: true};
        }
    }
}

let myIterator = createIterator(Iterable);
console.log(myIterator.next()); //false
console.log(myIterator.next()); //false
console.log(myIterator.next()); //false
console.log(myIterator.next()); //false
console.log(myIterator.next()); //true