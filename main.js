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
    if (
        !phone.value.match(
          /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
        )
      ) {
        phone.classList.add("error");
        errorMessage.textContent = "Phone number needs to be exactly 10 numbers";
        return;
      }
    console.log('submit')
};

const form = document.querySelector("form");
form.addEventListener("submit", submit);