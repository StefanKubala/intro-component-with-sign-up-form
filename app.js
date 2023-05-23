const inputs = document.querySelectorAll(".input");

inputs.forEach(input => {
    input.addEventListener("invalid", function () {
        input.classList.add("error");
        input.nextElementSibling.classList.add("display-block")
    })
});
