const form = document.querySelector("#sign-up-form");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password + .error-message");
const confirmPassword = document.querySelector("#confirm-password");

form.addEventListener("submit", (e) => {
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        password.classList.add("error");
        passwordError.style.visibility = "visible";
        confirmPassword.classList.add("error");
    }
    else {
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        passwordError.style.visibility = "hidden";
    }
});

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value === password.value) {
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        passwordError.style.visibility = "hidden";
    }
});