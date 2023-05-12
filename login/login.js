

const login=document.querySelector(".btn");
const form=document.querySelector("#form");


form.addEventListener("submit",function(e){
    const username=document.querySelector("#username").value;
    const password=document.querySelector("#password").value;
    console.log(username);
    const pUsername="abcd";
    const pPassword="abcd";
    if(username==" "||username==null){
        alert("enter the username.");
    }
    else if(password==""||password==null){
        alert("enter the password");
        e.preventDefault();
    }
    else if(username==pUsername && password==pPassword){
        alert("Successfull login");
    }
    else{
        alert("Invalid password.");
        e.preventDefault();
    }
})