let num = 98765;
let count = 0;
let temp = num;

while (temp > 0) {
    temp = Math.floor(temp / 10);
    count++;
}

console.log("Number: " + num);
console.log("Number of digits: " + count);
