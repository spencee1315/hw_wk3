//DOM elements
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Getting the values in event listner
generateEL.addEventListener('click', () =>{
  const length = +lengthEL.value;
  const hasLower = lowercaseEL.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numbersEL.checked;
  const hasSymbol = symbolsEL.checked;

  // confirming the type of character within the console
  // console.log(typeof length);
  // confirming if they are checked within the console
  // console.log(hasLower, hasUpper, hasNumber, hasSymbol);
  
  // Passing values into a function, being put in the result element
  resultEL.innerHTML = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length
  );
});

// Copy password to clipboard
clipboardEL.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEL.innerText;

  if(!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard!');
});

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
// console.log(String.fromCharCode(97));
// console.log(Math.floor(Math.random() * 26) + 97);
// console.log(getRandomLower());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());