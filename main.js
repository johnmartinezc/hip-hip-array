/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
];
let i = 0
while (i < students.length) {
    console.log(students[i])

    i++
}
// Challenge 1 Code



console.log("\n");

console.log("Challenge 2");
// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
//Challenge 2 Code


i= 0
while(i < grades.length){
    console.log(grades[i])
    i++
}




console.log("\n");

console.log("Challenge 3");
// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
// Challenge 3 Code

let t = 0


while (t < positiveNumbers.length) {
    if (positiveNumbers[t] % 2 == 0) {
        console.log(positiveNumbers[t])

    }
    t++
}



console.log("\n");
console.log("Challenge 4");
// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

// Challenge 4 Code

let y = 0


while (y < mixedSignNumbers.length) {
    if (mixedSignNumbers[y] % 2 == 0) {
        console.log(mixedSignNumbers[y])

    }
    y++
}



console.log("\n");
console.log("Challenge 5");
// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
// Challenge 5 Code


symmetricalCapitals.shift()
symmetricalCapitals.shift()
symmetricalCapitals.pop()


let r = 0;

while (r < symmetricalCapitals.length) {
    console.log(symmetricalCapitals[r]);
    r++;
}



console.log("\n");
console.log("Challenge 6");
// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
// Challenge 6 Code

fibonacciNumbers.unshift(2)
fibonacciNumbers.push(21, 34)

let e = 0;

while (e < fibonacciNumbers.length) {
    console.log(fibonacciNumbers[e]);
    e++;
}



console.log("\n");
console.log("Challenge 7");
// Challenge 7
// Make a NEW array with 5 values of your choice,
// using the same syntax as the array creation from the previous 6 challenges; 
//that is, every value should be placed within the square brackets.  Now console.log out each value individually.
// Challenge 7 Code

const rich = [22, 33, 11, 44, 66]
let w = 0;

while (w < rich.length) {
    console.log(rich[w]);
    w++;
}


console.log("\n");
console.log("Challenge 8");
// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const emptyArray = [];
// Challenge 8 Code

emptyArray.unshift("Dog", "Mouse", "Cat")
emptyArray.push("Gold", "Silver")
let q = 0;

while (q < emptyArray.length) {
    console.log(emptyArray[q]);
    q++;
}


console.log("\n");
console.log("Challenge 9");
// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
// Challenge 9 Code

let stud = students.slice(3, 11)
let a = 0

while (a < stud.length) {
    if (stud.indexOf()) {
        console.log(stud[a])
    }
    a++
}

console.log("\n");
console.log("Challenge 10");
// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array ,
// starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, 
//loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
// Do NOT use slice, you will be using that for the next challenge!
// Challenge 10 Code


let students2 = students.splice(3,11)

let s = 0

while (s < students2.length) {
    if (students2.indexOf()) {
        console.log(students2[s])
    }
    s++
}



console.log("\n");
console.log("Challenge 11");
// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), 
//then log out each value of the copy individually.
//THEN log out each value of the original array.Notice that the original array didn't get any values taken out of it,
// because `slice` does NOT modify the original array.
// Challenge 11 Code


let stude = students.slice(2, 11)

let d = 0



while (d < stude.length) {
    console.log(d)
    console.log(stude[d])
    console.log(d)
    console.log(students[d])
    d++
}




console.log("\n");
console.log("Challenge 12");
// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), 
//then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
    // Challenge 12 Code


let my = dinosaurs.splice(dinosaurs.indexOf("Triceratops"),3)
console.log(dinosaurs)
console.log(my)



console.log("\n");
console.log("Challenge 13");
// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator".
// Then console.log out that string.
// Challenge 13 Code

let joined = dinosaurs.join(' * ')
console.log(joined)




console.log("\n");

console.log("Challenge 14");
// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
// Challenge 14 Code

let dinoReverse = dinosaurs.reverse()
console.log(dinoReverse)



console.log("\n");
console.log("Challenge 15");
// Challenge 15
// Create two new arrays.
// Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). 
// Then console.log out each value of that new array individually. 
// Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
// Challenge 15 Code


const sos = ["EMS", "Police", "Firefighter"]
const bad = ["Robber", "Theif", "Mug shot"]

let copsandrobbers = sos.concat(bad)

let f = 0

while (f < copsandrobbers.length) {
    if (copsandrobbers.indexOf()) {
        console.log(copsandrobbers[f])
    }
    f++
}



//