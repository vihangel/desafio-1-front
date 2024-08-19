document.addEventListener("DOMContentLoaded", () => {
    const ratings = document.querySelectorAll('.product .rating');

    ratings.forEach(rating => {
        const ratingElement = rating.querySelector('p');
        /// Parte fracionaria do rating
        const ratingValue = parseFloat(ratingElement.textContent.split('/')[0]); 
        const totalStars = 5; 

        // Cria a div star-container
        const starsContainer = document.createElement('div');
        starsContainer.classList.add('star-container');
    

        // Adiciona as estrelas ao star-container
        for (let i = 0; i < totalStars; i++) {
            const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            star.setAttribute("class", "star");
            star.setAttribute("viewBox", "0 0 24 24");

            const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.setAttribute("points", "12,2 15,9 23,9 17,14 19,21 12,17 5,21 7,14 1,9 9,9");
            star.appendChild(polygon);

            starsContainer.appendChild(star);
        }

        // Adiciona o star-container dentro do rating antes do <p>
        rating.insertBefore(starsContainer, ratingElement);

        // Captura a largura total do star-container após adicionar as estrelas
        const starContainerWidth = starsContainer.offsetWidth;

        // Cria a div .cover que cobre a parte faltante
        const cover = document.createElement('div');
        cover.classList.add('cover');

        const coverWidth = ((totalStars-ratingValue) * starContainerWidth/totalStars);
        cover.style.width = `${coverWidth}px`;
  

        // Adiciona o cover ao star-container
        starsContainer.appendChild(cover);
    });
});
