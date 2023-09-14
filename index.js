const form1 = document.querySelector(".form1");
form1.addEventListener("submit",function (event) {
event.preventDefault();
const inputForm= document.querySelector(".form1");
console.log(inputForm.value);

const listWrapper= document.querySelector(".task-list-wrapper");

const inputLi = document.createElement("li");
inputLi.innerHTML=inputForm.value;

listWrapper.append(inputLi);
});