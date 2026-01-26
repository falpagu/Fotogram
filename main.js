"use strict";

const myPics = [
    "img/pic_1.jpg",
    "img/pic_2.jpg",
    "img/pic_3.png",
    "img/pic_4.jpg",
    "img/pic_5.jpg",
    "img/pic_6.jpg",
    "img/pic_7.jpg",
    "img/pic_8.jpg",
    "img/pic_9.jpg",
    "img/pic_10.jpg",
    "img/pic_11.jpg",
    "img/pic_12.jpg"
];

let currentIndex = 0;

const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup_img");
const popupTitle = document.getElementById("popup_title");
const closeBtn = document.getElementById("closeBtn");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const currentNumber = document.getElementById("currentNumber");




for (let i = 0; i < myPics.length; i++) {
    const img = document.createElement("img");
    img.src = myPics[i];

    const fileName = myPics[i].split("/").pop().split(".")[0];
    img.alt = fileName;

    img.addEventListener("click", () => {
        currentIndex = i;
        showImage();
        popup.showModal();
        popup.focus();
    });

    gallery.appendChild(img);
}

function showImage() {
  popupImg.src = myPics[currentIndex];
  popupTitle.textContent = "Bild " + (currentIndex + 1);

  currentNumber.textContent = (currentIndex + 1) + "/" + myPics.length;
}


rightArrow.addEventListener("click", () =>  {
    currentIndex++;

    if (currentIndex >= myPics.length) {
        currentIndex = 0;
    }
    showImage();
} );

leftArrow.addEventListener("click", () => {
    currentIndex--;

    if ( currentIndex < 0 ) {
        currentIndex = myPics.length - 1;
    }
    showImage();
    
} );



closeBtn.addEventListener("click", () => {
    popup.close();
} );


popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.close();
    }
})



popup.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {
        currentIndex++;
        if(currentIndex >= myPics.length) currentIndex = 0;
        showImage();
        }

        if (e.key === "ArrowLeft") {
            currentIndex--;
            if (currentIndex < 0) currentIndex =myPics.length -1;
            showImage();
        }

        if (e.key === "Escape") {
            popup.close();
        }
});