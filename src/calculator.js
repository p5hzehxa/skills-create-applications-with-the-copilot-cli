/**
 * Node.js CLI Calculator App
 * Provides basic arithmetic operations
 */

/**
 * Addition operation
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function addition(a, b) {
  return a + b;
}

/**
 * Subtraction operation
 * Subtracts the second number from the first
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The difference of a and b
 */
function subtraction(a, b) {
  return a - b;
}

/**
 * Multiplication operation
 * Multiplies two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
function multiplication(a, b) {
  return a * b;
}

/**
 * Division operation
 * Divides the first number by the second
 * @param {number} a - First number (dividend)
 * @param {number} b - Second number (divisor)
 * @returns {number} The quotient of a and b
 * @throws {Error} If divisor is zero
 */
function division(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// Export all calculator functions
module.exports = {
  addition,
  subtraction,
  multiplication,
  division
};
