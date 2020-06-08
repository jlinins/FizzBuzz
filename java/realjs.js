const button = document.querySelector("button");
const inputNum = document.querySelector(".num");
const p = document.querySelector("p");

button.addEventListener("click", function (e) {
	e.preventDefault();
	let num = parseInt(inputNum.value);
	const display = fizzBuzz(num);
	p.innerText = display;
});

function fizzBuzz(num) {
	let str = "";
	for (let i = 1; i <= num; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			str += "fizzbuzz ";
		} else if (i % 3 === 0) {
			str += "fizz ";
		} else if (i % 5 === 0) {
			str += "buzz ";
		} else str += `${i} `;
	}
	return str;
}
