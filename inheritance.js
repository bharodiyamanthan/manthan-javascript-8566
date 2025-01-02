// inheritance => class accsess another class properties 

// types of inheritance :=

// 1. single
// 2. multilevel 
// 3. multiple
// 4. herirarchical

//**********************************single level*********************************************** */

// class parent{
//     constructor(name){
//         this.name = name;
//     }

//     sayperent(){
//         console.log("parent class called......",this.name);
//     }
// }

// class child extends parent{
//     constructor(childname,perentname){
//         super(perentname)
//         this.childname = childname;
//     }
//     saychild(){
//         console.log("child class called.......",this.childname);
//     }
// }

// let manthan = new child("manthan","kishorbhai");
// manthan.saychild();
// manthan.sayperent();

//**********************************single level*********************************************** */

// 2. multiple

// class grandperent{
//     constructor(grandperent){
//         this.grandperent = grandperent;
//     }
//     saygrandperent(){
//         console.log("grandperent class called.....",this.grandperent);
//     }
// }

// class perent extends grandperent{
//     constructor(perentname,grandperent){
//         super(grandperent)
//         this.perentname = perentname;
//     }
//     sayperent(){
//         console.log("perent class called.....",this.perentname);
//     }
// }

// class child extends perent{
//     constructor(grandperent,perentname,childname){
//         super(perentname,grandperent)
//         this.childname = childname;
//     }
//     saychild(){
//         console.log("child class called.....",this.childname);
//     }
// }

// let manthan = new child("mohanbhai","kishorbhai","manthan");
// manthan.saychild();
// manthan.sayperent();
// manthan.saygrandperent();



//**********************************horachical level*********************************************** */

// class perent{
//     constructor(perentname){
//         this.perentname = perentname;
//     }
//     sayperent(){
//         console.log("perent class called......",this.perentname);
//     }
// }

// class child1 extends perent{
//     constructor(child1name,perentname){
//         super(perentname)
//         this.child1name = child1name;
//     }
//     saychild1(){
//         console.log("child1 class called......",this.child1name);
//     }
// }

// class child2 extends perent{
//     constructor(child1name,child2name,perentname){
//         super(child1name,perentname)
//         this.child2name = child2name;
//     }
//     saychild2(){
//         console.log("child2 class called......",this.child2name);
//     }
// }

// let manthan = new child2("kishorbhai","smits");
// manthan.saychild2();
// // manthan.sayperent();


// let anuj = new child1("manthan","kishorbhai");
// anuj.saychild1();
// anuj.sayperent();