// Caesars Cipher, Sat, 27/05/23

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus "A" <-> "N", "B" <-> "O" and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctation) but do pass them on.

function rot13(str) {
  let solved = "";

  for (let i = 0; i < str.length; i++) {
    let ascii = str[i].charCodeAt();

    if (ascii >= 65 && ascii <= 77) {
      solved += String.fromCharCode(ascii + 13);
    } else if (ascii >= 78 && ascii <= 90) {
      solved += String.fromCharCode(ascii - 13);
    } else {
      solved += str[i];
    }
  }

  return solved;
}

console.log(rot13("SERR PBQR PNZC"));
