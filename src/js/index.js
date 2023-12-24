import { svgData } from "./data";

const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");
const errorText = document.getElementById("error-text");

emailForm.addEventListener("submit", e => {
    e.preventDefault();
    emailVerification();
});

const emailVerification = () => {
    let emailInputValue = emailInput.value;
    const emailRegex = /^[a-z0-9-_.]+@[a-z]+\.(com|org|cc)$/;
    if (!emailInputValue.match(emailRegex)) {
        errorText.classList.remove("hide");
    } else {
        errorText.classList.add("hide");
        emailInput.value = "";
    };
};

const getSvgHtml = () => {
    let svgHtml = "";

    svgData.forEach(item => {
        svgHtml += `
        ${item.svg}
        `
    });
    document.getElementById("logos").innerHTML = svgHtml
};

getSvgHtml();
