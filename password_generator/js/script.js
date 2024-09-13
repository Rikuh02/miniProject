const password = document.getElementById('password');
const copy = document.getElementById('clipboard');
const password_length = document.getElementById('length'); 
const uppercase_letters = document.getElementById('uppercase');
const lowercase_letters = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const btn = document.getElementById('btn');

const randomFunction = {
	upper: getRandomUpper,
	lower: getRandomLower,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

copy.addEventListener('click', ()=> {
	const textArea = document.createElement('textarea');
	const passwordR = password.innerText;
	
	if(!passwordR){return};
	
	textArea.value = passwordR;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand('copy');
	textArea.remove();
	alert('Password copied');
})

btn.addEventListener('click', ()=> {
	const length = +password_length.value;
	const hasUppercase_letters = uppercase_letters.checked;
	const hasLowercase_letters = lowercase_letters.checked;
	const hasNumbers = numbers.checked;
	const hasSymbols = symbols.checked;
	
	password.innerText = generatePassword(length, hasUppercase_letters, hasLowercase_letters, hasNumbers, hasSymbols);
})

function generatePassword(length, upper, lower, number, symbol){
	let passwordG = '';
	const typesCaracter = upper + lower + number + symbol;
	const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	if(typesCaracter == 0){
		return '';
	}
	
	for(let i = 0; i < length; i += typesCaracter){
		typesArr.forEach(type =>{
			const funName = Object.keys(type)[0];
			passwordG += randomFunction[funName]();
		});
	}
	
	const finalPassword = passwordG.slice(0, length);
	return finalPassword;
}

function getRandomUpper(){
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower(){
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber(){
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
	
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)]
}
