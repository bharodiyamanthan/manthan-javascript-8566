// polymorphism => many Form

// class test {
//     sayhello(){
//         console.log("test class called...");
//     }
// }

// class result extends test{
//     sayhello(){
//         console.log("result class called....");
//     }
// }

// let obj = new result();
// let obj1 = new test();
// obj.sayhello();
// obj1.sayhello();


class perent{
   constructor(name){
    this.name = name;
   }
}

class child extends perent{
    constructor(data){
        super(data)
        this.data = data;
    }
    display(){
        console.log("perent class called =>",this.data);
    }
}


let obj = new child("rohit sharma");
obj.display();