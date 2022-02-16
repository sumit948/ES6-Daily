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
        console.log(name + "This is parent constructor");
    }
}
let e = new emp("king");
e.getId();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEVBQTBFO0FBQzFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFFRix5RUFBeUU7QUFDekUsTUFBTSxPQUFPO0lBQ1QsWUFBWSxJQUFZO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELEtBQUs7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNKO0FBQ0QsTUFBTSxHQUFJLFNBQVEsT0FBTztJQUNyQixZQUFZLElBQVk7UUFFcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0o7QUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMifQ==