function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var min = convertHoursToMinutes(3);
console.log('min:', min);

function getGreeting(name) {
  return "Hello " + name + "!";
}

var greeting = getGreeting('dude');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}

var addTimes5 = addAndMultiplyBy5(10, 5);
console.log('add then multiply by 5:', addTimes5);

function multiplyAndDivideBy5(num1, num2) {
  var result = (num1 * num2) / 5;
  return result;
}

var multiplyDivide5 = multiplyAndDivideBy5(35, 10);
console.log('multiplay then divide by 5:', multiplyDivide5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log("difference:", difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

var fullName = getFullName('Alexei Rhei', 'Dayrit')
console.log('full name:', fullName);

function cube(number) {
  return Math.pow(number, 3);
}

var cube = cube(5);
console.log('cube:', cube);
