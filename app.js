var translatebtn = document.querySelector(".translate-btn");
var txtarea = document.querySelector(".txt-area")
var outputDiv = document.querySelector("#output")
// console.log(translatebtn);
// console.log(txtarea);

// console.log(outputDiv);

function clickHandler(){

    // console.log("clicked!");
    // console.log("input", txtarea.value);

    outputDiv.innerText = ("hello World!!" + txtarea.value)
}

translatebtn.addEventListener("click", clickHandler)
// var userName = prompt("Give me Your Name!")
// alert("Error " + userName);

// console.log("Hello!!");
