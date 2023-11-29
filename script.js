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