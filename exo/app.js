const colors = ['blue', 'yellow', 'cyan', 'red', 'green'];
let index = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
    setTimeout(changeBackgroundColor, 1000); // appel récursive
}

changeBackgroundColor();