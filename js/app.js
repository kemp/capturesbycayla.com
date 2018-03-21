'use strict';

(function() {
    enableJavascript();
    initPortfolioSlideshow();
}());

function enableJavascript() {
    const body = document.querySelector('body');

    body.classList.remove('no-js');
    body.classList.add('js');
}

function initPortfolioSlideshow() {
    const ACTIVE_CLASS = 'active';
    const SELECTED_SLIDE = 'selected';
    const LAZY_SRC = 'data-lazy';

    let buttons = document.querySelectorAll('.categories button');
    let galleries = document.querySelectorAll('.gallery');

    // Set the current portfolio slide. If there is a number in the cache, use that. Otherwise, start with the first item.
    let slideNum = 0;

    if (typeof(Storage) !== 'undefined') {
        slideNum = sessionStorage.slide || 0;
    }

    let currentPortfolioSlide = galleries[slideNum];

    showSlide(currentPortfolioSlide);

    selectButton(buttons[slideNum]);

    function setPortfolioSlide(slide) {
        if (currentPortfolioSlide === slide) return;

        galleries.forEach(gallery => {
            hideSlide(gallery);
        });

        showSlide(slide);

        if (typeof(Storage) !== 'undefined') {
            sessionStorage.slide = Array.prototype.indexOf.call(galleries, slide);
        }

        currentPortfolioSlide = slide;
    }

    function hideSlide(slide) {
        slide.classList.remove(SELECTED_SLIDE);
    }

    function showSlide(slide) {
        lazyLoadImages(slide);
        slide.classList.add(SELECTED_SLIDE);
    }

    function lazyLoadImages(slide) {
        slide.querySelectorAll('img').forEach((image) => {
            let lazySrc = image.getAttribute(LAZY_SRC);
            if (! lazySrc) return;

            image.removeAttribute(LAZY_SRC);
            image.setAttribute('src', lazySrc);
        });
    }

    // Add an event listener to all buttons
    buttons.forEach((button, index) => {
        // Event listener: when this button is pressed, select the active button and active slide.
        button.addEventListener('click', (event) => {
            // Select the button
            selectButton(event.target);

            // then select the slide.
            setPortfolioSlide(galleries[index]);
        });
    });

    function selectButton(clickedButton) {
        // Remove the active class from all buttons...
        buttons.forEach(button => {
            button.classList.remove(ACTIVE_CLASS);
        });

        // and add the active class to the selected one.
        clickedButton.classList.add(ACTIVE_CLASS);
    }

    // Add Viewer element to each category
    for(let gallery of galleries) {
        new window.Viewer(gallery, {
            title: false,
            url: 'data-original'
        });
    }
}
