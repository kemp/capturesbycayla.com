'use strict';

(function() {
    enabledJavascript();
    initPortfolioSlideshow();
    initTestimonialSlideshow();
}());

function enabledJavascript() {
    const body = document.querySelector('body');

    body.classList.remove('no-js');
    body.classList.add('js');
}

function initPortfolioSlideshow() {
    const ACTIVE_CLASS = 'active';

    let slideshow = document.querySelector('.portfolio-slideshow');
    let buttons = document.querySelectorAll('.categories button');
    let galleries = document.querySelectorAll('.gallery');

    // Create the slideshow
    $(slideshow).slick({
        arrows: false,
        fade: true,
        accessibility: false,
    });

    // Add an event listener to all buttons
    buttons.forEach((button, index) => {
        // Event listener: when this button is pressed, loop through all elements and remove `active` class,
        // then add the active class to that button and select it using Slick's API.
        button.addEventListener('click', (event) => {
            // Remove the active class from all elements
            buttons.forEach((b) => {
                b.classList.remove(ACTIVE_CLASS);
            });

            // Find the clicked button...
            let clickedButton = event.target;

            // and add the `active` class to it...
            clickedButton.classList.add(ACTIVE_CLASS);

            // then select it with slick.
            $(slideshow).slick('slickGoTo', index);
        });
    });

    // Add Viewer element to each category
    for(let gallery of galleries) {
        new window.Viewer(gallery, {
            title: false,
            url: 'data-original'
        });
    }
}

function initTestimonialSlideshow() {
    let slideshow = document.querySelector('.quotes');

    $(slideshow).slick({
        arrows: true,
        autoplay: true,
        dots: true,
    });
}
