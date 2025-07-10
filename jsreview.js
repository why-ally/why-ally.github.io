var course = "Technology";
let myName = "Nicholas";

console.log(`This page was created in the STEM PREP ${course} by ${myName}`);

alert(`This page was created in the STEM PREP ${course} by ${myName}`);

function output()
{
  let name = document.getElementById("name").value;
   var school = document.getElementById("school").value;
  let grade = document.getElementById("grade").value;
  

let output = "Name: <b>" + name + "</b><br>";
output += "grade: <b>" + grade + "<b><br>";
  output += "school: <b>" + school + "</b><br>";

  document.getElementById("output").innerHTML = output;
}
