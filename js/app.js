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
    const SELECTED_SLIDE = 'selected';
    const FADE_IN = 'fade-in';
    const FADE_OUT = 'fade-out';
    const LAZY_SRC = 'data-lazy';

    let slideshow = document.querySelector('.portfolio-slideshow');
    let buttons = document.querySelectorAll('.categories button');
    let galleries = document.querySelectorAll('.gallery');

    // Create the tabs
    let currentPortfolioSlide = galleries[0];

    // Set any currently running animations to this variable.
    let currentOperations = [];

    function setPortfolioSlide(slide) {
        let oldSlide = currentPortfolioSlide;
        currentPortfolioSlide = slide;

        // if (oldSlide === slide) return;

        currentOperations.forEach((operation) => {
            clearTimeout(operation);
        });

        currentOperations = [];

        slideshow.querySelectorAll('.gallery.selected, .gallery.fade-in').forEach((el) => {
            hideSlide(el);
        });
        showSlide(slide);
    }

    function hideSlide(slide) {
        slide.classList.remove(FADE_IN);
        slide.classList.add(FADE_OUT);
        currentOperations.push(setTimeout(() => {
            slide.classList.remove(SELECTED_SLIDE);
            slide.classList.remove(FADE_OUT);
        }, 500));
    }

    function showSlide(slide) {
        lazyLoadImages(slide);
        slide.classList.add(FADE_IN);
        currentOperations.push(setTimeout(() => {
            slide.classList.add(SELECTED_SLIDE);
            slide.classList.remove(FADE_IN);
        }, 500));
    }

    function lazyLoadImages(slide) {
        slide.querySelectorAll('img').forEach((image) => {
            let lazySrc = image.getAttribute(LAZY_SRC);
            if (! lazySrc) return;

            image.removeAttribute(LAZY_SRC);
            image.setAttribute('src', lazySrc);
        });
    }

    // Create the slideshow
    // $(slideshow).slick({
    //     arrows: false,
    //     fade: true,
    //     accessibility: false,
    // });

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
            // $(slideshow).slick('slickGoTo', index);
            setPortfolioSlide(galleries[index]);
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
