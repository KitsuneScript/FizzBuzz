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
- Multiples of **7** → `"Buss"`
- Multiples of both **3 and 7** → `"FizzBuss"`

An additional option allows suppression of `"FizzBuss"` output.

### Example output
```text
1
2
Fizz
4
5
Fizz
...
20
FizzBuss
22
```


## Code

```js
/**
 * Prints numbers from 1 to 100 with the following rules:
 * - Multiples of 3 → "Fizz"
 * - Multiples of 7 → "Buss"
 * - Multiples of both 3 and 7 → "FizzBuss"
 *
 * Option:
 * Run with `--suppressFizzBuss` to suppress printing "FizzBuss".
 */

const suppressFizzBuss = process.argv.includes("--suppressFizzBuss");

for (let i = 1; i <= 100; i++) {
  let out = "";

  if (i % 3 === 0) out += "Fizz";
  if (i % 7 === 0) out += "Buss";

  if (suppressFizzBuss && out === "FizzBuss") {
    console.log(i); // print the number instead
  } else {
    console.log(out || i);
  }
}
```

## Usage

### Requirements
- [Node.js](https://nodejs.org/) v18 or later

### Run
Clone the repository and run the script:

```bash
git clone https://github.com/KitsuneScript/FizzBuzz.git
cd FizzBuzz/src
node fizzbuzz.js
```

### Run with suppression of "FizzBuss"

```bash
node fizzbuzz.js --suppressFizzBuss
```