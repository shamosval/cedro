var menu = ['', '', '']

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView:1,
    loop: true,

    direction: 'horizontal',

   

  
     // If we need pagination
     pagination: {
        el: '.pagination',
            clickable: true,
            renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
          },
      },
  
    
  
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        
        },
    
        
  });

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  slidesPerView:2,
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },



  autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      
      },
  
      
});

const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,



  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },

  effect: 'flip',
  
      
});

// Ticker
const tickerBg = document.querySelector('.ticker-bg');
const cursorFollower = document.querySelector('.cursor-follower');

// Set up the cursor follower to follow the cursor
tickerBg.addEventListener('mousemove', (e) => {
  const rect = tickerBg.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  cursorFollower.style.left = `${offsetX}px`; // Set left position
  cursorFollower.style.top = `${offsetY}px`; // Set top position
});

// Show cursor follower when hovering
tickerBg.addEventListener('mouseenter', () => {
  cursorFollower.style.opacity = 1;
});

// Hide cursor follower when leaving
tickerBg.addEventListener('mouseleave', () => {
  cursorFollower.style.opacity = 0;
});



//Modal form
const openModalButtons = document.querySelectorAll('.modal-open');
const closeModalButtons = document.querySelectorAll('.modal-close');
const modalHeader = document.querySelector('.modal-header');
const modalMain = document.querySelector('.modal-main');
const modal = document.getElementById('myModal');
const callbackButton = document.getElementById('callback'); 
const successMain = document.querySelector('.success-main');
const errorScreen = document.querySelector('.modal-header-error');



// Function to open the modal
function openModal() {
  modal.style.display = 'block';

  setTimeout(() => {
    modalHeader.classList.add('open');
    modalMain.classList.add('open');
  }, 200);

}

// Function to close the modal
function closeModal() {
  
  modalHeader.classList.remove('open');
  modalMain.classList.remove('open');
  successMain.classList.remove('open'); 
  
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500);

  
}

function showErrorHeader () {
  errorScreen.classList.add('open');

  setTimeout(() => {
    errorScreen.classList.remove('open');
  }, 3000);

}

// Function to show success screen and hide modal main
function showSuccessScreen() {
  
  let formName = document.getElementById('name').value.trim();
  let formPhone = document.getElementById('phone').value.trim();
  
  if (formName && formPhone) {
    errorScreen.classList.remove('open');
    successMain.classList.add('open');
  } else {
    showErrorHeader();
  }
    
}

// Open the modal when the .modal-open element is clicked
openModalButtons.forEach(button => {
  button.addEventListener('click', openModal);
});

// Close the modal when the .modal-close element is clicked
closeModalButtons.forEach(button => {
  button.addEventListener('click', closeModal);
});

// Show success screen and hide modal main when #callback is clicked
callbackButton.addEventListener('click', showSuccessScreen);


const svgImage = document.querySelector('.modal-close img');

svgImage.addEventListener('mouseenter', () => {
  svgImage.style.transform = 'rotate(180deg)';
  svgImage.src = svgImage.getAttribute('data-hover-src');
});

svgImage.addEventListener('mouseleave', () => {
  svgImage.style.transform = 'rotate(0)';
  svgImage.src = svgImage.getAttribute('data-original-src');
});




// Mobile menu

const burgerIcon = document.getElementById('burger_icon');
const mobClose = document.getElementById('mobClose');
const mobHeader = document.querySelector('.mob-header');
const menuItems = document.querySelector('.menu-items');

burgerIcon.addEventListener('click', () => {
  menuItems.style.display = 'block';

  setTimeout(() => {
    menuItems.classList.add('open');
    mobHeader.classList.add('open');
  }, 200);

  
  
});



// Accordion menu
const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionContents = document.querySelectorAll('.accordion-content');
const menuOpen = menuItems.classList.contains('open');

// Function to collapse all sections
function collapseAllSections() {
  accordionContents.forEach((content, index) => {
    content.style.maxHeight = null;
    const header = accordionHeaders[index];
    const menuPlus = header.querySelector('.menu-plus');
    if (menuPlus) {
      const menuPlusImage = menuPlus.querySelector('img');
      menuPlusImage.style.transform = 'rotate(0deg)';
      menuPlusImage.src = menuPlusImage.getAttribute('data-original-src');
    }
  });

  accordionHeaders.forEach(header => {
    header.classList.remove('active');
  });
}




