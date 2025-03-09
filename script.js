function invertNavbarColor() {
    let navbar = document.getElementById("navbar");
    let bgColor = window.getComputedStyle(document.body).backgroundColor;
    
    let rgb = bgColor.match(/\d+/g);
    let brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
    
    navbar.style.color = brightness < 128 ? "white" : "black";
}

window.onload = invertNavbarColor;
window.addEventListener("scroll", invertNavbarColor);
