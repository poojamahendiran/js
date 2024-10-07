let input = prompt("Enter numbers separated by spaces:");
let arr = [];
let largestNum = "";
for (let lar = 0; lar < input.length; lar++) {
if (input[lar] === ' ') {
arr.push(parseInt(largestNum));
largestNum = ""; 
} else {
largestNum += input[lar];
}
}
arr.push(parseInt(largestNum));
let largest = -1;
let secondLargest = -1;
for (let sec_lar = 0; sec_lar < arr.length; sec_lar++) {
let num = arr[sec_lar];
if (num > largest) {
secondLargest = largest;
largest = num;
} else if (num > secondLargest && num !== largest) {
secondLargest = num;
}
}
if (secondLargest === -1) {
console.log("There is no second-largest element in the array.");
} else {
console.log(secondLargest);
}
