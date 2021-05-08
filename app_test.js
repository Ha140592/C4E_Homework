/*
//1
let str = prompt("Input string: ");
let strArr = [];
for (let i = str.length - 1 ; i >= 0; i--) {
    console.log(str[i]);
    strArr.push(str[i]);
}
let strReverse = strArr.join('');
alert(strReverse);

//2
let str = prompt('Input str:');
let arr = str.split(' ');
console.log(arr);
let result = [];
for(let i = 0; i < arr.length; i++) {
    let newArr = arr[i].split('');
    newArr[0] = newArr[0].toUpperCase();
    let newStr3 = newArr.join("");
    result.push(newStr3);
}
alert(result.join(" "));

//3
let str = prompt("Input array: ");
let arr = str.split(',');
console.log(arr);
let object = {};
for (let i = 0; i < arr.length; i++) {
    if(object[arr[i]]){
       object[arr[i]]++;
    } else {
        object[arr[i]] = 1;
    }
}
console.log(object);
let newArr = [];
for(x in object){
    newArr.push(x);
}
alert(newArr);


//4
let staff = [
    {
        name: "Ha",
        age: 30,
        salary: 20000000,
        position: "manager"
    },
    {
        name: "Duc",
        age: 20,
        salary: 15000000,
        position: "staff"
    },
    {
        name: "Son",
        age: 23,
        salary: 10000000,
        position: "staff"
    },
]

console.log(staff);
while(true){
    let command = prompt("Input command (C, R, U, D): ").toLowerCase();
     if (command === "r") { 
        for(let i = 0; i < staff.length; i++){
            console.log(`${i+1}.`);
            console.log(`Name: ${staff[i].name}`);
            console.log(`Age: ${staff[i].age}`);
            console.log(`Slary: ${staff[i].salary}`);
            console.log(`Position: ${staff[i].position}`);
        } 
    } else if (command === "c") { 
        let name = prompt('Input name: ');
        let age = prompt('Input age: ');
        let salary = prompt('Input salary: ');
        let position = prompt('Input position: ');
        let newObject = {};
        newObject.name = name;
        newObject.age = age;
        newObject.salary = salary;
        newObject.position  = position;
        staff.push(newObject);
        console.log(staff);
    } else if (command === "u") {
    let index = prompt(`Input index: `);
    let property = prompt(`Input property you want to update: `);
    let value = prompt(`Input value you want to update: `);
    staff[index-1][property] = value;
    console.log(staff);
    } else if (command === "d"){
    let index = prompt(`Input index: `);
    staff.splice(index-1, 1);
    console.log(staff);
    } else {
        alert(`Command doesn't exist`);
    }
}
*/
//5
let dateStr = prompt("Input date: ");
let dateArr = dateStr.split("/");
console.log (dateArr);
let date = Number(dateArr[0]);
let month = Number(dateArr[1]);
let year = Number(dateArr[2]);
let dateArr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let dateArr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
let monthArr1 = [1,3,5,7,8,9,10,12];
let monthArr2 = [4,6,9,11];

if (monthArr1.includes(month) && dateArr2.includes(date) || monthArr2.includes(month) && dateArr1.includes(date))  {
    if (date === 31 && month === 12) {

        alert(`Ngày tiếp theo là: 1/1/${year+1}`);

    } else if (date === 31 && monthArr1.includes(month)|| date === 30 && monthArr2.includes(month)) {
    alert(`Ngày tiếp theo là: 1/${month+1}/${year}`);
    } else {
    alert(`Ngày tiếp theo là: ${date+1}/${month}/${year}`);
    }
} else if (month === 2){
    if (date < 1 || date > 29) {
    alert ("Ngày tháng không hợp lệ");
    } else if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        if (date >= 1 && date < 28) {
            alert(`Ngày tiếp theo là: ${date+1}/${month}/${year}`);
        } else if (date === 28){
             alert(`Ngày tiếp theo là: 1/3/${year}`);
        } else {
            alert ("Ngày tháng không hợp lệ");
        }
    } else if (date >= 1 && date < 29) {
        alert(`Ngày tiếp theo là: ${date+1}/${month}/${year}`);
    } else if (date === 29) {
        alert(`Ngày tiếp theo là: 1/3/${year}`);
    } 
} else {
    alert ("Ngày tháng không hợp lệ");
}
