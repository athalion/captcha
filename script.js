function validateCaptcha() {
    const captchaText = document.getElementById('captcha-text').textContent;
    const userInput = document.getElementById('captcha-input').value;

    if (userInput === captchaText) {
        document.getElementById('message').textContent = "Captcha verified!";
        document.getElementById('message').style.color = "green";
    } else {
        document.getElementById('message').textContent = "Captcha incorrect. Try again.";
        document.getElementById('message').style.color = "red";
    }
}