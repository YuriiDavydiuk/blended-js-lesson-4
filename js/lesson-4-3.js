// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

const input = document.querySelector(".js-username-input");

input.addEventListener("input", handleInput);

function handleInput() {
  if (input.value.length > 6) {
    input.classList.add("success");
    input.classList.remove("error");
  } else {
    input.classList.add("error");
    input.classList.remove("success");
  }
}

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

input.addEventListener("focus", handleFocus)

function handleFocus() {
  if (input.value.length === 0) {
    input.classList.add("error")
    input.classList.remove("success")
  } else {
    input.classList.add("success")
    input.classList.remove("error")
  }

}

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

input.addEventListener("blur", handleBlur)

function handleBlur() {
  if(input.value.length === 0) {
    input.classList.add("error")
    input.classList.remove("success")
  } else {
    input.classList.add("success")
    input.classList.remove("error")
  }
}

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector(".js-contact-form")
const checkBox = document.querySelector(".js-policy-checkbox")
const submit = document.querySelector(".js-contact-form-submit")
const span = document.querySelector(".js-username-output")

input.addEventListener("input", handleInputT)

function handleInputT() {
  if (input.value.length > 0) {
    span.textContent = input.value
  } else {
    span.textContent = "Anonymous"
  }
}

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
  event.preventDefault();

  const userName = input.value.trim()
  const isChecked = checkBox.checked; 

  if(userName !== "" && isChecked) {
    const userData = { userName }
    console.log("Дані користувача:", userData);
    
    input.value = "";
    checkBox.checked = false;
    span.textContent = "Anonymous"
  } else {
    alert("Помилка: введіть ім'я та підтвердьте чекбокс!")
  }
}

