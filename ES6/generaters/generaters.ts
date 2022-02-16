//_________________________________________________________________________
//generaters is same like function
//capable of pausing and resuming execution
//syntax before function name *

function *myGenerater(){
    yield 1;
    console.log("After First yield");
    yield 2;
}
let mygen = myGenerater();

console.log(mygen.next()); //{value:1, done:false}// it will stop when reach yield 1 statement
console.log(mygen.next());//return values 
console.log(mygen.next());//return undefined becoz no more yield statements 3 and true;

//_---------------------------object generating___________________________________________

// let person = {
//     fname: "Jhon",
//     lname: "weak"
// }
// person[Symbol.iterator] *function(){
//     let properties = Object.keys(person);
//     for(let t of properties){
//         yield this[t];
//     }
// };
// for(let p in person){
//     console.log(p);
// }