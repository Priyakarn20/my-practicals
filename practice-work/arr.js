const alpha = ["c","a","h","g"];
console.log(alpha.sort());
console.log(alpha.reverse());
// the compare function
//function(a,b){return a-b}

const points = [40,52,15,25,30]
points.sort(function(a,b){return a-b});
console.log(points);
let point = [15,25,18,63,21]
point.sort(function(b,a){return b-a});
/*the forEach() method calls a function once for each array element.
the function takes 3 arguments 
the item value
the item index
the array itself 

*/
console.log(point);
const num = [45,63,12,19,25];
let txt = "";
num.forEach(myFunction);
function myFunction(value,index,array){
    txt += value + "<br>";
    }
    console.log(txt);
    const fruits = ["apple","orange","banana", "mango"];
    fruits.forEach((value,index,array)=>{
        console.log(value);
        console.log(index);
        console.log(array);
})

//Javascript Array Map()
//map method create an array by performing a function on each array element.
//map method does not execute the function for array elements without values.
const nums = [5,3,4,2,1]
nums.map((value,index,array)=>{
    console.log(value*2);
    console.log(value*5)
    })

const nums1 = [1,2,3,4];
console.log(nums1.map(nums1map));
function nums1map(value){
    return value*5
}

    //Filter() method 
    /*filter() method creates a new array
     with array elements that pass a test*/ 
     const nums2 = [5,4,6,4,1,1,30];
     const over18= nums2.filter(nums2over18);
     function nums2over18(value){
        return value>18
     }  
     console.log(over18);

     //Array reduce()
     /* it runs a function on 
     each array element to produce 
     (reduce it to) a single value
     left to right */ 
     const nums3 = [54,26,45,23,25];
     console.log(nums3.reduce((total,value)=>{
        return total + value;
    
     }))
     console.log(nums3.reduce((total,value)=>{
        return total - value
     }))
     console.log(nums3.reduce((total,value)=>{
        return total * value
     }))
     console.log(nums3.reduce((total,value)=>{
        return total / value
     }))
     console.log(nums3.reduce((total,value)=>{
        return total % value
     }))
     console.log(nums3.reduce((total,value)=>{
        return total - value
     }))
     console.log(nums3.reduceRight((total,value)=>{
        return total - value
     }))
     console.log(nums3.reduceRight((total,value)=>{
        return total + value
     }))

     //array every method
     /*It checks if all array values pass a test*/
     const nums4 = [15,12,4,6,46,23];
     console.log(nums4.every((value)=>{
        return value>12
     }))
     console.log(nums4.every((value)=>{
        return value<50
     }))
     //some method
     /*It checks if some array values  pass a test */
     console.log(nums4.some((value)=>{
        return value<15
     }))
 console.log(nums4.indexOf(12))
/*Array.from() method returns an Array object 
from any object with a length property or any iterable
object  */
 const arr = Array.from("6jxgcjsgbdkv bskvd");
 console.log (arr)
/*Array.keys() method returns an Array Iterator 
object with the keys of the array
*/
 const fr =  ["app","cake","coke","pep"];
 const keys = fr.keys();
let text = "";
for (let x of keys){
   text += x + "<br>";
}
console.log (text);

/*entries() returns an Array Iterator object with key/value
pairs*/ 
const f = fr.entries();
for(let y of f){
   console.log(y);
}
/* Array.includes(), It allows us to check if an element is present in an array 
(including NaN, unlike indexOf)*/ 
console.log(fr.includes("coke"));

let day;
   switch (new Date().getDay()) {
   case 0:
     day = "Sunday";
     break;
   case 1:
     day = "Monday";
     break;
   case 2:
      day = "Tuesday";
     break;
   case 3:
     day = "Wednesday";
     break;
   case 4:
     day = "Thursday";
     break;
   case 5:
     day = "Friday";
     break;
   case 6:
     day = "Saturday";
 }
 console.log(day);

 
 switch(new Date().getDay()){
   case 0:
   text= "today is sunday";
   break;
   case 2:
      text = "today is tuesday";
      break;
      default:
         text = "Looking forward to the Weekend";
 }
 console.log(text);