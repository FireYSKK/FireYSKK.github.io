const body = document.getElementsByTagName('body')[0];
let background = document.createElement('div');

background.classList.add('main-background');

background.innerHTML = `
<img src="src/main-background.jpg" alt="main-background">
`;
body.append(background);
