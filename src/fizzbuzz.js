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
