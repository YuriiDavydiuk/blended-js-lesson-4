// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.


const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const box = document.querySelector(".box");

decrease.addEventListener("click", handleClick)

function handleClick() {
    let currentWidth = parseInt(box.style.width) || box.offsetWidth;
    let currentHeight = parseInt(box.style.height) || box.offsetHeight
  
    let newWidth = currentWidth - 20;
    let newHeight = currentHeight - 20;

    box.style.width = (currentWidth - 20) + "px"
    box.style.height = (currentHeight -20) + "px"
}

increase.addEventListener("click", handleIncreaseClick)

function handleIncreaseClick() {
    let currentWidth = parseInt(box.style.width) || box.offsetWidth;
    let currentHeight = parseInt(box.style.height) || box.offsetHeight;

    box.style.width = (currentWidth + 20) + "px";
    box.style.height = (currentHeight + 20) + "px"
}