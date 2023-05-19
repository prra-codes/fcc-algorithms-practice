// Boo who    Fri, 19/05/23

// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  }

  return false;
}

booWho(null);
