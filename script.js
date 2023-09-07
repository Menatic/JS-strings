// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var firstString = "I am a";
var secondString = "Kalvian";
var concatenatedString = firstString + " " + secondString;
console.log(concatenatedString);


// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
var givenString = 'If you fail, never give up because FAIL means "First Attempt In Learning".';
console.log(givenString);
// Challenge 3: Store a string in a variable and display the length of the string.
var stringToMeasure = "Java is fun ";
var stringLength = stringToMeasure.length;
console.log("Length of the string: " + stringLength);

// Challenge 4: Store a string in a variable and convert it into uppercase.
var givenString = 'Never outshine the master';
var uppercaseString = givenString.toUpperCase();
console.log(uppercaseString);

//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var stringWithReplacement = "I love programming";
var replacedString = stringWithReplacement.replace("programming", "JavaScript programming");
console.log(replacedString);

// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
var repeatString = "Death is inevitable"
var repeatedString = repeatString.repeat(3);
console.log(repeatedString);

//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var stringToArray = "I am a Kalvian";
var stringAsArray = stringToArray.split(" ");
console.log(stringAsArray);

// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var givenString = "Time and Tide wait for none";
var indexOfTi = givenString.indexOf("Ti");
console.log("Index of 'Ti': " + indexOfTi);

// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var givenPhrase = "When life gives you lemons make lemonade";
var includesLemon = givenPhrase.includes("lemon");
console.log("Includes 'lemon': " + includesLemon);

// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var longString = "You must be the change you wish to see in the world.";
var changeSubstring = longString.slice(17, 23);
var worldSubstring = longString.substring(42, 47);
console.log("Slice: " + changeSubstring);
console.log("Substring: " + worldSubstring);
