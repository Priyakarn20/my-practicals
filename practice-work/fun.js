function mi(p,a){
    return p*a;
}
mi(2,3);
console.log(mi(7,8));
console.log(mi(2,3));
let a = "anklnlnclan ,an ,adn lasn ladn lad ladnal laz lzsa l. j"
console.log(a.length);
let b = " we are \"human \", we love nature." 
console.log(b);
let c = " It\'s good."
console.log(c);
let d = "bbkmbc kasbkas\n bkhxkahxkaxhka"
console.log(d);
let e = "bkkh cakhka\v jvjgdcjgcj"
console.log(e);

let x = "john";
let y = new String("John");
console.log(x, y);
let z = new String("John");
console.log(y===z);
console.log(a.charAt(5).toUpperCase())
console.log(a.charCodeAt(5))
console.log(a.concat(b))
console.log(a.constructor)
let f = "Hello world"
let g = f.constructor
console.log(g);
console.log(f.endsWith("hum"));
console.log(f.endsWith("world"));
console.log(f.startsWith("hum"));
console.log(f.startsWith("Hello "));
let h = String.fromCharCode(55,66,32,333,22,)
console.log(h);
function man (name, standard, rollNo){
this.name = name;
this.standard = standard;
this.rollNo = rollNo;
}
man.prototype.salary = 5000;
const sam = new man("Sam anm", "a", 5);
console.log(sam.salary);
let text1 = "cd";
let text2 = "ab";
let result = text2.localeCompare(text2);
console.log(result);