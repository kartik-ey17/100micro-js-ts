const message = document.getElementById("message");
const charCount = document.getElementById("charCount");
const remainCount = document.getElementById("remainCount");
const warn = document.getElementById("warn");
const counter = document.querySelector(".counter");

const maxLength = 200;
message.addEventListener("input" , function() {
    const currentLen = message.value.length;
    const remaining = maxLength - currentLen;
    charCount.textContent = `${currentLen}/${maxLength} characters`;
    remainCount.textContent = `${remaining} characters remaining`;

    if (remaining < 20) {
        warn.textContent = "char limit boutta reach"
        counter.classList.add("warning");
    } else {
        counter.classList.remove("warning");
    }
    if (remaining === 0) {
        warn.textContent = "Character Limit reached !!";
    } else {
        warn.textContent = "";
    }
});

const copyButton = document.getElementById("copyButton");
const copyStatus = document.getElementById("copyStatus");
copyButton.addEventListener("click" , function() {
    navigator.clipboard.writeText(message.value);
    copyStatus.textContent = "Text copied successfully!";
})
