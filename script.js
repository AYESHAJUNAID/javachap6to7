var a = 10;
console.log(a);
a = ++a;
console.log(a);
a++;
console.log(a);
var a = 12;
a = --a;
var a = 11;
console.log(a);
a--;
var a = 10;
console.log(a);
document.write("the result of a is 10");
var username = prompt("enter your name");
alert("hello" + username + "welcome to the server");

document.write("total cost to buy 5 tickets to movies is 3000PKR <br>");

// 5th point

var table = +prompt("enter any number");
if (table == "") {
  document.write("<h1>Table 0f 5</h1> <br>");
  var multiplication = 5 * 1;
  console.log(multiplication);
  document.write("5 x 1 = ", multiplication, "<br>");
  var multiplication = 5 * 2;
  console.log(multiplication);
  document.write("5 x 2 = ", multiplication, "<br>");
  var multiplication = 5 * 3;
  console.log(multiplication);
  document.write("5 x 3 = ", multiplication, "<br>");
  var multiplication = 5 * 4;
  console.log(multiplication);
  document.write("5 x 4 = ", multiplication, "<br>");
  var multiplication = 5 * 5;
  console.log(multiplication);
  document.write("5 x 5 = ", multiplication, "<br>");
  var multiplication = 5 * 6;
  console.log(multiplication);
  document.write("5 x 6 = ", multiplication, "<br>");
  var multiplication = 5 * 7;
  console.log(multiplication);
  document.write("5 x 7 = ", multiplication, "<br>");
  var multiplication = 5 * 8;
  console.log(multiplication, ",br>");
  document.write("5 x 8 = ", multiplication, "<br>");
  var multiplication = 5 * 9;
  console.log(multiplication);
  document.write("5 x 9 = ", multiplication, "<br>");
  var multiplication = 5 * 10;
  console.log(multiplication);
  document.write("5 x 10 = ", multiplication, "<br>");
} else {
  document.write("<h2>Table 0f " + table + "</h2>");

  var tableAns = table * 1;
  console.log(table + " x 1 = " + tableAns);
  document.write(table + " x 1 = " + tableAns + "<br>");

  var tableAns = table * 2;
  console.log(table + " x 2 = " + tableAns);
  document.write(table + " x 2 = " + tableAns + "<br>");

  var tableAns = table * 3;
  console.log(table + " x 3 = " + tableAns);
  document.write(table + " x 3 = " + tableAns + "<br>");

  var tableAns = table * 4;
  console.log(table + " x 4 = " + tableAns);
  document.write(table + " x 4 = " + tableAns + "<br>");

  var tableAns = table * 5;
  console.log(table + " x 5 = " + tableAns);
  document.write(table + " x 5 = " + tableAns + "<br>");

  var tableAns = table * 6;
  console.log(table + " x 6 = " + tableAns);
  document.write(table + " x 6 = " + tableAns + "<br>");

  var tableAns = table * 7;
  console.log(table + " x 7 = " + tableAns);
  document.write(table + " x 7 = " + tableAns + "<br>");

  var tableAns = table * 8;
  console.log(table + " x 8 = " + tableAns);
  document.write(table + " x 8 = " + tableAns + "<br>");

  var tableAns = table * 9;
  console.log(table + " x 9 = " + tableAns);
  document.write(table + " x 9 = " + tableAns + "<br>");

  var tableAns = table * 10;
  console.log(table + " x 10 = " + tableAns);
  document.write(table + " x 10 = " + tableAns + "<br>");
}
// 6th point
var subject1 = prompt("enter your subject name");
console.log(subject1);
var subject1Marks = +prompt(
  "How much do you obtained marks in " + subject1 + " out of 100"
);
console.log(subject1Marks);

var subject2 = prompt("enter your subject name");
console.log(subject2);
var subject2Marks = +prompt(
  "How much do you obtained marks in " + subject2 + " out of 100"
);
console.log(subject2Marks);

var subject3 = prompt("enter your subject name");
console.log(subject3);
var subject3Marks = +prompt(
  "How much do you obtained marks in " + subject3 + " out of 100"
);
console.log(subject3Marks);

var totalMarks = subject1Marks + subject2Marks + subject3Marks;
console.log("You are obtained " + totalMarks + " out of 300");
var percentage = (totalMarks * 100) / 300;
console.log(percentage + "%");

document.write("<h2> Subject Total marks Obtained marks Percentage</h2> <br>");
document.write(
  subject1 +
    "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 100 \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 \xa0 \xa0 \xa0" +
    subject1Marks +
    "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0 \xa0" +
    subject1Marks +
    "% <br>"
);
document.write(
  subject2 +
    "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 100 \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 \xa0 \xa0 \xa0" +
    subject2Marks +
    "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0 \xa0" +
    subject2Marks +
    "% <br>"
);
document.write(
  subject3 +
    "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 100 \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 \xa0 \xa0 \xa0" +
    subject3Marks +
    "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0 \xa0" +
    subject3Marks +
    "% <br>"
);
document.write(
  " \xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  \xa0\xa0300 \xa0\xa0\xa0\xa0\xa0  \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0\xa0\xa0\xa0\xa0 \xa0\xa0" +
    totalMarks +
    "\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0  \xa0\xa0 \xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0 \xa0  " +
    percentage +
    "%"
);

// 7th point

var city = prompt("enter your city");
if (city === "karachi") {
  alert("welcome to the city of lights");
} else {
  alert("welcome ! to the city");
}
var gender = prompt("male or female  ");

if (gender === "male") {
  alert("good morning sir ");
} else {
  alert(" good morning ma'am ");
}
var color = prompt(
  " enter color of road traffic signal ",
  "red , yellow , green"
);
if (color == "red") {
  alert("Must Stop");
} else if (color == "yellow") {
  alert("Ready to move");
} else {
  alert("move now");
}
var current = prompt("enter your remaining fuel in your car");
if (current <= 0.25) {
  alert("please ! refill the fuel in your car");
} else {
  alert("you have enough fuel");
}
