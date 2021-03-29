
let myImage = document.querySelector('img');

myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if (mySrc === 'images/sphere1.png') {
            myImage.setAttribute('src', 'images/sphere2.png');
        } else {
            myImage.setAttribute('src', 'images/sphere1.png');
        }
}

let myButton = document.querySelector('button');

myButton.onclick = function() {
    setUserName();
  }

let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Morgan is cool, ' + myName;
    }
}

