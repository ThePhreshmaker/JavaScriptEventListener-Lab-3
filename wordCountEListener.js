let userTextArea = document.getElementById("user-textarea");
let charCount = document.getElementById("char-count");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", () => {
  //Counts number of characters
    charCount.textContent = userTextArea.value.length;

  //Removes whitespaces
  let text = userTextArea.value.trim();
  //Spit text at spaces into array of substrings
  //Filter empty string
  //Count length of this array
  wordCount.textContent = text.split(/\s+/).filter((item) => item).length;
});
