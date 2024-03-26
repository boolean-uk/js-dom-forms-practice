const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const li = document.createElement("li");
  li.innerText = `Name: ${name.value} 
                  E-mail: ${email.value}`;

  list.append(li);
});

console.log(form);
console.log(name);
console.log(email);
