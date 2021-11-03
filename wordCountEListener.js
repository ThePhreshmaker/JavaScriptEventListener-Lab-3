/* JavaScript Event Listener to count both Characters(Including Whitespaces) and Words
 * For Lab 3.3 CISC 3140 Brooklyn College
 * Author: Shawn P
*/

//Define variables and get elements from HTML Document
let userTextArea = document.getElementById("user-textarea");
let charCount = document.getElementById("char-count");
let wordCount = document.getElementById("word-count");

userTextArea.addEventListener("input", () => {
  //Counts number of characters
  charCount.textContent = userTextArea.value.length;

  //Removes whitespaces
  let txt = userTextArea.value.trim();
  //Spit text at spaces into array of substrings
  //Filter empty string
  //Count length of this array
  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});
