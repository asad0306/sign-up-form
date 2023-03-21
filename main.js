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
        if (items == password || items == cPass) {
            password.classList.remove("error");
            cPass.classList.remove("error");
        }
    });
});

const submit = (e) => {
    e.preventDefault();
    if(password.value !== cPass.value) {
        password.classList.add('error');
        cPass.classList.add('error');
        errorMessage.textContent= "Password Nahi Match Ho  raha hai gandu check kar phir se land";
        return;
    }
    console.log('submit')
};

const form = document.querySelector("form");
form.addEventListener("submit", submit);