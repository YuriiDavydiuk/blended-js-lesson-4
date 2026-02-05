// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const container = document.querySelector(".number-container");
const fragment = document.createDocumentFragment();

for (let i = 0; i <= 100; i++) {
  const num = randomNumber();
  const div = document.createElement("div");
  div.classList.add("number");
  div.textContent = num;

  if (num % 2 === 0) {
    div.classList.add("even");
  } else {
    div.classList.add("odd");
  }

  fragment.appendChild(div);
}
container.appendChild(fragment);
