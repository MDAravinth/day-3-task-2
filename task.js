let obj1 ={name:"aravinth",age:22}
let key1= JSON.stringify(Object.keys(obj1).sort())
console.log(key1);

let obj2 ={age:22,name:"aravinth"}
let key2 = JSON.stringify(Object.keys(obj2).sort())
console.log(key2);

if(key1===key2){
    console.log("equl")
}else{
    console.log("not equl")
}