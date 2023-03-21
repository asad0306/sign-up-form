const email = document.querySelector("#email");
const phone = document.querySelector("#tel");
const password = document.querySelector("#password");
const cPass = document.querySelector("#cPass");
const errorMessage = document.querySelector(".errorMessage");

const inputs = [email, phone, password, cPass, errorMessage ];

inputs.forEach((items) => {
    items.addEventListener("focusin", () => {
        errorMessage.textContent = " ";
        items.classList.remove("error");
    });
});