let count = 0

const countText = document.getElementById("count")
const incrementButton = document.getElementById("increment")
const decrementButton = document.getElementById("decrement")
const resetButton = document.getElementById("reset")

incrementButton.addEventListener("click" , function() {
    count++;
    countText.textContent = count;
});

decrementButton.addEventListener("click" , function() {
    if (countText.textContent > 0) {
        count--;
    } else {
        count = 0;
    };
    countText.textContent = count;
});

resetButton.addEventListener("click" , function() {
    count = 0;
    countText.textContent = count;
})