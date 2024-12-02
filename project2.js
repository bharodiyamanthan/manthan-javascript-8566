// 1.//1 Enter Electricity Unit and Calculate amount to pay
// let unit = Number(prompt("Enter Electricity Consumption in Units:"));
// let bill = 0;
//         if (unit >= 0 && unit <= 50){
//             bill = unit * 1;
//         }else{
//         if (unit <= 100) {
//             bill = (50 * 1) + ((unit - 50) * 2);
//         }
//         else if (unit <= 200) {
//             bill = (50 * 1) + (100 * 2) + ((unit - 150) * 3);
//         }
//         else if (unit >= 250) {
//             bill = (50 * 1) + (100 * 2) + (100 * 3) + ((unit - 250) * 3);
//         }
//         else {
//             console.log("Invalid input. Please enter a positive number for units.");
//         }
//     }
//         if (unit > 150){
//         bill += (bill * 0.20); 
// }
// console.log("Total Electricity Bill : ₹" + bill);

// **************************************************************************


// // 2. 1 to 4 = "winter"  5 to 8 = "summer"  9 to 12 = "monsoon"

// let season,choice;

// // num1=prompt("enter season:",season);
// choice=prompt("enter choice:",choice);

// switch(choice){
//         case "1":
//         case "2":
//         case "3":
//         case "4":
//             console.log("winter");
//             break;
//         case "5":
//         case "6":
//         case "7":
//         case "8":
//             console.log("summer");
//             break;
//         case "9":
//         case "10":
//         case "11":
//         case "12":
//             console.log("mosoon");
//             break;
// }

// ************************************************************************************

//3..// write a javascript program to find rate based on year and calculate total intrest using nested if (i =prn/100) principle amount (p)
//  intrest rate ,no of year (n)
// (if 3<n<=5 then r is 3 | if 5<n<=8 then r is 5 | if 8<n<=12 then r is 12 |else r is 15) 

        // let amount, year;

        // amount = prompt("enter amount",amount);
        // year = Number(prompt("enter year",years));
        // let rate;
        // if (years > 3 && year <= 5) {
        //     rate = 3;
        // } else if (years > 5 && year <= 8) {
        //     rate = 5;
        // } else if (years > 8 && year <= 12) {
        //     rate = 12;
        // } else {
        //     rate = 15;
        // }

        // // Interest = (Principal * Rate * Years) / 100
        // let interest = (amount * rate * years) / 100;

    
        // console.log("Principal: " + amount);
        // console.log("Rate: " + rate + "%");
        // console.log("Year: " + year);
        // console.log("Total Interest: " + interest);

//************************************************************************************** */

// 4. write a javascript program to check voting eligiblity...

// let age;

// age = prompt('enter your age');

// if(age>=18){
//     alert('person eligible for vote..!!');
// }
// else{
//     alert('person can not eligible for vote');
// }

//******************************************************************************************* */


// // 5. write a javascript program to classify age group.

// let age;

// age = prompt("enter age :",age);

// if(age>40&& age<60){
//     console.log("senior");
// }
// else if(age>29&& age<40){
//     console.log("adult");
// }
// else if(age>17 && age<29){
//     console.log("teen");
// }
// else if(age>0 && age<17){
//     console.log("child");
// }