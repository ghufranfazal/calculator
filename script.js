const result = document.querySelector('#result');
const history = document.querySelector('#history');
const buttons = document.querySelectorAll('button');
let input = '';
let output = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === 'C') {
      result.value = '';
      input = '';
    } else if (buttonText === '←') {
      input = input.slice(0, -1);
      result.value = input;
    } else if (buttonText === '=') {
      if (input !== '') { // Check if input is not empty
        try {
          output = eval(input); // Basic evaluation of input expression
          history.innerHTML += `<div>${input} = ${output}</div>`;
          result.value = output;
          input = ''; // Clear input after calculation
        } catch (error) {
          result.value = 'Error';
        }
      }
    } else {
      input += buttonText;
      result.value = input;
    }
  });
});

// Listen to keyboard input
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (key >= '0' && key <= '9' || key === '.' || ['+', '-', '*', '/'].includes(key)) {
    input += key;
    result.value = input;
  } else if (key === 'Backspace') {
    input = input.slice(0, -1);
    result.value = input;
  } else if (key === 'Enter') {
    if (input !== '') { // Check if input is not empty
      try {
        output = eval(input);
        history.innerHTML += `<div>${input} = ${output}</div>`;
        result.value = output;
        input = '';
      } catch (error) {
        result.value = 'Error';
      }
    }
  } else if (key === 'Delete') {
    result.value = '';
    input = '';
  }
});
