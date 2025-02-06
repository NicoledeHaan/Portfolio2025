document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll('nav ul li a');
  var currentURL = window.location.href;

  links.forEach(function(link) {
    if (link.href === currentURL) {
      link.classList.add('active');
    }
  });
});


window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 20) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});




function filterProjects(category) {
  const allProjects = document.querySelectorAll('.project_block');
  allProjects.forEach(project => {
      if (project.classList.contains(category) || category === 'all') {
          project.style.display = 'block';
      } else {
          project.style.display = 'none';
      }
  });

  const allText = document.querySelectorAll('.project_block p');
  allText.forEach(text => {
      if (text.classList.contains(category) || category === 'all') {
          text.parentNode.style.display = 'block'; // Ensures the whole block is shown
      } else {
          text.parentNode.style.display = 'none';
      }
  });

  // Set active button styling
  const allButtons = document.querySelectorAll('.filter_button');
  allButtons.forEach(button => {
      if (button.getAttribute('onclick').includes(category)) {
          button.classList.add('active');
      } else {
          button.classList.remove('active');
      }
  });
}



// taal toggle //
document.addEventListener('DOMContentLoaded', function() {
    const enButton = document.getElementById('en-button');
    const nlButton = document.getElementById('nl-button');
  
    // Set default language to English
    setLanguage('en');
    enButton.classList.add('active'); // Set EN button as active
  
    enButton.addEventListener('click', function() {
        setLanguage('en');
        enButton.classList.add('active');
        nlButton.classList.remove('active');
    });
  
    nlButton.addEventListener('click', function() {
        setLanguage('nl');
        nlButton.classList.add('active');
        enButton.classList.remove('active');
    });
  
    function setLanguage(language) {
        const elements = document.querySelectorAll('[data-lang-en], [data-lang-nl]');
        elements.forEach(function(element) {
            if (language === 'en') {
                element.textContent = element.getAttribute('data-lang-en');
            } else {
                element.textContent = element.getAttribute('data-lang-nl');
            }
        });
  
        // Show/hide language sections
        document.querySelectorAll('.lang-en, .lang-nl').forEach(function(el) {
            if (el.classList.contains(`lang-${language}`)) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }
  });
  


// Slider //
let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slidesToShow = Math.floor(document.querySelector('.slider-container').offsetWidth / slides[0].offsetWidth);
    const maxSlide = totalSlides - slidesToShow;

    currentSlide +=  step;
    if (currentSlide > maxSlide+1) {
        currentSlide=0;
    }
    
    else if (currentSlide < 0){
        currentSlide = maxSlide+1;
    }
    
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * slides[0].offsetWidth}px)`;
    updateButtonVisibility(currentSlide, maxSlide);
}

function updateButtonVisibility(currentSlide, maxSlide) {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');


    if (currentSlide === 0) {
        prevButton.style.visibility = 'hidden';
    } else {
        prevButton.style.visibility = 'visible';
    }

    if (currentSlide === maxSlide+1) {
        nextButton.style.visibility = 'hidden';
    } else {
        nextButton.style.visibility = 'visible';
    }
}

// Initialize button visibility on page load
updateButtonVisibility(currentSlide, document.querySelectorAll('.slide').length - Math.floor(document.querySelector('.slider-container').offsetWidth / document.querySelector('.slide').offsetWidth));


// Event listeners for navigation buttons
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
