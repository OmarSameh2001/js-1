function sort() {
  var a = 3,
    b = 4,
    c = 5;

  if (a >= b && a >= c && b >= c) {
    alert(`Sorted Numbers: ` + `${a}, ${b}, ${c}`);
  } else if (a >= b && a >= c && c >= b) {
    alert(`Sorted Numbers: ` + `${a}, ${c}, ${b}`);
  } else if (b >= a && b >= c && a >= c) {
    alert(`Sorted Numbers: ` + `${b}, ${a}, ${c}`);
  } else if (b >= a && b >= c && c >= a) {
    alert(`Sorted Numbers: ` + `${b}, ${c}, ${a}`);
  } else if (c >= a && c >= b && a >= b) {
    alert(`Sorted Numbers: ` + `${c}, ${a}, ${b}`);
  } else {
    alert(`Sorted Numbers: ` + `${c}, ${b}, ${a}`);
  }
}

function fizzbuzz() {
  for (var x = 1; x <= 100; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
      console.log("FizzBuzz");
    } else if (x % 3 === 0) {
      console.log("Fizz");
    } else if (x % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(x);
    }
  }
}

function multiple() {
  var sum = 0;

  for (var i = 1; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      sum += i;
    }
  }

  console.log(`The sum is: ${sum}`);
}

function game() {
  var num = Math.floor(Math.random() * 10);
  console.log(num);
  for (var tries = 0; tries < 3; tries++) {
    var guess = prompt("Guess a number between 1 and 10:");

    if (guess == num) {
      alert(`Good Work! The number is: ${num}`);
      return;
    } else if (tries < 2) {
      var again = confirm("Wrong guess, want to try again?");
      if (!again) {
        break;
      }
    }
  }
  alert(`Game Over! The number was: ${num}`);
}
