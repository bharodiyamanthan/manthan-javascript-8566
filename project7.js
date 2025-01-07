// project day 7 ==>>>

// 1).

// class school{
//     student(name,email,number){
//         console.log("student name is ==>",name);
//         console.log("student email is ==>",email);
//         console.log("student number is ==>",number);
        
//     }
//     faculty(name,email,number){
//         console.log("faculty name is ==>",name);
//         console.log("faculty email is ==>",email);
//         console.log("faculty number is ==>",number);
//     }
// }

// let obj = new school();
// obj.student("Manthan", "manthan@gmail.com", 8320664253);

// let obj1 = new school();
// obj1.faculty("Girish'Sir", "girish@gmail.com", 7854256985);

///////////////////////////////////////////////////////////////////

// 2).

// class person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class employee extends person {
//     constructor(name, age) {
//         super(name, age);
//     }
    
//     sayemp() {
//         console.log("employee name ==>", this.name);
//         console.log("employee age ==>", this.age);
//     }
// }

// let data = new employee("manthan", 18);
// data.sayemp();

///////////////////////////////////////////////////////////////////////

// 3).

// class employee{
//     constructor(msg){
//         this.msg = msg;
//     }
//     sayhello(){
//         console.log("this message is ==>",this.msg);
        
//     }
// }

// let emp = new employee("good morning...!!!");
// emp.sayhello();


/////////////////////////////////////////////////////////////////////////////

// 4).

// class Shape {
//         constructor(radius,width,height) {
//             this.radius = radius;
//             this.width = width;
//             this.height = height;
//         }  
//         circleArea() {
//             return 3.14 * this.radius * this.radius;
//         }
    
    
//         rectangleArea() {
//             return this.width * this.height;
//         }
//     }

// let obj = new Shape(4);
// console.log(obj.circleArea());

// let obj2 = new Shape(4,5,6);
// console.log(obj2.rectangleArea());




