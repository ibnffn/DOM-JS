// DOM - GET ELEMENT BY ID
const element = document.getElementById("intro");
console.log(element);
document.getElementById("demo").innerHTML =
  "the text from the intro paragrapgh 15" + element.innerHTML;

// result - inspect - check id demo on html page
{
  /* <p id="intro">Finding html elements by id </p>; */
}

// DOM - GET ELEMENT BY CLASSNAME
const elements = document.getElementsByClassName("intro");
document.getElementById("demos").innerHTML =
  'the first paragraph (index 0) with class="intro" is: ' +
  elements[0].innerHTML;
// result - inspect - check id demos and classname on html page
// <p id="intro">Finding html elements by id </p>; */

// jika =
console.log(elements);
// result
// HTMLCollection(2) [p.intro, p.intro]
// 0:p.intro
// 1: p.intro
// length: 2

// DOM - GET ELEMENT BY TAGNAME
const elementn = document.getElementsByTagName("label");
document.getElementById("demon").innerHTML =
  "the text in first paragraph (index 0 ) is:" + elementn[0].innerText;
// result - Hello World
// Hello World! the text in first paragraph (index 0 ) is:Hello World!

// DOM - QUERYSELECTORALL
const x = document.querySelectorAll("h2.intros");
document.getElementById("demot").innerHTML =
  'the frist paragraph(index 0) with class="intro" is: ' + x[0].innerHTML;
//   result
// Hello World!
// the first paragraph(index 0) with class="intro" is: Hello World!
