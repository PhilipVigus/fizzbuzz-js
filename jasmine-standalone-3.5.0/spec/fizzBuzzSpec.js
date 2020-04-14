describe('print numbers from 1 to 100', function() {

  let fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it('returns "Fizz" for multiples of 3', function() {
    expect(fizzBuzz.play(3)).toEqual("Fizz");
  });

  it('returns "Buzz" for multiples of 5', function() {
    expect(fizzBuzz.play(5)).toEqual("Buzz");
  });

  it('returns "Fizzbuzz" for multiples of 3 and 5', function() {
    expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
  });

  it('returns the number for numbers that are not divisible by 3 or 5', function() {
    expect(fizzBuzz.play(4)).toEqual(4);
  });
});