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