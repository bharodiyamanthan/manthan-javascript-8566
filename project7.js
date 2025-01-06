// project day 7 ==>>>

// 1).

// class School {
//     constructor(name, email, number) {
//         this.name = name;
//         this.email = email;
//         this.number = number;
//     }
// }

// class Student extends School {
//     student() {
//         console.log("Student Name:", this.name);
//         console.log("Student Email:", this.email);
//         console.log("Student Number:", this.number);
//     }
// }

// class Faculty extends School {
//     faculty() {
//         console.log("Faculty Name:", this.name);
//         console.log("Faculty Email:", this.email);
//         console.log("Faculty Number:", this.number);
//     }
// }

// let obj = new Student("Manthan", "manthan@gmail.com", 8320664253);
// obj.student();

// let obj1 = new Faculty("Girish Sir", "girish@gmail.com", 7854256985);
// obj1.faculty();

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

class employee{
    constructor(msg){
        this.msg = msg;
    }
    sayhello(){
        console.log("this message is ==>",this.msg);
        
    }
}

let emp = new employee("good morning...!!!");
emp.sayhello();


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




