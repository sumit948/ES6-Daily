let person = {
    fname: "Jhon",
    lname: "weak"
}

person[Symbol.iterator] = function(){
    let propertes = Object.keys(person)
    let count = 0;
    let isdone = false;
    let nextOne  = () =>{
        if(count>=propertes.length){
            isdone = true;
        }
        return {done:isdone, value:this[propertes[count++]]}
    }
    return nextOne;
}

for(let p of person){
    console.log(p);
}