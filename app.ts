//String type
let fullname: string = 'John';

//Number type
let age: number = 25;

//Boolean type
let active: boolean = true;

//Array type
let names: string[] = ['John', 'Jane', 'Peter', 'David'];
let numbers: number[] = [1,2,3,4];


//object type
let person: {
    name: string,
    age: number
};

person = {
    name: 'John',
    age: 25
};

//Tuple type
let employee: [number,string] = [1, "Steve"];
console.log(typeof(employee));

//Any type
let a: any = "Hello World!";
a = 23;
console.log(typeof(a));
a = true;
console.log(typeof(a));

let arr: any[] = ["John",212,true];
arr.push("Smith");
console.log(arr);

console.log(fullname);
console.log(age);
console.log(active);
console.log(names);
console.log(numbers);
console.log(person);
console.log(employee);


