
// var images = ['image1.jpeg', "image2.jpeg", "image3.jpeg"];

// function getRandomIndex(imgArray) {
//     return Math.floor(Math.random() * imgArray.length);
// }
// var rand = getRandomIndex(images);
// function displayRandomImage() {
//     var randomIndex = rand;
//     document.getElementById('randomImage').src = images[randomIndex];
// }
// document.body.style.backgroundColor = 'rgba(12, 30, 90, 0.8)';

// document.addEventListener('DOMContentLoaded', displayRandomImage);
var images = ['image1.jpeg', "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg", "image6.jpeg"];
// var images = ['test.jpeg'];
function getRandomIndex(imgArray) {
    return Math.floor(Math.random() * imgArray.length);
}

var rand = getRandomIndex(images);

function displayRandomImage() {
    var randomIndex = rand;
    var imgElement = document.getElementById('randomImage');
    imgElement.src = images[randomIndex];

    imgElement.onload = function () {
        var img = new Image();
        img.src = imgElement.src;
        img.crossOrigin = "Anonymous";
        img.onload = function () {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

            var r = 0, g = 0, b = 0, count = 0;
            for (var i = 0; i < imageData.length; i += 4) {
                r += imageData[i];
                g += imageData[i + 1];
                b += imageData[i + 2];
                count++;
            }

            r = Math.floor(r / count);
            g = Math.floor(g / count);
            b = Math.floor(b / count);

            var avgColor = `rgb(${r}, ${g}, ${b})`;
            document.body.style.backgroundColor = avgColor;
            var darkerColor = `rgb(${Math.floor(r * 0.8)}, ${Math.floor(g * 0.8)}, ${Math.floor(b * 0.8)})`;
            document.querySelector('.image-container').style.borderColor = avgColor;
            document.querySelector('header').style.backgroundColor = darkerColor;
            document.querySelector('footer').style.backgroundColor = darkerColor;
        }
    };
}

document.addEventListener('DOMContentLoaded', displayRandomImage);
