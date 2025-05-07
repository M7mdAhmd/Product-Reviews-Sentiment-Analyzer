document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.style.setProperty('--slider-bg-color', '#1B4A99');
    let circle = document.querySelector('.circle');
    let slider = document.querySelector('.solider');
    let resultValue = document.getElementById("result").innerText.trim();
    circle.style.transition = 'transform 0.5s ease';
    slider.style.transition = 'background-color 0.5s ease';
    if (resultValue === "N/A" || resultValue === "" || resultValue === null) {
        console.log("No result available. Keeping the initial state.");
        circle.style.transform = 'translateX(0)';
        circle.classList.remove('negative', 'positive');
    } else {
        circle.classList.remove('negative', 'positive');
        if (resultValue === "Negative") {
            document.documentElement.style.setProperty('--slider-bg-color', 'red');
            circle.style.transform = 'translateX(-37.5px)';
            circle.classList.add('negative');
        } else if (resultValue === "Positive") {
            document.documentElement.style.setProperty('--slider-bg-color', 'green');
            circle.style.transform = 'translateX(37.5px)';
            circle.classList.add('positive');
        } else {
            console.log("Invalid result value.");
            circle.style.transform = 'translateX(0)';
            circle.classList.remove('negative', 'positive');
        }
    }
    const form = document.getElementById('sentiment-form');
    form.addEventListener('submit', function() {
        const button = this.querySelector('button');
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
        button.disabled = true;
    });
});
