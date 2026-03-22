const maxValueElement = document.getElementById("maxValue");

let numbers = [3, 1, 2, 5, 8, 7];

let max = 0;

numbers.sort(function(a, b){return b - a});
max = numbers[0];
secondMax = numbers[1];

console.log(max);
console.log(secondMax);
document.write("The maximum value is: " + max);
document.write("<br>The second maximum value is: " + secondMax);