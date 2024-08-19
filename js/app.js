
document.addEventListener("DOMContentLoaded", () => {
    /// Close the notification section when the close button is clicked
    const closeButton = document.querySelector('#notify .notify-close img');
    const notifySection = document.querySelector('#notify');

    closeButton.addEventListener('click', () => {
        notifySection.style.display = 'none';
    });
  
    // Control the side menu
    const menuIcon = document.querySelector('.menu-icon img');
    const sideMenu = document.querySelector('#side-menu');
    const closeMenuIcon = document.querySelector('.close-menu svg');

    if (menuIcon && sideMenu && closeMenuIcon) {
        // Open the menu when the hamburger icon is clicked
        menuIcon.addEventListener('click', () => {
            sideMenu.classList.add('open');
        });

        // Close the menu when the close icon is clicked
        closeMenuIcon.addEventListener('click', () => {
            sideMenu.classList.remove('open');
        });

        // Close the menu if clicked outside of it
        document.addEventListener('click', (event) => {
            if (!sideMenu.contains(event.target) && !menuIcon.contains(event.target)) {
                sideMenu.classList.remove('open');
            }
        });
    }
    
      // Email validation for the newsletter form
      const form = document.querySelector("#newsletter-form");
      const emailInput = form?.querySelector(".email-input");
      const emailError = document.querySelector("#email-error");
  
      if (form && emailInput && emailError) {
          form.addEventListener("submit", (event) => {
              // Prevent form submission if the email is invalid
              if (!isValidEmail(emailInput.value)) {
                  event.preventDefault();
                  emailError.style.display = "block"; 
              } else {
                event.preventDefault();
                emailError.style.display = "none"; 
                emailInput.value = ""; 
                console.log("Email successfully registered!"); 
            }
          });
      }
  
      // Function to validate email
      function isValidEmail(email) {
          // Basic regular expression for email validation
          const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
          return emailPattern.test(email);
      }
});

