//1.write a javascript program to print aq greeting messsage using
//  with argument no return type function when caal a function without 
// argument at that time print messaage good morning ...


// function greeting(){
//     console.log("good morning");
//  }
//  greeting();

// output : good morning

//*********************************************************************** */

//2.write a javascript program to find circle of
//  area (area = pi*r*r) using return type with argument function ...

// function area(pi,redius,circle){

//     circle = pi * (redius ** 2);
//     console.log("the area of circle is :=",circle);
// }
// console.log(area(3.14,7));

// output : the area of circle is := 153.86..

//*************************************************************** */

//3. write a javascript program to find triangle
//  area (area =(l*h)/2) using return type with argument function.. 

// function triangle(base,height,triangle){

//     triangle = 1/2 * base * height;
//     console.log("the area of triangle is :",triangle);
// }

// console.log(triangle(9,4));

// output : the area of triangle is : 18

//********************************************************************** */

//4. write a javascript program to find rectengle area=l*h using retun type with argument function 

// function rectangle(length,width,rectangle){
//     rectangle = length * width;
//     return rectangle;
// }

// console.log(rectangle(20,25));

// output : 500

//****************************************************************************** */

//5. write a javascript program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function..

// function calculate(a,b,c){
//     let result = (b * b *(4 * a * c)) / (2 * a);
//     return result;
// }

// console.log(calculate(5,4,3));

// output : 96

//********************************************************************************* */

//6. write a javascript program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function..

// let a = Number(prompt("Enter value for a"));
// let b = Number(prompt("Enter value for b"));
// function j(a, b) {
//     let ans = ((a * a) + (2 * a * b) + (b * b))
//     return ans;
// }
// console.log(j(a, b));

// input : a = 30 b = 20;
// output : 2500

//************************************************************************************** */

//7. write a javascript program to convert fahrenheit to celsius (c =(f-32)/1.8) using retun type with argument function ...

// let f = Number(prompt("Enter fahrenheait in celsius"));
// function fahrenheait(a) {
//     let c = a - 32 / 1.8;
//     return c;
// }
// console.log(fahrenheait(f));

// input : 56
// output : 38.22222222222222


//****************************************************************************************/

//8. write a javascript program to convert celsius to fahrenheit (f =(c*1.8)+32) using retun type with argument function..

// let c = Number(prompt("Enter temperature in celsius"));
// function temperature(a) {
//     let f = c * 1.8 + 32;
//     return f;
// }
// console.log(temperature(c));

// input : 40
// output : 104

//***************************************************************************************** */

//9. write a javascript program to findif a given number is odd or even using an argument with no return type function..

// var number = Number(prompt("Enter number"))
// function odd(a) {
//     if (a % 2 == 0) {
//         console.log("Given number is even");
//     }
//     else {
//         console.log("Given number is odd");
//     }
// }
// odd(number);

// input : 10 
// output : given number is even

//********************************************************************************************** */

//10. write a javascript program to swap a value without third variable using with argument no return type

// function swap(a, b) {
//     console.log("Before swapping: a =", a, " b =", b);
//     a = a + b;
//     b = a - b;
//     a = a - b;

//     console.log("After swapping: a =", a, " b =", b);
// }
// swap(20, 80);

//  input : Before swapping: a = 20  b = 80
// output : After swapping: a = 80  b = 20