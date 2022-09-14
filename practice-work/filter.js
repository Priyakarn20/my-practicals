/* The filter() method returns a new array with all the elements that 
satisfies the condition that is passed inside the callback of filter()
method .
it has three arguments
element/item - current array element the callback is iterating over '
index- index of the current element/item .
array- the array on which the filter method is being performed.

*/
let array = [25, 5, 72, 22, 8, 4];
let filterArray = array.filter((item, index, array) => {
    //first iteration output
    console.log(item);
    console.log(index);
    console.log(array);
});

let ages = [52, 73, 82, 19, 16];
let oldAges = ages.filter((item) => {
    return item > 18;
});
console.log(oldAges);

let colors = ['Red', 'Green', 'Yellow', 'Blue', 'Magenta', 'Yellow'];
let favouriteColor = colors.filter((item) => {
    return item === 'Red';
})
console.log(favouriteColor);

let arr1 = [2, 52, 60, 51, 15, 19];

//finding an odd array
let oddArray = arr1.filter((item) => {
    return item % 2 != 0;
});
let evenArray = arr1.filter((item) => {
    return item % 2 == 0;
});
console.log(oddArray); 
console.log(evenArray);

let arr2 = [
    {eatables: "dosa", state: "Kerala" },
    {eatables: "butter chicken", state: "Punjab"},
    {eatables: "litti chokha", state: "Bihar"},
    {eatables: "dal makhni" , state: "Punjab"},
];
// finding eatables from Punjab 
let eatablesfromPunjab = arr2.filter((item) => {
    return item.state === "Punjab" 
});
console.log(eatablesfromPunjab);

