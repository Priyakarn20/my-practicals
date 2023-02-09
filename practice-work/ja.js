let x = 10;
x += 10;
console.log(x+10);
let t1="john";
let t2="Doe";
console.log(t1 + " " + t2);
let t3="I am ";
 t3 += " beautiful";
 console.log(t3);
console.log(typeof x);
console.log(10*5);
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
  }
  console.log(person.firstName);
 console.log(person["age"]);
 console.log(person.fullName());
 
 