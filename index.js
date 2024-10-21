const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let numbers = [1, 2, 3, 4, 5];
let strings = ['hello', 'world', 'javascript', 'node'];

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

function addToArr(numbers, num) {
  numbers.push(num);
  return numbers;
}

app.get('/numbers/add', (req, res) => {
  let result = addToArr(numbers, 6);
  res.json(result);
});

function addToStrings(strings, str) {
  strings.push(str);
  return strings;
}

app.get('/strings/add', (req, res) => {
  let result = addToStrings(strings, 'express');
  res.json(result);
});

function sumOfNumbers(numbersArr) {
  let sum = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    sum = sum + numbersArr[i];
  }
  return sum;
}

app.get('/numbers/sum', (req, res) => {
  let result = sumOfNumbers(numbers);
  res.json({ sum: result });
});

function findMax(numbersArray) {
  let max = numbersArray[0];

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > max) {
      max = numbersArray[i];
    }
  }
  return max;
}

app.get('/numbers/max', (req, res) => {
  let result = findMax(numbers);
  res.json({ max: result });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
