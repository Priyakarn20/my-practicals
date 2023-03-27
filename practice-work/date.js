/*Date objects are created with the new Date()
constructor

new Date()
new Date(date)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
*/

const a = new Date();// creates a date object with new date and time.
console.log(a);

const b = new Date("November 20, 2015");
console.log(b);