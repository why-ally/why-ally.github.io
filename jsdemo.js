console.log("This output is from the external JS file");
console.log("name: Nicholas johnson");
console.log("school: CPCC Merancas");
console.log("grade: Rising Senior");

var name = "Nicholas";
let school = "Hopewell/CPCC Merancas Campas";
var grade = "11th";

document.getElementById("name").innerHTML = "name: <b>" + name + "</b>";
document.getElementById("grade").innerHTML = "grade: <b>" + grade + "</b>";
document.getElementById("school").innerHTML = "school: <b>" + school + "</b>";
