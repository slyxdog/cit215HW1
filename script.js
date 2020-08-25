var boxEle = document.body.querySelector(".box");

var prompter = prompt("Who are you?");

boxEle.innerHTML= "Name:" +prompter;    // "Name:" is an example of Concadination; requiring a +<Element> to add it to the interactivity.