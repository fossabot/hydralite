// code from https://codepen.io/Milleus/pen/YzKOjoO
let typed = '';
let currentPun = ''
export function startType(pun, index, element) {
	if (index < pun.length) {
		typed += pun.charAt(index);
		element.innerHTML = typed;
		index++;
		setTimeout(function () {
			startType(pun, index, element);
		}, 100);
	} else {
		setTimeout(function () {
			element.classList.add('highlight');
		}, 1000);

		setTimeout(function () {
			element.classList.remove('highlight');
			typed = '';
			element.innerHTML = typed;
            currentPun = getRandomPun(currentPun);
			startType(currentPun, 0, element);
		}, 2500);
	}
}

export function getRandomPun(currentPun) {
	const puns = ['Discover', 'Develop', 'Deploy'];
	let pun = typed;
	if (currentPun == 'Discover') pun = puns[1];
	else if (currentPun == 'Develop') pun = puns[2];
    else if (currentPun == 'Deploy') pun = puns[0];
	else pun = puns[0];
	return pun;
}
