"use strict";
//_________________________________________________________________________
//generaters is same like function
//capable of pausing and resuming execution
//syntax before function name *
function* myGenerater() {
    yield 1;
    console.log("After First yield");
    yield 2;
}
let mygen = myGenerater();
console.log(mygen.next()); //{value:1, done:false}// it will stop when reach yield 1 statement
console.log(mygen.next()); //return values and true
console.log(mygen.next()); //return undefined becoz no more yield statements 3;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2dlbmVyYXRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJFQUEyRTtBQUMzRSxrQ0FBa0M7QUFDbEMsMkNBQTJDO0FBQzNDLCtCQUErQjtBQUUvQixRQUFTLENBQUMsQ0FBQSxXQUFXO0lBQ2pCLE1BQU0sQ0FBQyxDQUFDO0lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxDQUFDO0FBQ1osQ0FBQztBQUNELElBQUksS0FBSyxHQUFHLFdBQVcsRUFBRSxDQUFDO0FBRTFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxtRUFBbUU7QUFDOUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBLHdCQUF3QjtBQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUEsb0RBQW9EIn0=