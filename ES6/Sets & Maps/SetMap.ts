//-----------------------Problem with set and map in javascript------------------------------------
let mySet = Object.create(null);
mySet.id = true;
if(mySet.id){
    console.log("id exsit!!");
}
//---------------------------------------------------------------------------------
let myMap = Object.create(null);
myMap.name = "Jhon";
let val = myMap.name;
console.log(val);
//or
myMap[1000] = "Weak"
console.log(myMap["1000"]);
//-------------------------------
// let obj1 = {};
// let obj2 = {};

// myMap[obj1] = "Babayaga"
// console.log(myMap[obj1]); //or obj2 it will return Babayaga, it is considering two diff obj as a one
//___________________________________________________________________________________________________________________
//------------------Using TypeScript----------------

let mySet1 = new Set();
let ob1= {};
let ob2= {};

mySet1.add("Jhon Weak");
mySet1.add("Jhon weak The Babayaga");
mySet1.add(7);
mySet1.add(7); //duplicates values ignored
console.log(mySet1);

let chainSet = new Set().add("The").add("Rock").add("is").add("cooking");
console.log(chainSet)

let arrSet = new Set([1,2,3,4,4,5]);
console.log("size of array"+arrSet.size);
console.log(arrSet.has(4)); //to check array size is true / false
//console.log(arrSet.delete(2)); //to delete
//___________________________________________________________________
//--------------------Weak Set---------------------------------------
let oneSet = new WeakSet();
let key = {};
oneSet.add(key);
//alert(oneSet.has(key)); //true

//----------------------for each with set----------------------------------
// let arrSet1 = new Set([1,2,3])
// arrSet1.forEach(function2);
// function function2(value: string,key: string,callingSet: any){
//     console.log(key+" "+value);
//     console.log(arrSet1 ===callingSet);
// } 

//_____________________________________________________________________________________________________________________________________
//Map
//key and value
let oneMap = new Map(); // to create map

oneMap.set("Jhon", "weak"); //to set
oneMap.set(1,2);

//console.log(oneMap.get("Jhon")); //to get

let one = {};
let two = {};
let three = {}
oneMap.set(one,10);
oneMap.set(two,20);
oneMap.set(three,30)

console.log(oneMap.get(one));
console.log(oneMap.get(two));
console.log(oneMap.size); 
console.log(oneMap.has("Jhon")); //true
console.log(oneMap.delete(three)); //delete three

//--------------------------Iterating over map--------------------------------------------------------
let arrMap = new Map([
    ["fname","jhon"],
    ["lname","weak"]
])
//geting values
for(let value of arrMap.values()){
    console.log(value);
}
//getting keys
for(let key of arrMap.keys()){
    console.log(key);
}
//if you want both
for(let ent of arrMap.entries()){
    console.log(`${ent[0]} - > ${ent[1]}`)
}
//or also like this
for(let [key,value] of arrMap.entries()){
    console.log(`${key} : ${value}`)
}
//---------------------for each with map------------------------------
let forMap = new Map([["f1","Cristano"],['f2','Ronaldo']]);
forMap.forEach(function1);
function function1(value: string,key: string,callingMap: Map<string, string>){
    console.log(key+" "+value);
    console.log(forMap === callingMap);
}


