const lines = [
    "Bilal Gafoor",
    "data protection consultant"
];

const textLineElement = document.getElementById("textLine");
// const firstPartElement = document.querySelector(".first-part");
let currentIndex = 0;

function loopText() {
    textLineElement.innerText = lines[currentIndex];
    currentIndex = (currentIndex + 1) % lines.length;
    
    firstPartElement.style.opacity = 0;
    setTimeout(() => {
        firstPartElement.style.opacity = 1;
    }, 500); // Delay the opacity change to match the transition duration
}

setInterval(loopText, 2000); // Change text every 2 seconds (2000 milliseconds)

const togglebtn=document.querySelector('.toggle-btn')
const togglebtnicon=document.querySelector('.toggle-btn i')
const dropdownmenu=document.querySelector('.dropdown')


togglebtn.onclick = function(){

    dropdownmenu.classList.toggle('open')
}