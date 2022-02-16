function checkName(name){                      //scope of the function
    if(name==="Sumit"){
        alert("Write your Sumit");
    }
    else{
        alert("Wrong input");
    }
    var name = "Sumit"; //anywere you can write
}
checkName("Sumit");

//_________________let keyward____________________
//let keyward is not hoisted!
/*
function checkName(name){
    let name = Sumit; // need to declare first
    if(name==="Sumit"){
        alert(name);
    }
    else{
        alert("wrong input");
    }
}
checkName("Sumit");

var a = 1;
var b = 2;
if(a==1){
    var a = 10;
    let b = 20;
    alert(a); //10
    alert(b); //20
}
alert(a); //10
alert(b); //2
*/
//-----------let in for loop--------------
//for looping should use let
for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}

//______________Const_____________________
//can not resign value
// initialize at point of declaration
const car ={
    name: "BMW"
}
console.log(car.name);
car.name = "Honda";
console.log(car.name); 
/*
    const pi = 3.14;
    const Max_Size = 100;

    let a=1,b=2;
    a = a-b;
    b= b-a;
*/