function buildFizzBuzz(min, max) {
	let counter = min;
	const maxValue = max;
	const fizBuzzContainer = document.querySelector("[data-fizz-buzz]");
	const listContainer = document.createDocumentFragment();

	// Build the list items
	while (counter <= maxValue) {
		const li = document.createElement("li");
		li.classList.add("list-item");

		let fizzBuzzClass = getFizzBuzz(counter);
		if (fizzBuzzClass) {
			li.classList.add(fizzBuzzClass);
		}

		// Add the number as text
		let textNode = document.createTextNode(counter);
		li.appendChild(textNode);
		listContainer.appendChild(li);
		counter++;
	}

	fizBuzzContainer.appendChild(listContainer);
}

function getFizzBuzz(number) {
	let type = "";

	if (number % 15 === 0) {
		type = "fizz-buzz";
	} else if (number % 3 === 0) {
		type = "fizz";
	} else if (number % 5 === 0) {
		type = "buzz";
	}

	return type;
}

function getClassName(element) {
	const classList = ["fizz", "buzz", "fizz-buzz"];
	const elementClassList = [].slice.call(element.classList);
	const className = elementClassList
		.map((listItem) => {
			return listItem;
		})
		.reduce((matchedItem, item) => {
			if (classList.indexOf(item) !== -1) {
				matchedItem = item;
			}
			return matchedItem;
		}, "");

	return className;
}

// Event Listener
document.addEventListener("click", (event) => {
	const className = getClassName(event.target);
	const list = document.getElementById("fizz-buzz-list");
	const tempList = list.cloneNode(true);
	const listItems = tempList.querySelectorAll("li");

	listItems.forEach((item) => {
		item.classList.remove("fade-out");
		item.removeAttribute("aria-hidden");

		if (className && !item.classList.contains(className)) {
			item.classList.add("fade-out");
			item.setAttribute("aria-hidden", "true");
		}
	});

	list.innerHTML = "";
	list.appendChild(tempList);
});

buildFizzBuzz(1, 100);
