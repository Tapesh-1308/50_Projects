const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const generateBtn = document.getElementById("generate");
const clipboardBtn = document.getElementById("clipboard");

// copy functionality
clipboardBtn.addEventListener("click", () => {
    const psw = resultEl.innerText;

    if(!psw) { return; }

    navigator.clipboard.writeText(psw);
    alert('Password copied to clipboard!');
});


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// generating psw
generateBtn.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = "";
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(typesArr.length === 0)
        return "";
    
    for(let i=0; i<length; i++) {
        const randFuncIdx = Math.floor(Math.random() * typesArr.length);
        const funcName = Object.keys(typesArr[randFuncIdx])[0];
        generatedPassword += randomFunc[funcName]();
    }

    return generatedPassword;
}

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
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}