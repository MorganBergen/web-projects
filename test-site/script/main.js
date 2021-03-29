let myImage = document.querySelector('img');
myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if (mySrc === 'images/sphere1.png') {
            myImage.setAttribute('src', 'images/sphere2.png');
        } else {
            myImage.setAttribute('src', 'images/sphere1.png');
        }
}