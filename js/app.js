document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.querySelector('#notify .notify-close img');
    const notifySection = document.querySelector('#notify');

    closeButton.addEventListener('click', () => {
        notifySection.style.display = 'none';
    });
});
