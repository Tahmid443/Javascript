// const = the value that will be unchanged
// let = the value that is changable
// var = old method(We should use let and const)
const pi = 3.1416
// let pi = 3.1416 will throw error


let age = 23
{
    let age = 28
    console.log(age)//block scoped 28
}
console.log(age);//globally scoped 23
