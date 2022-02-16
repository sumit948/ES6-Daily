"use strict";
//-----------This Keyword-----------------//
var employee = {
    id: 4,
    name: function () {
        setTimeout(() => alert("Sumit your id is " + this.id), 1000);
    }
};
employee.name();
//------------Default function paramerter--------------------------
let getvalue = function (value = 10, bonus = 5) {
    console.log(value + bonus);
    console.log(arguments.length); //length of passing arguments
};
getvalue();
getvalue(20);
getvalue(20, 5);
getvalue(undefined, 30);
//------------------Rest Parameter---------------------------------
//rest parameter is used to represent various number of parameters
//work with function declaration
let displayColor = function (message, ...colors) {
    for (let i in colors) {
        console.log(colors[i]);
    }
};
var message = "List of colors";
displayColor(message, 'red');
displayColor(message, 'red', 'Orange');
displayColor(message, 'Red', 'White', 'Orange');
//---------------------spread operator------------------------------------
//work on function call
let colorArray = ['black', 'purpal', 'chocklate', 'white'];
displayColor(message, ...colorArray);
//---------------------Object literals----------------------------
let firstName = "Jhon";
let lastName = "Weak";
let person = {
    firstName,
    lastName
};
function createFunction(firstName, lastName, age) {
    let fullName = firstName + lastName;
    return {
        firstName,
        lastName,
        fullName,
        isSenior: function () {
            return age > 30;
        }
    };
}
let p = createFunction('Jhon', 'Weakk', 32);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());
//--------------------Destrucuring array--------------------------------
let employee2 = ['Jhon', 'weak', 'male'];
let [fname, lname, gender] = employee2; //also can assign defalt value
console.log(fname);
console.log(lname);
console.log(gender);
//---------------------Destructuring Objects---------------------------
let employee3 = {
    fname: "James",
    lname: "Bond",
    gender: 'male'
};
let { fname: f, lname: l, gender: g } = employee3;
console.log(f, l, g);
//-----------------------String Template--------------------------------
let usename = "Rock"; //old we use 'a' + 'b' 
let check = `welcome 'singal' "Double" ${usename} to ES15 
                    this is statement 1
                           this is statement 2
`;
console.log(check);
//----------------------For of--------------------------------------
let array1 = ['One', 'Two', 'Three', 'Four', 'Five'];
for (let i in array1) {
    console.log(array1[i]);
}
//using for of
for (let a1 of array1) {
    console.log(a1); //same output
}
