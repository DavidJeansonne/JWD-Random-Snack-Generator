/* ----------------------------------------------------
JWD Debrief
-----------
Lets write a script that chooses a random snack for each day of the week using all of the snacks in our array, no duplicates. The 'weekdays' array is missing two days of the week and we will need to supply two new snacks in the 'snacks' array.
----------------------------------------------------*/

const snacks = ["Apples", "Pears", "Banannas", "Blackberries", "Cherries"];

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

/* ---------------------------------------------------- 
To begin, we need to add to the two arrays above. We need to add 'Saturday' and 'Sunday' to our 'weekdays' array and also add 2 new snacks in the 'snacks' array for the extra days.
---------------------------------------------------- */

// Add two new snacks to the 'snacks' array.

snacks.push("Plum", "Orange");

// Add 'Sunday' to the beginning of the 'weekdays' array.

weekdays.unshift("Sunday");

// Add 'Saturday' to the end of the 'weekdays' array.

weekdays.push("Saturday");

/* ----------------------------------------------------
Next we will create a function that stores a random snack from the 'snacks' array above to a variable. 
---------------------------------------------------- */

// Create a function called 'chooseRandomSnack'.
// In the function, get a random number based on the 'snacks' array length.
// Store the number to a variable called 'randomSnack' in the function. We will need it later in the script.
// Use the 'randomSnack' variable to call an element from the 'snacks' array.
// Store the random snack to a variable called 'selectedSnack'.
function chooseRandomSnack(){
  randomSnack = Math.floor(Math.random() * snacks.length);
  selectedSnack = snacks[randomSnack];
}

/* ----------------------------------------------------
Finally, we will create a loop that cycles through each day of the week, choosing a random snack for the day and removing it from the 'snacks' array so that it will not be choosen again. The loop will log the results to the console.
---------------------------------------------------- */

// Create a  for loop to cycle through the days of the week using the 'weekdays' array above.
// In the loop, run the 'chooseRandomSnack' function.
// Store the random snack to a variable called 'selectedSnack'.
// Remove the random snack from the 'snack' array. 
// Log the results like a sentence in the example below:
//    Wednesdays snack is Orange.


for (let i = 0; i < weekdays.length; i++) {
  chooseRandomSnack();
  snacks.splice(randomSnack, 1);
  console.log(weekdays[i] + "s snack is " + selectedSnack);
}