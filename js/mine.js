function Nav() {
    console.log("Fuck");
    console.log(document.getElementById("navOpenCloseButton").innerHTML);
    if (document.getElementById("navOpenCloseButton").innerHTML.charAt(0) === 'O') {
        console.log("OPEN");
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("navOpenCloseButton").innerHTML= "CLOSE";
    } else if (document.getElementById("navOpenCloseButton").innerHTML.charAt(0) === 'C') {
        console.log("CLOSE");
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
        document.getElementById("navOpenCloseButton").innerHTML = "OPEN";
    }
}