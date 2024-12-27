let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let date = document.getElementById("dob");
let hobbies = document.getElementById("hobbies");


let form = document.querySelector("#registeration");

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    console.log(e);

    let gender = document.querySelector('input[name="gender"]:checked')

    console.log(fname.value);
    console.log(lname.value);
    console.log(email.value);
    console.log(pass.value);
    console.log(dob.value);
    console.log(gender.value);
    console.log(hobbies.value);


    if(fname.value === ""){
        document.getElementById("fnameerr").innerHTML = "fname is empty";
    }else if(fname.value.length < 3){
        document.getElementById("fnameerr").innerHTML = "fname is more than three word";
    
    }

    
    if(lname.value === ""){
        document.getElementById("lnameerr").innerHTML = "lname is empty";
    }else if(fname.value.length < 3){
        document.getElementById("lnameerr").innerHTML = "lname is more than three word";
    
    }

    
    if(email.value === ""){
        document.getElementById("emailerr").innerHTML = "email is empty";
    }
    
    
    if(pass.value === ""){
        document.getElementById("passerr").innerHTML = "pass is empty";
    }else if(pass.value.length < 3 && pass.value.length < 15){
        document.getElementById("fnameerr").innerHTML = "pass should be 3 and 15 character";
    }

       
    if(dob.value === ""){
        document.getElementById("doberr").innerHTML = "dob is empty";
    }

        
   if(!gender){
    document.getElementById("gendererr").innerHTML = "gender is select one";
   }


        
    if(hobbies.value === ""){
        document.getElementById("hobbieserr").innerHTML = "hobbieds is select one";
    }
})