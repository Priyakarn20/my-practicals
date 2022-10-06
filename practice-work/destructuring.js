/* destructuring is a feature in javascript that breaks apart the structured 
stuff like objects or arrays into the local variables . */
// destructuring objects with the same property name and variable name .
var vehicle = {
    type:'car',
    wheels:4,
    engine:'4 cylinder'
  }
  const {type, wheels} = vehicle;
  console.log(type, wheels);
  const engine = vehicle.engine;
  console.log(engine);

  const Raj = {
    name : "Raj",
    email : "raj@gmail.com", 
    contactNo : 524636441,
    Vaccinated : true,
  }
const {name, email , contactNo, Vaccinated} = Raj;
console.log(name, email, contactNo);

// destructuring objects with the same property name but different variable names.
var {name:x, email:y, contactNo:z, Vaccinated:a } = Raj;
console.log(x, y, z, a);

//destructuring a nested object 
const student = {
  name: "Arun",
  room: "4",
  course: "BE",
  fees: 50000,
  address: {
    city: "Bangalore",
    state: "karnataka",
    country: "India",
  }
} 
const {address:{city, state, country}} = student ;
console.log(city, state, country);

//Destructure arrays using basic ordered restructuring 
var[name1, , , name2] = ['Arun', 'kumar', 'Tools', 'QA'];
console.log(name1);
console.log(name2);// using commas , we can skip as many array indexes as we want.
 
var[a, b, c, d] = [ "apple", "orange", "orange", "mango" ];
console.log(a, b, c, d);

var[ e, ,,,,,  f]= ["cat", "rat", "mat", "that", "sat","fat", "at"];
console.log(e, f);
