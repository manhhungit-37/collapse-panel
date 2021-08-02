const heading = document.getElementsByClassName('heading');
const fas = document.getElementsByClassName('fas');
const text = document.getElementsByClassName("text");

for (let i = 0; i < heading.length; i++) {
  heading[i].onclick = () => {
    if (!text[i].style.maxHeight) {
      text[i].style.maxHeight = text[i].scrollHeight + "px";
      fas[i].classList.add("rotate-90");
    }
    else {
      text[i].style.maxHeight = null;
      fas[i].classList.remove("rotate-90");
    }
  }
}
