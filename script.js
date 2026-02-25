const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {

    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')) {
        toggleBtn.textContent = 'Dark Mode';
    } else {
        toggleBtn.textContent = 'Light Mode';
    }
});

const introText = "University Student | C Programmer | Unity Developer";
let index = 0;

function typeEffect() {
    const heroParagraph = document.querySelector('header p');
    if (index < introText.length) {
        heroParagraph.innerHTML += introText.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

window.onload = () => {
    document.querySelector('header p').innerHTML = "";
    typeEffect();
};