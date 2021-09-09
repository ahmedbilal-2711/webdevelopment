// console.log("Hello");
// let age = prompt("What is your age?",18);
// if(age<18){
//     alert("You are not allowed to fill the form")
// }
// else{
//     confirm("Are you sure for the Dubai trip")
// }

// let footCenter = document.getElementById('center');
// footCenter.innerHTML = "No copy rights";
// console.log(footCenter);

let dt;
setInterval(() => {
    dt = new Date();
    let hr = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();
    document.getElementById('time').innerHTML = hr+":"+min+":"+sec;
}, 1000);


let test=(a,b) => console.log("The sum is: "+(a+b));

console.log("Hello");