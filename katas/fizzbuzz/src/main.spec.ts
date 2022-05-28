import { FizzBuzz } from './main';

/* This Kata is a TDD execice with a solution provided in the Software Craft, DUNOD 2022 book */

describe('Kata FizzBuzz', () => {
  it('should throw an error when choice is lower than 1', () => {
    // GIVEN 
    const choice = 0;

    // WHEN

    // SHOULD 
    expect(() => {FizzBuzz.print(choice)}).toThrowError('Choice must be between 1 and 100');
  });

  it('should throw an error when choice is higher than 100', () => {
    // GIVEN 
    const choice = 101;

    // WHEN

    // SHOULD 
    expect(() => {FizzBuzz.print(choice)}).toThrowError('Choice must be between 1 and 100');
  });  
  
  it('should return the same number when not a multiple of three or five', () => {
    // GIVEN 
    const choice = 1;

    // WHEN
    const result = FizzBuzz.print(choice);

    // SHOULD 
    expect(result).toBe('1');
  });

  it('should return "Fizz" when choice is a multiple of three', () => {
    // GIVEN 
    const choice = 3;

    // WHEN
    const result = FizzBuzz.print(choice);

    // SHOULD 
    expect(result).toBe('Fizz');
  });

  it('should return "Buzz" when choice is a multiple of five', () => {
    // GIVEN 
    const choice = 5;

    // WHEN
    const result = FizzBuzz.print(choice);

    // SHOULD 
    expect(result).toBe('Buzz');
  });

  it('should return "FizzBuzz" when choice is a multiple of three and five', () => {
    // GIVEN 
    const choice = 15;

    // WHEN
    const result = FizzBuzz.print(choice);

    // SHOULD 
    expect(result).toBe('FizzBuzz');
  });
});
