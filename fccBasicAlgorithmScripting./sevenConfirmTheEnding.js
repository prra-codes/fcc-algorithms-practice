// Confirm The Ending, Thu, 18/05/23

// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  let lastNcharacterOfStr = str.substring(str.length - target.length);

  if (lastNcharacterOfStr === target) {
    return true;
  }
  return false;
}

console.log(confirmEnding("Bastian", "n"));
