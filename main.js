const heading = document.getElementsByClassName('heading');
const text = document.getElementsByClassName('text');
const fas = document.getElementsByClassName('fas');


const displayList = Array(heading.length);

for (let i = 0; i < heading.length; i++) {
  heading[i].onclick = () => {
    if (!displayList[i]) {
      text[i].classList.remove("text-none");
      text[i].classList.add("text-block");
      fas[i].classList.remove("fa-chevron-right");
      fas[i].classList.add("fa-chevron-down");
      displayList[i] = true;
    }
    else {
      text[i].classList.remove("text-block");
      text[i].classList.add("text-none");
      fas[i].classList.remove("fa-chevron-down");
      fas[i].classList.add("fa-chevron-right");
      displayList[i] = false;
    }
  }
}

console.log(text);
console.log(displayList);