let flag = true;
let imgs = document.querySelector('.historic-article').querySelectorAll('.img-container');
const mediaQueryList = window.matchMedia("(max-width: 500px)");
console.log(imgs)

function setFloats() {
    Array.prototype.forEach.call(imgs, element => {
        if (flag){
            element.style.float = 'left';
        }
        else {
            element.style.float = 'right';
        }
        element.style.margin = '';
        flag = !flag;
    });
}

function removeFloats() {
    Array.prototype.forEach.call(imgs, element => {
        element.style.float = 'none';
        element.style.margin = 'auto';
    });
    flag = true;
}

if (mediaQueryList.matches){
    removeFloats();
}
else{
    setFloats();
}

mediaQueryList.addEventListener('change', e => {
    if (mediaQueryList.matches){
        removeFloats();
    }
    else{
        setFloats();
    }
});