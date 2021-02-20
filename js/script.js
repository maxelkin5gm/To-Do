"use strict"


let buttonADD = document.querySelector('#btn');
let ul = document.querySelector('#do');
let input = document.querySelector('#input');


function getStorage() {
	let keys = Object.keys(localStorage);
	for (let key of keys) {
		var i = 1;
		let li = document.createElement('li');
		let div = document.createElement('div');
		let span = document.createElement('span');

		div.textContent = localStorage.getItem(key);
		div.className = 'text';

		span.innerHTML = '&times;'
		span.className = 'close';

		li.append(div, span);

		ul.append(li);
		li.style.opacity = '0';
		setTimeout(function () { li.style.opacity = '1'; }, 0);

		li.onclick = function () {
			this.firstElementChild.classList.toggle('checked');
			li.classList.toggle('checked');
		}

		span.onclick = function () {
			li.style.opacity = '1';
			li.style.opacity = '0';
			setTimeout(function () { span.parentNode.remove(); }, 200);
			localStorage.removeItem(key);
		};
		i++;
	}
	return i;
}

let i = getStorage();



buttonADD.onclick = function () {
	if (input.value) {
		let dataInput = input.value;
		let li = document.createElement('li');
		let div = document.createElement('div');
		let span = document.createElement('span');

		div.textContent = input.value
		div.className = 'text';

		span.innerHTML = '&times;'
		span.className = 'close';

		li.append(div, span);

		ul.append(li);
		li.style.opacity = '0';
		setTimeout(function () { li.style.opacity = '1'; }, 0);

		localStorage.setItem(input.value, input.value);
		i++;

		li.onclick = function () {
			this.firstElementChild.classList.toggle('checked');
			li.classList.toggle('checked');
		}

		span.onclick = function () {
			li.style.opacity = '1';
			li.style.opacity = '0';
			setTimeout(function () { span.parentNode.remove(); }, 300);
			localStorage.removeItem(dataInput);
		};

		input.value = '';
	}
};
