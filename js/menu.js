const mq = window.matchMedia( "(max-width: 500px)" );
function toggleNav() {
    var element = document.getElementById("myNav");
    var p1 = document.getElementById("pl1");
    var p2 = document.getElementById("pl2");
    var p3 = document.getElementById("pl3");
    var p4 = document.getElementById("pl4");
    if (mq.matches) {
    if (element.style.height == "100%") {
        p1.style.color = "black";
        p1.style.transition = "0.4s"
        p2.style.color = "black";
        p2.style.transition = "0.4s"
        p3.style.color = "black";
        p3.style.transition = "0.4s"
        p4.style.color = "black";
        p4.style.transition = "0.4s"
        element.style.height = "0%";
    } else {
        p1.style.color = "#fff"
        p1.style.transition = "0.8s"
        p1.style.position = "relative";
        p1.style.top = "-120px"
        p1.style.right = "0px"
        p1.style.fontSize = "46px"
        p2.style.color = "#fff"
        p2.style.transition = "0.8s"
        p2.style.position = "relative"
        p2.style.top = "-120px"
        p2.style.right = "0px"
        p2.style.fontSize = "46px"
        p3.style.color = "#fff"
        p3.style.transition = "0.8s"
        p3.style.position = "relative";
        p3.style.top = "-120px"
        p3.style.right = "0px"
        p3.style.fontSize = "46px"
        p4.style.color = "#fff"
        p4.style.transition = "0.8s"
        p4.style.position = "relative";
        p4.style.top = "-120px"
        p4.style.right = "0px"
        p4.style.fontSize = "46px"
        element.style.height = "100%";
    }
}
}