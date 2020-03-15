var bookMe = document.getElementById("bookMe");

function bookNow() {
    var bookingScreen = document.getElementById("bookingScreen");

    if (bookingScreen.style.opacity === "0") {
        bookingScreen.style.opacity = "100%";
        // add close button visible to function
    } else {
        bookingScreen.style.opacity = "0";
    }

}