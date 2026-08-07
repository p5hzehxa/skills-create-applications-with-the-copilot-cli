#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function parseInput(num1, operator, num2) {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isNaN(number1) || isNaN(number2)) {
    return { error: 'Error: Both inputs must be valid numbers.' };
  }

  if (!['+', '-', '*', '/'].includes(operator)) {
    return { error: 'Error: Operator must be one of: +, -, *, /' };
  }

  return { number1, number2, operator };
}

function calculate(number1, number2, operator) {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '/':
      if (number2 === 0) {
        return { error: 'Error: Cannot divide by zero.' };
      }
      return number1 / number2;
    default:
      return { error: 'Error: Invalid operator.' };
  }
}

function performCalculation(num1, operator, num2) {
  const parsed = parseInput(num1, operator, num2);

  if (parsed.error) {
    console.log(parsed.error);
    return;
  }

  const result = calculate(parsed.number1, parsed.number2, parsed.operator);

  if (result.error) {
    console.log(result.error);
  } else {
    console.log(`${parsed.number1} ${parsed.operator} ${parsed.number2} = ${result}`);
  }

  rl.close();
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 3) {
    performCalculation(args[0], args[1], args[2]);
  } else if (args.length === 0) {
    console.log('CLI Calculator');
    console.log('Usage: node calculator.js <number1> <operator> <number2>');
    console.log('Operators: +, -, *, /');
    console.log('\nOr enter values interactively:');

    rl.question('Enter first number: ', (num1) => {
      rl.question('Enter operator (+, -, *, /): ', (operator) => {
        rl.question('Enter second number: ', (num2) => {
          performCalculation(num1, operator, num2);
        });
      });
    });
  } else {
    console.log('Error: Invalid number of arguments.');
    console.log('Usage: node calculator.js <number1> <operator> <number2>');
    rl.close();
  }
}

main();
