console.log("Starting");

function mainfunction() {
	const innerCont = document.getElementById("container"); //Innew BOXES CONST
	const maxCountNum = document.getElementById("max-count");
	let lastlId = 0;
	let maxCount = 10;
	const Max = 100;
	const Min = 0;

	function addHandlers() {
		//Starting function
		const adding = document.getElementById("add");
		adding.addEventListener("click", onPress);
		const addingRandom = document.getElementById("random");
		random.addEventListener("click", randomElement);
		const clearing = document.getElementById("clear");
		clearing.addEventListener("click", clearElement);
		maxCountNum.onchange = onMaxChange;
		// maxCountNum.oninput = (event) => console.log(event.target.value);
	}
	addHandlers();

	function addingEle(parent, tag, id, classList = "", text) {
		const newEl = document.createElement("div");
		if (id !== null) newEl.id = id;
		newEl.classList.add(...classList);
		newEl.innerText = text;
		innerCont.appendChild(newEl);
	}

	//ADDING

	function onPress(event) {
		// addingEle(innerCont, "div", null, ["numberBox", "boxsizing"], "Box");

		for (let i = 1; i <= Max; i++) {
			event.createElement("div");
			event.classList = "box" + i;
			event.appendChild(innerCont);
			// addingEle(innerCont, "div", null + i, ["numberBox", "boxsizing"], "" + i);
			if (i % 3 === 0 && i % 5 === 0) {
				// addingEle(
				// 	innerCont,
				// 	"div",
				// 	null + i,
				// 	["numberBox", "boxsizing", "boxFizzBuzz"],
				// 	"FizzBuzz " + i
				// );
			} else if (i % 3 === 0 && i % 5 !== 0) {
				// addingEle(
				// 	innerCont,
				// 	"div",
				// 	null + i,
				// 	["numberBox", "boxsizing", "boxFizz"],
				// 	"Fizz " + i
				// );
			} else if (i % 5 === 0 && i % 3 !== 0) {
				// addingEle(
				// 	innerCont,
				// 	"div",
				// 	null + i,
				// 	["numberBox", "boxsizing", "boxBuzz"],
				// 	"Buzz " + i
				// );
			}
		}
	}
	//ADDING RANDOM
	function randomElement() {
		console.log("random of boxes");
		for (let i = 1; i <= maxCount; i++) {
			const id = "box-id" + lastlId;
			lastlId++;
			addingEle(
				innerCont,
				"div",
				"id" + i,
				["numberBox", "boxsizing"],
				"BOX" + i
			);
		}
	}
	//REMOVES CHILDREN, SAD:(
	function clearElement() {
		console.log("clearing");
		while (innerCont.firstChild) {
			innerCont.removeChild(innerCont.firstChild);
		}
	}

	function onMaxChange() {
		const tvalue = parseInt(maxCountNum.value);
		if (tvalue > Max || tvalue <= Min) return;
		maxCount = tvalue;
		console.log(typeof maxCount);
	}
}

mainfunction();
