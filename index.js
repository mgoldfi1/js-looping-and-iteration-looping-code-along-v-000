// Code your solutions in this file

  function printBadges(badges) {
    for (let i = 0; i < badges.length; i++) {
      console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`);
    }
    return badges
  }

  function tailsNeverFails() {
    function maybeTrue() {
      return Math.random() <= 0.5;
          }
    let x = 0
      while (maybeTrue()) {
        x++;
        console.log(`You got ${x} tails in a row!`)

      }
  }
