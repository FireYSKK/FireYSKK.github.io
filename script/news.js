const NEWSFILES = 4;
let nextFileIndex = 1;

let slideIndex = 1;
document.getElementById("prev").onclick = function() { plusSlides(-1); };
document.getElementById("next").onclick = function() { plusSlides(1); };
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("news-slides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

setInterval(() => { slideIndex += 1; showSlides(slideIndex);}, 10000);

function addNewsArticle(filename) {
    var file = new XMLHttpRequest();
    file.open("GET", "./news/" + filename + ".txt", true);
    file.onreadystatechange = function() {
        if (file.readyState === 4) {  // Файл можно парсить
            if (file.status === 200) {  // Файл найден
                text = file.responseText;
                fileText = text.split('\n');

                let newsArticle = document.createElement('div');
                newsArticle.classList.add('news-article');

                let headline = document.createElement('h2');
                headline.innerHTML = fileText[0];
                headline.setAttribute('id', filename)
                newsArticle.appendChild(headline);

                let newsImg = document.createElement('img');
                newsImg.setAttribute('src', "./news/" + filename + ".jpg")
                newsImg.setAttribute('alt', filename);
                newsArticle.appendChild(newsImg);

                for(let par = 2; par < fileText.length; par++){
                    let paragraph = document.createElement('p');
                    paragraph.innerHTML = fileText[par];
                    newsArticle.appendChild(paragraph);
                }

                document.getElementById('news-block').appendChild(newsArticle);
            }
        }
    }
    file.send();
}

function loadMoreNews() {
    for (let i = 0; i < 3; i++) {
        addNewsArticle(nextFileIndex);
        nextFileIndex = (nextFileIndex % NEWSFILES) + 1;
    }
}

loadMoreNews();

const loadMoreButton = document.getElementById("load-more");
loadMoreButton.addEventListener('click', loadMoreNews);