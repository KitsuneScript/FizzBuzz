# FizzBuzz

This repository contains a clean and simple implementation of the classic **FizzBuzz** exercise in JavaScript (Node.js)

## Purpose
The project demonstrates:
- Writing clear and maintainable code.
- Applying basic control flow and modularity in JavaScript.
- Providing documentation for ease of collaboration.

Although the task is simple, the implementation is structured in a way that makes it easy to extend with additional rules or adapted ranges.

## How It Works
The program prints numbers from **1 to 100**:
- Multiples of **3** → `"Fizz"`
- Multiples of **5** → `"Buzz"`
- Multiples of both **3 and 5** → `"FizzBuzz"`

### Example output
```text
1
2
Fizz
4
Buzz
Fizz
...
14
FizzBuzz
```


## Code

```js
/**
 * Prints numbers from 1 to 100 with the following rules:
 * - Multiples of 3 → "Fizz"
 * - Multiples of 5 → "Buzz"
 * - Multiples of both 3 and 5 → "FizzBuzz"
 * 
 * Implementation note:
 * The output is built dynamically (string concatenation) so the code
 * is easy to extend with additional rules (e.g., multiples of 7 → "Bazz").
 */

for (let i = 1; i <= 100; i++) {
  let out = "";

  // Append "Fizz" if divisible by 3
  if (i % 3 === 0) out += "Fizz";

  // Append "Buzz" if divisible by 5
  if (i % 5 === 0) out += "Buzz";

  // Print the combined result or the number itself
  console.log(out || i);
}
```

## Usage

### Requirements
- [Node.js](https://nodejs.org/) v18 or later

### Run
Clone the repository and run the script:

```bash
git clone https://github.com/KitsuneScript/FizzBuzz.git
cd fizzbuzz/src
node fizzbuzz.js
```