let siteheader = document.querySelector('.siteheader');

siteheader.addEventListener('mouseover', e => {
    if(e.target.getAttribute("data-sub") != null){
        siteheader.setAttribute("data-navcheck", e.target.getAttribute("data-sub"));
    }
    if(e.target.getAttribute("data-tophref") === '#contents'){
        siteheader.removeAttribute("data-navcheck");
    }
});

siteheader.addEventListener('mouseleave', e => {
    siteheader.removeAttribute("data-navcheck");
})