let person = {
  firstName: "Alexei Rhei",
  lastName: "Dayrit",
  hobby: "video games",
};

console.log(person);

const fullName = person.firstName + " " + person.lastName;
console.log("The person's name is:", fullName);

person.job = "web developer";
console.log("Aspiring job:", person.job)

person.previousJob = "ABA therapist";
console.log("Previous job:", person.previousJob);

console.log("The complete person object:", person)
