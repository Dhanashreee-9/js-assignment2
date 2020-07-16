console.log("Hello");
console.log("This is Var ,Let and const");
 

//variable
var name = 10;
console.log(name);
var xyz =['p1','p2','p3','p4'];
console.log(xyz);
var str = "Hey";
var a = 199;


//Let
{
    let a= 1000;
    console.log(a);
}
//As the below a is declared outside the braces it will print the value of 'a' which we have declared already.
console.log(a);

let abc=1000;
console.log(abc);

//constant
const yup= 22;
console.log(yup);

//const yup= 20;
//console.log(yup) it will show that yup is already declared
// We cannot change the value once it is declared before

console.log("Difference between var,let and const is as shown below");
 
/*var and let are both used for variable declaration in javascript but the difference between them is that var 
is function scoped and let is block scoped.
It can be said that a variable declared with var is defined throughout the program as compared to let.
*let is preferable because it reduces the scope in which an identifier is visible. It allows us to safely declare variables at the site of first use. const is preferable to let .
A constant cannot share its name with a function or a variable in the same scope.
We cannot reaasign the value of const*/