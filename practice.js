console.log(data);

let title = document.querySelector("h1");


let randInt = Math.floor(Math.random() * data.length);



title.innerHTML = data[randInt].name;


let formula = document.getElementById("formula");
let charge = document.getElementById("charge");
formula.innerHTML = data[randInt].name + "'s formula is " + data[randInt].formula + ".";
charge.innerHTML = "The charge is " + data[randInt].charge + "";

let button2 = document.getElementById("button2");

function reload(){
    window.location.reload();

}

button2.onclick = reload;