// code from https://codepen.io/Milleus/pen/YzKOjoO 
let typed = "";
export function startType(pun, index, element) {
  if (index < pun.length) {
    typed += pun.charAt(index);
    element.innerHTML = typed;
    index++;
    setTimeout(function() {
      startType(pun, index, element);
    }, 100);
  } else {
    setTimeout(function() {
      element.classList.add("highlight");
    },1000);

    setTimeout(function() {
      element.classList.remove("highlight");
      typed = "";
      element.innerHTML = typed;
      startType(getRandomPun(), 0, element);
    }, 2500);
  }
}

export function getRandomPun() {
  const puns = [
   "Discover",
   "Develop",
   "Deploy"
  ];
  const index = Math.floor(Math.random() * puns.length);

  return puns[index];
}
