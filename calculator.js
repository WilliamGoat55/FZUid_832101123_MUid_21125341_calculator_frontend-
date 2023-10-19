// Function to append a value to the display
function appendToDisplay(value) {
  display.value += value;
  currentExpression += value;
}

// Function to handle multiplication operation
function multiply() {
  display.value += '×';
  currentExpression += '*';
}

// Function to handle division operation
function divide() {
  display.value += '÷';
  currentExpression += '/';
}

// Function to handle power/exponentiation operation
function power() {
  display.value += '^';
  currentExpression += '**';
}

// Function to handle complementation operation
function complementation() {
  display.value += '%';
  currentExpression += '%';
}

// Function to clear the display and current expression
function clearDisplay() {
  display.value = '';
  currentExpression = '';
}

// Function to delete the last element from the display and current expression
function deleteElement() {
  display.value = display.value.slice(0, -1);
  currentExpression = currentExpression.slice(0, -1);
}

// Function to perform calculation
function calculate() {
  try {
    // Replace π with Math.PI to prevent eval issues with π
    var expression = currentExpression.replace(/π/g, 'Math.PI');
    // Evaluate the expression and update the display
    display.value = eval(expression);
    // Check if there's a valid expression and it's not 'undefined'
    if (currentExpression && currentExpression !== 'undefined') {
      // Add the calculation history record
      addHistory({ note: `${currentExpression} = ${display.value.toString()}` });
    }
    // Update the current expression with the calculated result
    currentExpression = display.value.toString();
  } catch (error) {
    // Handle calculation errors by displaying 'Error'
    display.value = 'Error';
  }
}

// Function to calculate factorial
function factorial() {
  var num = parseFloat(display.value);

  if (isNaN(num) || num < 0) {
    // Display 'Error' for invalid input or negative numbers
    display.value = 'Error';
    return;
  }

  var result = 1;

  // Calculate factorial
  for (var i = 2; i <= num; i++) {
    result *= i;
  }

  // Update display and current expression with the result
  display.value = result;
  currentExpression = result.toString();
}

// Function to add square to the expression
function square() {
  display.value += '²';
  currentExpression += '**2';
}

// Function to handle square root
function squareRoot() {
  if (currentExpression.endsWith('Math.sqrt(')) {
    // If already dealing with square root, complete the expression
    display.value = display.value.slice(0, -1) + ')';
    currentExpression = currentExpression.slice(0, -9) + ')';
  } else {
    // If not, add the square root function to the expression
    display.value += '√(';
    currentExpression += 'Math.sqrt(';
  }
}

// Functions to handle trigonometric functions
function sine() {
  display.value += 'sin(';
  currentExpression += 'Math.sin(';
}

function cosine() {
  display.value += 'cos(';
  currentExpression += 'Math.cos(';
}

function tangent() {
  display.value += 'tan(';
  currentExpression += 'Math.tan(';
}

// Base URL for API calls
const baseUrl = 'http://localhost:3000';

// Function to fetch data from the server
function getData(limit, type) {
  fetch(baseUrl + `/api/get_history?limit=${limit}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      noteList = data;
      if (type === 'input') {
        display.value = noteList.length ? noteList[noteList.length - 1]['note'].split('=')[1].trim() : '';
        currentExpression = display.value;
      } else {
        renderList();
      }
    })
    .catch(error => {
      console.log('Fetch error: ', error);
      noteList = [];
      renderList();
    });
}

// Function to add history record
function addHistory(data) {
  fetch(baseUrl + '/api/add_history', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data && data.id) {
        getData(10);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Function to render history list
function renderList() {
  let html = '';
  noteList.forEach((i, j) => {
    html += `<p>${j + 1}. ${i.note}</p>`;
  });
  document.querySelector('.history_container').innerHTML = html;
}

// Event listener for 'ans' element click event
document.querySelector('#ans').addEventListener('click', function () {
  getData(1, 'input');
});
