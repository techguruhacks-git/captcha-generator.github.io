const captchaTextbox = document.querySelector(".captcha-box input");
const refreshBtn = document.querySelector(".refresh-btn");
const captchaInputBox = document.querySelector(".captcha-input input");
const message = document.querySelector(".message");
const submitBtn = document.querySelector(".button");

let captchaText = null;

const generateCaptcha = () =>{
    const randomString = Math.random().toString(36).substring(2,7);
    const randomStringArray = randomString.split("");
    const ChangeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
    captchaText = ChangeString.join(" ");
    captchaTextbox.value = captchaText;
};


const refreshBtnClick= () =>{
    generateCaptcha();
    capthaKeyUpValidate();
    captchaInputBox.value = "";

};
const capthaKeyUpValidate = () => {
    submitBtn.classList.toggle("disabled", !captchaInputBox.value);
};

const submitBtnClick = () => {
    captchaText = captchaText
    .split("")
    .filter(char => char !== " ")
    .join("");

    message.classList.add("active");

    if(captchaInputBox.value === captchaText){
        message.innerText = "Entered captcha is Correct";
        message.style.color = "#5ff85f";
    }
    else{
        message.innerText = "Entered captcha is Incorrect";
        message.style.color = "#ff0000";

    }
}

refreshBtn.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", capthaKeyUpValidate);
submitBtn.addEventListener("click", submitBtnClick);


generateCaptcha();