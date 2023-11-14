













const next = document.querySelector("#next"); 
const prev = document.querySelector("#prev"); 
const currentImg = document.querySelector("#current"); 
const toateImg = document.querySelectorAll(".slide"); 
 
let currentIndex = 0; 
 
next.addEventListener("click", () => { 
    toateImg[currentIndex].classList.remove("current"); 
    currentIndex += 1; 
 
    if (currentIndex === toateImg.length) { 
        currentIndex = 0; 
    } 
 
    toateImg[currentIndex].classList.add("current"); 
}); 
 
prev.addEventListener("click", () => { 
    toateImg[currentIndex].classList.remove("current"); 
    currentIndex -= 1; 
     
    if (currentIndex < 0) { 
        currentIndex = toateImg.length - 1; 
    } 
 
    toateImg[currentIndex].classList.add("current"); 
}); 
 
 
const auto = () => { 
 
    toateImg[currentIndex].classList.remove("current"); 
    currentIndex += 1; 
 
    if (currentIndex === toateImg.length) { 
        currentIndex = 0; 
    } 
 
    toateImg[currentIndex].classList.add("current"); 
 
} 
 
setInterval(auto, 3000)