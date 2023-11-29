// Part 2: Expanding Functionality

const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

const rows = csvString.split("\n");
console.log(rows);

let result1 = [];

rows.forEach((row) => {
    result1.push(row.split(","))
});
console.log(result1);

// Part 3: Transforming Data

const keys = result1[0];

let result2 = [];

for(let i = 1; i < result1.length; i++) {
    const rowObject = {};
    for (let j = 0; j < keys.length; j++) {
        rowObject[keys[j]] = result1[i][j];
    }
    result2.push(rowObject);
}

console.log(result2);

// Part 4: Sorting and Manipulating Data

let result3 = result2.slice(); // create a copy of result 2.

// Insert an object at index 1:

result3.splice(1, 0, { ID: "48", Name: "Barry", Occupation: "Runner", Age: "25" });

console.log('After inserting the required object:');
console.log(result3);

// Add an object to the end of the array:

result3.push({ ID: "7", Name: "Bilbo", Occupation: "None", Age: "111" });

console.log('After adding the required object to the end of the array:');
console.log(result3);

// Calculate the average age of the group

let totAge = 0;
let avgAge = 0;
let numPeople = result3.length;

result3.forEach((person) => {
    totAge += parseInt(person.Age);
});

avgAge = parseInt(totAge / numPeople);
console.log(`The average age of the group is ${avgAge}.`);

