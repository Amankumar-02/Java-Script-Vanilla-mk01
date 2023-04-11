var translatebtn = document.querySelector(".translate-btn");
var txtarea = document.querySelector(".txt-area");
var outputDiv = document.querySelector("#output");
// console.log(translatebtn);
// console.log(txtarea);
// console.log(outputDiv);
var serverURL =
  "https://translation-api.amankumar511.repl.co/translate/yoda.json";
function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}
function errorHandler(error) {
  console.log("error occured", error);
  alert("Something Wrong Happen with the server!! Try after some time.")
}
function clickHandler() {
  // console.log("clicked!");
  // console.log("input", txtarea.value);
  // outputDiv.innerText = ("hello World!!" + txtarea.value)
  var inputText = txtarea.value;
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => console.log(json.contents.translated))
    .catch(errorHandler);
}
translatebtn.addEventListener("click", clickHandler);
// var userName = prompt("Give me Your Name!")
// alert("Error " + userName);
// console.log("Hello!!");
