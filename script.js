let form = document.querySelector("form"),
    input = document.querySelector("input"),
    error = document.querySelector(".error");

form.addEventListener("submit", function () {
    if (!input.checkValidity() || input.value === "") {
        error.classList.add("text");
        input.classList.add("not-valid");
        input.placeholder = "example@email/com";
    } else {
        error.classList.remove("text");
        input.classList.remove("not-valid");
    }
});