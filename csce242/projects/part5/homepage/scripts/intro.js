const images = [
    "homeimages/fordm.jpg",
    "homeimages/chevroletcor.jpeg",
    "homeimages/dodgehc.avif",
    "homeimages/mercedesamg.jpg"
];

let current = 0;

const carImage = document.getElementById("car-image");

document.getElementById("next").onclick = () => {

    current++;

    if (current == images.length) {
        current = 0;
    }

    carImage.src = images[current];
};

document.getElementById("previous").onclick = () => {
    
    current--;

    if (current < 0) {
        current = images.length - 1;
    }

    carImage.src = images[current];
};