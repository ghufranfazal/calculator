let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('result').value = previousInput + operator + currentInput;
}

function operation(op) {
  if (currentInput === '' && previousInput === '') return; // Prevent operation without numbers
  if (currentInput !== '' && previousInput === '') { 
    previousInput = currentInput; 
    currentInput = ''; 
  }
  operator = op;
  document.getElementById('result').value = previousInput + operator;
}

function calculate() {
  if (currentInput === '' || operator === '') return;
  const result = eval(`${previousInput} ${operator} ${currentInput}`);
  document.getElementById('result').value = result;
  currentInput = result.toString();
  operator = '';
  previousInput = '';
}

function clearResult() {
  currentInput = '';
  operator = '';
  previousInput = '';
  document.getElementById('result').value = '';
}

function backspace() {
  if (currentInput !== '') {
    currentInput = currentInput.slice(0, -1); // Remove last character of current input
  } else if (operator !== '') {
    operator = ''; // Remove operator if current input is empty
  } else if (previousInput !== '') {
    previousInput = previousInput.slice(0, -1); // Remove last character of previous input
  }
  document.getElementById('result').value = previousInput + operator + currentInput;
}

// Add keyboard support
document.addEventListener('keydown', function(event) {
  const key = event.key;

  // Check if the key is a number (0-9)
  if (!isNaN(key)) {
    appendNumber(key);
  } 
  // Check if the key is an operator (+, -, *, /)
  else if (['+', '-', '*', '/'].includes(key)) {
    operation(key);
  } 
  // Check if the key is Enter (calculate result)
  else if (key === 'Enter') {
    calculate();
  } 
  // Check if the key is Backspace (delete last character)
  else if (key === 'Backspace') {
    backspace();
  } 
  // Check if the key is Delete (clear all)
  else if (key === 'Delete') {
    clearResult();
  }
});
