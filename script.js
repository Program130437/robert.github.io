const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {

    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')) {
        toggleBtn.textContent = 'Dark Mode';
    } else {
        toggleBtn.textContent = 'Light Mode';
    }
});