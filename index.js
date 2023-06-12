/*Q1: 
1. Create an array called grades and put the following values: 56, 87, 99, 40
2. Add another element at the end of the array with value: 68
3. Remove the 1st element of the array
4. Change 40 to 60.
5. Create a variable called average and compute for the average of the grades array.
    Tip: you can create another variable as a placeholder for the sum first.
*/

let grades = [56, 87, 99, 40];
grades.push(68); // adding 68 to the array
 console.log(grades);
grades.shift(); // removing the first element in the array
console.log(grades);
grades.splice(2,1,60); // chaninging 40 to 60 in the array
console.log(grades);
let sumGrades = 0; // initializing variable sumGrades to add the numbers in the array
for (number of grades){
    sumGrades += number; 
}
console.log(`The sum of the grades in the array is ${sumGrades}`);
let average = sumGrades / grades.length; // calculating the average
console.log(`The average of the grades is ${average}`);

/*Q2:
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
Feel free to put any value.
2. Use the for-in loop to display both the properties and values of the object.
*/

const vehicle = {
    name: "Car",
    brand: "Mercedes",
    year: 2023,
    wheels: 4,
    isEnvironmentFriendly: false
}

for (features in vehicle){
    console.log(`vehicle ${features} is ${vehicle[features]}`);
}