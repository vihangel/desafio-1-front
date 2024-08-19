const feedbackContainer = document.querySelector('.feedback-container');
const prevButton = document.querySelector('.icon-controller svg:first-child');
const nextButton = document.querySelector('.icon-controller svg:last-child');
const card = document.querySelector('.feedback-card');
const cw = document.querySelector('#footer .cw'); // Referência ao elemento .cw dentro de #footer
const blur = document.querySelector('.blur-row .blur'); // Referência ao elemento .blur
const emptyCard = document.querySelector('.empty-card'); // Referência ao elemento .empty-card

let cardWidth;
let maxScroll;

// Função para calcular a largura do card, o tamanho máximo de rolagem, e ajustar a largura do empty-card
function updateSizes() {
    cardWidth = card.offsetWidth + 20; // Inclui 20px ao tamanho do card
    const containerWidth = feedbackContainer.scrollWidth;
    const cwWidth = cw.offsetWidth;
    const blurWidth = blur.offsetWidth; // Obtém a largura do .blur
    if (window.innerWidth > 1024) {
    // Ajusta a largura do .empty-card para ser igual ao .blur
    emptyCard.style.minWidth = `${blurWidth}px`;}

    // Calcula o máximo de rolagem com base na largura do cw e do feedbackContainer
    maxScroll = containerWidth - cwWidth;
}

// Função para iniciar o scroll na posição correta se a tela for maior que 1024px
function initializeScroll() {
    if (window.innerWidth > 1024) {
        feedbackContainer.scrollLeft = cardWidth;
    }
}

// Chama a função para definir o tamanho inicial
updateSizes();

// Atualiza os tamanhos quando a janela é redimensionada
window.addEventListener('resize', updateSizes);

// Chama a função para inicializar o scroll após a página carregar
window.addEventListener('load', initializeScroll);

// Scroll manual por arrasto
feedbackContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - feedbackContainer.offsetLeft;
    scrollLeft = feedbackContainer.scrollLeft;
    feedbackContainer.classList.add('active');
});

feedbackContainer.addEventListener('mouseleave', () => {
    isDown = false;
    feedbackContainer.classList.remove('active');
});

feedbackContainer.addEventListener('mouseup', () => {
    isDown = false;
    feedbackContainer.classList.remove('active');
});

feedbackContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - feedbackContainer.offsetLeft;
    const walk = (x - startX) * 1; // Ajuste da velocidade de rolagem
    feedbackContainer.scrollLeft = Math.min(Math.max(scrollLeft - walk, 0), maxScroll);
});

// Scroll ao clicar nos botões
nextButton.addEventListener('click', () => {
    const newScrollLeft = feedbackContainer.scrollLeft + cardWidth;
    feedbackContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

prevButton.addEventListener('click', () => {
    const newScrollLeft = feedbackContainer.scrollLeft - cardWidth;
    feedbackContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});
