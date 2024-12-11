
// recoursion = > function called itself

// function fact(n){
//     // console.log("recorsion :",n);
//     if(n==1){
//         return 1;
//     }else{
//         return n * fact(n-1);    
//     }
//     // console.log("fuction finished...",n);
// }
// console.log(fact(6));

//********************************************************* */

// fibonaci series ....

// function fibo(n){
    // n = prompt("enter a number:");
    // let a = 1 , b= 1;   
    // console.log(a);                                                                                                                                                                                                                             
    // console.log(b);

    // if(n<5){
    //     fibo(++n);
    // }else{
    //     let c = a + b;
       
    // }
    // console.log(c);
    // a=b;
    // b=c;
    function fibonacci(n) {
        if (n < 6) {
          fibonacci(++n);
        }else{
          fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
   fibonacci(1);

//************************************************** */

// function sayhello(n){
//     console.log("inside value",n);
//     if(n<5){
//         sayhello(++n);
//     }else{
//         // console.log("finishes",n);
//     }
//     console.log("finished :",n);
// }
// sayhello(1);


