let inp = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let para = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");
let para4 = document.getElementById("para4");
let btn = document.getElementById("bill-btn");

let user = document.createElement("p");
let user2 = document.createElement("p");
let user3 = document.createElement("p");
let user4 = document.createElement("p");
user.innerHTML = "";
user2.innerHTML = "";
user3.innerHTML = "";
user4.innerHTML = "";
const myBill = () => {
  

if(inp.value === "" || inp2.value === "" || inp3.value === ""){
    alert("Please Fill all the Field")
}else{
    user.innerHTML = inp.value;
para.appendChild(user);

user2.innerHTML = inp2.value;
para2.appendChild(user2);

user3.innerHTML = inp3.value;
para3.appendChild(user3);
user4.innerHTML = inp2.value*inp3.value;
para4.appendChild(user4);
inp.value = "";
inp2.value = "";
inp3.value = "";
}

   
}
btn.addEventListener("click",myBill);