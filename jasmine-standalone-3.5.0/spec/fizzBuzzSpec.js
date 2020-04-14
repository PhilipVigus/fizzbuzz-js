describe('print numbers from 1 to 100', function() {

  let fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it('returns "Fizz" for multiples of 3', function() {
    expect(fizzBuzz.play(3)).toEqual("Fizz");
  });

});