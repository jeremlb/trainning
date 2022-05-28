const FIZZ_MULTIPLIER = 3;
const BUZZ_MULTIPLIER = 5;
const FIZZ_WORD = 'Fizz';
const BUZZ_WORLD = 'Buzz';

export function isMultipleOf(value: number, divider: number): boolean {
  return divider !== 0 && value % divider === 0;
}

export class FizzBuzz {
  static print(choice: number): string {
    if (choice < 1 || choice > 100) {
      throw new Error('Choice must be between 1 and 100');
    }

    let value = '';

    if (isMultipleOf(choice, FIZZ_MULTIPLIER)) {
      value += FIZZ_WORD;
    }

    if (isMultipleOf(choice, BUZZ_MULTIPLIER)) {
      value += BUZZ_WORLD;
    }    

    return value.length ? value : choice.toString();
  }
}
