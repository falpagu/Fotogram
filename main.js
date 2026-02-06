
const pics = [
"img/alaska-810433_1280.jpg",
"img/anime-8788959_1280.jpg",
"img/atmosphere-8752835_1280.png",
"img/blue-tit-8521052_1280.jpg",
"img/hurricane-92968_1280.jpg",
"img/lake-2896379_1280.jpg",
"img/moorente-8783210_1280.jpg",
"img/sea-2563389_1280.jpg",
"img/snow-bunting-6781122_1280.jpg",
"img/snow-leopard-cubs-8039138_1280.jpg",
"img/travel-8785493_1280.jpg",
"img/winter-1675197_1280.jpg"
];

let currentIndex = 0;

const galleryContainer = document.getElementById("gallery");
const popUp = document.getElementById("popUp");
const popUpImg = document.getElementById("popUp-img");
const picTitle = document.getElementById("picTitle");   
const closeBtn = document.getElementById("closeBtn")
const arrowLeft = document.getElementById("arrowLeft");     
const counter = document.getElementById("counter");            
const arrowRight = document.getElementById("arrowRight");  
// const galleryImages = document.querySelectorAll("#gallery img");


function render() {
    galleryContainer.innerHTML = "";   

    for (let i = 0; i < pics.length; i++) {
        const altText = pics[i].split("/").pop().split(".")[0];
        galleryContainer.innerHTML += 
        `<img 
        src=${pics[i]} 
        class ="gallery-img" 
        tabIndex = "0"
        alt = "${altText}"
        onclick="openPopUp(${i})">`;
        
    }
}
render();



function openPopUp(index) {
    currentIndex = index;
    popUpImg.src = pics[currentIndex];
    picTitle.innerHTML = pics[currentIndex].split("/").pop().split(".")[0];
    counter.innerHTML = `${currentIndex + 1}/${pics.length}`;
    popUp.showModal();
    popUp.focus();
}

function closePopUp(){
    popUp.close();
}



function arrowLeftBtn() {
 if (currentIndex > 0 ) {
    currentIndex--;
 } else {
    currentIndex = pics.length -1;
 }

 popUpImg.src = pics[currentIndex];
 picTitle.innerHTML = pics[currentIndex].split("/").pop().split(".")[0];
 counter.innerHTML = `${currentIndex + 1}/${pics.length}`;
}


function arrowRightBtn() {
    if (currentIndex < pics.length - 1 ) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

popUpImg.src = pics[currentIndex];
picTitle.innerHTML = pics[currentIndex].split("/").pop().split(".")[0];
counter.innerHTML = `${currentIndex + 1}/${pics.length}`;
}


popUp.addEventListener("keydown", function(e) {
    if(e.key === "ArrowRight") {
        arrowRightBtn();
    } else if (e.key === "ArrowLeft") {
        arrowLeftBtn();         
    } else if (e.key === "Escape")
        closePopUp();   
});     

