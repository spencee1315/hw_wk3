# Password Generator - Homework 3, UW Coding Bootcamp

## Description

For the third week of the UW Coding Bootcamp my homework invited me to build a password generator that enables employees to generate random passowrds based on criteria that they've selected. The app I built runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It has a clean, polished, and responsive user interface that adapts to multiple screen sizes. It allows the user to select the length and character types of the password they would like to generate and will then allow the user to copy it to the clipboard. 

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Built With

* [GitHub](https://github.com/spencee1315/hw_wk3)
* [Net Comber](https://www.net-comber.com/charset.html)

## Deployed Link

* [See Live Site](https://spencee1315.github.io/hw_wk3/)

## Preview of Working Site

![Image1](./Assets/PwGenerator_1.png)

## Code Snippet
This code snippet...........

```javascript 
// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  // 1. init pw var
  // 2. Filter out unchecked types
  // 3. Loop over length call generator function for each type
  // 4. Add final pw to the pw var and return it

  let generatedPassword = '';

  // need to be able to count number of checked items

  const typesCount = lower + upper + number + symbol;

  console.log('typesCount: ', typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (
    item => Object.values(item)[0]
  );

  // console.log('typesArr: ', typesArr);

  // pt. 2 
    if(typesCount === 0) {
      return '';
    }

  // pt. 3
    for(let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        // console.log('funcName: ', funcName);

        generatedPassword += randomFunc[funcName]();
      });
    }

    console.log(generatedPassword.slice(0, length));

    const finalPassword =  generatedPassword.slice(0, length);

    document.getElementById("password").innerHTML = finalPassword;

    return finalPassword;
}

//Generator functions - https://www.net-comber.com/charset.html
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=+_-|?<>/<>,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}
```

### Authors

* **Elliott Spencer**

### Contact Information

* [Link to Portfolio Site](https://spencee1315.github.io/hw_wk2/)

* [Link to Github](https://github.com/spencee1315)

* [Link to LinkedIn](https://www.linkedin.com/in/elliott-spencer-886a9818/)

- - -
MIT License

Copyright (c) [2021] [Elliott Spencer]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
