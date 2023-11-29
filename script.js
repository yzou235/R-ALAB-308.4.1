// Part 1: Refactoring Old Code

const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

const rows = csvString.split("\n");
console.log(rows);

let newArray = [];

rows.forEach((row) => {
    newArray.push(row.split(","))
});
console.log(newArray);