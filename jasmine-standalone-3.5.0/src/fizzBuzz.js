function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(number, 15)) {
    return "FizzBuzz";
  } else if (this._isDivisibleBy(number, 3)) {
    return "Fizz";
  } else if (this._isDivisibleBy(number, 5)) {
    return "Buzz";
  } else {
    return number;
  }
}

FizzBuzz.prototype._isDivisibleBy = function(num, divisor) {
  return num % divisor === 0;
}