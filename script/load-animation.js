function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elementTop = rect.top;
    var elementBottom = rect.bottom;

    var isVisible = elementTop < (window.innerHeight - 120) && elementBottom >= 0;
    return isVisible;
}

let welcometext = document.getElementById("welcome-text");
let animationTargets = document.querySelectorAll(".animation-trigger");

if (isScrolledIntoView(welcometext)){
    welcometext.classList.add("animated");
}

document.onscroll = (event) => { 
    animationTargets.forEach(element => {
        if (isScrolledIntoView(element)){
            element.classList.add("animated");
        }
    });
};