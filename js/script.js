"use strict"

let data = JSON.parse(localStorage.getItem('data'));
if (data == null) { data = {}; }
console.log(data);
let buttonADD = document.querySelector('#btn');
let ul = document.querySelector('#do');
let input = document.querySelector('#input');


function createElement(inputDATA, ul) {
	if (inputDATA) {
		let dataInput = inputDATA;
		let li = document.createElement('li');
		let div = document.createElement('div');
		let span = document.createElement('span');

		div.textContent = inputDATA;
		div.className = 'text';

		span.innerHTML = '&times;'
		span.className = 'close';

		li.append(div, span);

		ul.append(li);
		li.style.opacity = '0';
		setTimeout(function () { li.style.opacity = '1'; }, 0);

		// localStorage.setItem(String(inputDATA), String(inputDATA));
		data[inputDATA] = inputDATA;
		localStorage.setItem('data', JSON.stringify(data));

		li.onclick = function () {
			this.firstElementChild.classList.toggle('checked');
			li.classList.toggle('checked');
		}

		span.onclick = function () {
			li.style.opacity = '1';
			li.style.opacity = '0';
			setTimeout(function () { span.parentNode.remove(); }, 300);
			delete data[dataInput];
			if (Object.keys(data).length == 0) {
				localStorage.removeItem('data');
			} else
				localStorage.setItem('data', JSON.stringify(data));
		};
	}
};


for (let key in data) {
	createElement(key, ul);
};

buttonADD.onclick = function () {
	createElement(input.value, ul);
	console.log(Object.keys(localStorage));
	input.value = '';
};