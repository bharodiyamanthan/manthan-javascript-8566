// function -> perfome a specific task 

// syntax 
// function function_name(){
//     statment ...
// }

// function_name();  call


// // addition 
// function add(){
//     let a = 10,b = 20;
//     console.log("addition of a and b is :",a+b);
// }
// add();


// // multiplication 
// function mul(){
//     let a = 10,b = 20;
//     console.log("addition of a and b is :",a*b);
// }
// mul();


//function result

// function result(){
//     let eng = 99 , guj = 99, math = 90;
//     console.log("addition of marks is:", eng + guj + math);

//     per = (eng + guj + math) / 3;
//     console.log("percentage is:",per);

//     if(per>90){
//         console.log(" grede -> A");
//     }else if(per>75){
//         console.log(" grede -> B");
//     }else if(per>55){
//         console.log(" grede -> C");
//     }else 
//         console.log("you are fail please try again");
// }
// result();

// //add , sub , mul , div;
// function add(){
//     let num1=10 ,num2=20;
//     choice = prompt("enter a choice");
//     switch(choice){
//         case 'add':
//             console.log("addition of :",num1 + num2);
//             break;
//         case 'sub':
//             console.log("substraction of :",num1 - num2);
//             break;
//         case 'multi':
//             console.log("multiplication of :",num1 * num2);
//             break;
//         case 'div':
//             console.log("division of :",num1 / num2);
//             break;
//     }
// }
// add();


// marks result

// function marks(){
//     let marks;

// marks=Number(prompt("enter your marks :",marks));
// if(marks >= 90){
//     console.log("gread is A");
// }
// else if(marks>=80 && marks<90){
//     console.log("grede is B");
// }
// else if(marks>=70 && marks<80){
//     console.log("grede is C");
// }
// else if(marks>=55 && marks<70){
//     console.log("you are pass");
// }
// else{
//     console.log("try again");
// }

// }
// marks();

//password 

// function password(){
//     let oldpass ,newpass ,conpass;

// oldpass = prompt('enter your old password');
// newpass = prompt('enter your new password');
// conpass = prompt('enter your conpassword');

// if(oldpass == newpass){
//     alert('password already exist');
// }else{
//     if(newpass != conpass){
//         alert('password does not match');
//     }
//     else{
//         alert('your password is succsessfully updated');
//     }
// }
// }
// password();



//**************************************************************************************************** */
// loops 


// // loop using function 
//  function num(){
//     for (let i = 10; i >= 1; i--) {
//         console.log(i);
//     }
//  }
//  num();

// // 1 to 10 usisng function 
// function number(){
//     let n;

// n= prompt("enter a number:");

// for(i=0; i<=n; i++){
//     console.log(i);
// }
// }
// number();


// //n to 1 using  function
// function no(){
//     let n;

// n = prompt("enter a number :");

// for(i=-n; i>=0; i--){
//     console.log(i);
// }
// }
// no();


// n to n using function 
// function n(){
//     let n;

// n = prompt ("enter a number;",n);

// for(i=-n; i<=n; i++){
//     console.log(i);
// }
// }
// n();


// even number

// function even(){
//     let n;

// n = prompt ("enter a number:");

// for(i=0; i<=n; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// }
// even();

// odd number 
// function odd(){
    
// let n;

// n = prompt ("enter a number:");

// for(i=0; i<=n; i++){
//     if(i%2==1){
//         console.log(i);
//     }
// }
// }
// odd();


// // number 
// function no(){
    
// let i , a = 1;
// for(i=1; i<=5; i++){
//     console.log(a * i);
//     a *= 2;
// }
// }
// no();




// 1,4,3,16,5 using for loop

// function sq(){
//     let n;

// n = prompt ("enter a number:");

// for(i=1; i<=n; i++){
//     if(i%2==0){
//         console.log(i**2);
//     }   
//     if(i%2==1) 
//     console.log(i);
// }
// }
// sq();

//**************************************************************************************** */


// // assignment program 

// function assignment(){
//     let salary;

//     salary = prompt('enter  your salary');
    
//     if(salary>=5000){
//         console.log('hra salary is : and',salary*0.08);
//         console.log('da salary is : and',salary*0.20);
//     }else if(salary>5000 && salary<10000){
//         console.log('hra salary is : and',salary*0.12);
//         console.log('da salary is : and',salary*0.30);
//     }else if(salary>10000 && salary<15000){
//         console.log('hra salary is : and',salary*0.15);
//         console.log('da salary is : and',salary*0.40);
//     }else if(salary>15000){
//         console.log('hra salary is : and',salary*0.20);
//         console.log('da salary is : and',salary*0.50);
//     }
//     else{
//         console.log('salary does not existed')
//     }
// }
// assignment();

// unit 

// function unit(){
//     let unit;

// if(unit>=0 && unit<=100){
//     console.log('');
// }else if(unit>100 && unit<300){
//     console.log('60p per unit');
// }else if(unit>300){
//     console.log('80p per unit');
// }
// }
// unit();

// eligible to voting 
// function vote(){
// let age;

// age = prompt('enter your age',age);

// if(age>=18){
//     alert('person eligible for vote..!!');
// }
// else{
//     alert('person can not eligible for vote');
// }
// }
// vote();

// find intrest of income

// function income(){
//     let income;

// income = Number(prompt('enter income'));

// if(income<=2500){
//     console.log('Tax Free');
// }else if(income>2500 && income<5000){
//     console.log('sleb2 is:',(income-2500)*0.10);
// }else if(income>5000 && income<10000){
//     console.log('sleb3 is:',((income-5000)*0.20 + 250));
// }else if(income>10000){
//     console.log('sleb4 is',income*0.30);
// }
// else{
//     console.log('income does not matched')
// }

// }
// income();

// marks of grade 
// function marks(){
//     let marks;

// marks = prompt('enter your marks');

// if(marks>=75){
//     console.log('grade a');
// }else if(marks>60 && marks<75){
//     console.log('grade b');
// }else if(marks>45 && marks<60){
//     console.log('grade c');
// }else if(marks>35 && marks<45){
//     console.log('grade d');
// }else if(marks<35){
//     console.log('failed')
// }
// }
// marks();