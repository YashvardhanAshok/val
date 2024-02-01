// Get the collection of elements with the class 'flower'
var flowerDivs = document.getElementsByClassName('flower');

// Define the scale factor (e.g., 1.5 for 150% scale)
var scaleFactor = 1.5;

// Loop through each element in the collection and apply the scale transformation
for (var i = 0; i < flowerDivs.length; i++) {
    flowerDivs[i].style.transform = 'scale(' + scaleFactor + ')';
}

console.log("g");