//Close menu and collapse accordion
mobClose.addEventListener('click', () => {

  menuItems.classList.remove('open');
  mobHeader.classList.remove('open');

  setTimeout(() => {
    menuItems.style.display = 'none';
    collapseAllSections();
  }, 300);
  
});




// Click events inside accordion
accordionHeaders.forEach((header, index) => {
  header.addEventListener('click', () => {
    const content = accordionContents[index];
    const isOpen = content.style.maxHeight;
    
    // Get the .menu-plus element within the clicked header
    const menuPlus = header.querySelector('.menu-plus');
    let menuPlusImage; // Declare the variable to store the image element

    // Check if the .menu-plus element exists within the clicked header
    if (menuPlus) {
      menuPlusImage = menuPlus.querySelector('img');
    }

    accordionContents.forEach((c, i) => {
      if (i !== index) {
        c.style.maxHeight = null;
        accordionHeaders[i].classList.remove('active');

        // Check if the other header has .menu-plus element
        const otherMenuPlus = accordionHeaders[i].querySelector('.menu-plus');
        if (otherMenuPlus) {
          const otherMenuPlusImage = otherMenuPlus.querySelector('img');
          otherMenuPlusImage.style.transform = 'rotate(0deg)';
          otherMenuPlusImage.src = otherMenuPlusImage.getAttribute('data-original-src');
        }
      }
    });

    if (isOpen) {
      content.style.maxHeight = null;
      header.classList.remove('active');

      if (menuPlusImage) {
        menuPlusImage.style.transform = 'rotate(0deg)';
        menuPlusImage.src = menuPlusImage.getAttribute('data-original-src');
      }
    } else if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px';
      header.classList.add('active');

      if (menuPlusImage) {
        menuPlusImage.style.transform = 'rotate(180deg)';
        menuPlusImage.src = menuPlusImage.getAttribute('data-hover-src');
      }
    }
  });
});


// Main menu plus animation
const deskMenuItems = document.querySelectorAll('.desk-menu-item');

deskMenuItems.forEach(deskMenuItem => {
  const imgElement = deskMenuItem.querySelector('img');

  deskMenuItem.addEventListener('mouseenter', () => {
    const hoverSrc = imgElement.getAttribute('data-hover-src');
    if (hoverSrc) {
      
      imgElement.style.transition = 'transform 0.7s'; // Add transition for rotation
      imgElement.style.transform = 'rotate(180deg)'; // Apply rotation effect
      imgElement.src = hoverSrc;
    }
  });

  deskMenuItem.addEventListener('mouseleave', () => {
    const originalSrc = imgElement.getAttribute('data-original-src');
    imgElement.src = originalSrc;
    imgElement.style.transition = 'transform 0.7s'; // Add transition for rotation
    imgElement.style.transform = 'rotate(0deg)'; // Reset rotation effect
  });
});

// Footer menu
const footerMenu = document.querySelector('.footer-menu-1');
const footerSlider = document.querySelector('.footer-slider-1');

footerMenu.addEventListener('mouseenter', () => {
  footerSlider.style.transform = 'translateY(23%)';
});

footerSlider.addEventListener('mouseenter', () => {
  footerSlider.style.transform = 'translateY(23%)';
});

footerSlider.addEventListener('mouseleave', () => {
  footerSlider.style.transform = 'translateY(-100%)';
});

footerMenu.addEventListener('mouseleave', () => {
  footerSlider.style.transform = 'translateY(-100%)'; // or the initial value you want
});

// Footer menu
const footerMenu2 = document.querySelector('.footer-menu-2');
const footerSlider2 = document.querySelector('.footer-slider-2');

footerMenu2.addEventListener('mouseenter', () => {
  footerSlider2.style.transform = 'translateY(53%)';
});

footerSlider2.addEventListener('mouseenter', () => {
  footerSlider2.style.transform = 'translateY(53%)';
});

footerSlider2.addEventListener('mouseleave', () => {
  footerSlider2.style.transform = 'translateY(-100%)';
});

footerMenu2.addEventListener('mouseleave', () => {
  footerSlider2.style.transform = 'translateY(-100%)'; // or the initial value you want
});
