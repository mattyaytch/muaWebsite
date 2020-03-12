var bookMe = document.getElementById("bookMe");

function bookNow() {
    var bookingScreen = document.getElementById("bookingScreen");

    if (bookingScreen.style.opacity === "0") {
        bookingScreen.style.opacity = "100%";
    } else {
        bookingScreen.style.opacity = "0";
    }
}