// 1 - отримай body елемент і виведи його в консоль;
const bodyElement = document.body;
console.log("1:", bodyElement);

// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector("#title");
console.log("2:", title);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector(".list");
console.log("3:", list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
document.querySelectorAll("[data-topic]").forEach((el) => {
  console.log("4:", el);
});

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const data = document.querySelector("[data-topic]");
console.log("5:", data);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const elements = document.querySelectorAll("[data-topic]");
const lastElement = elements[elements.length - 1];
console.log("6:", lastElement);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const h1 = document.querySelector("h1");
const h1Neighbor = h1.nextElementSibling;
console.log("7:", h1Neighbor);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3 = document.querySelectorAll("h3");
h3.forEach((element) => {
  console.log(`8:`, element);
});

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
const h3A = document.querySelectorAll("h3");
h3A.forEach((element) => {
  element.classList.add("active");
});

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const nav = document.querySelector('li[data-topic="navigation"]');
console.log("10:", nav);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
nav.style.backgroundColor = "yellow";
console.log("11:", nav);

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const p = document.querySelector('[data-topic="navigation"] p');
p.textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const man = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log("13:", man);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
man.style.backgroundColor = "lightblue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const header = document.querySelector(".completed");
console.log("15:", header);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const deleteElem = document.querySelector(".completed");
const liElem = deleteElem.closest("li");
liElem.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newP = document.createElement("p");
newP.textContent = "Об'єктна модель документа (Document Object Model)";
h1.insertAdjacentElement("afterend", newP);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const ul = document.querySelector("ul");
const newLi = document.createElement("li");

const newH3 = document.createElement("h3");
newH3.textContent = "Властивість innerHTML";

const newPpp = document.createElement("p");
newPpp.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево";
newLi.appendChild(newH3);
newLi.appendChild(newPpp);

ul.appendChild(newLi);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

ul.insertAdjacentHTML(
  "beforeend",
  `<li><h3>Властивість innerHTML test</h3><p>test</p></li>`,
);

// 20 - очисти список
ul.innerHTML = "";

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
