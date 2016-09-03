function Nav() {
    if (document.getElementById("navOpenCloseButton").innerHTML.charAt(0) === 'O') {
        document.getElementById("mySidenav").style.width = "175px";
        document.getElementById("main").style.marginLeft = "175px";
        document.getElementById("player").style.marginLeft = "175px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("navOpenCloseButton").innerHTML= "CLOSE";
    } else if (document.getElementById("navOpenCloseButton").innerHTML.charAt(0) === 'C') {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("player").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
        document.getElementById("navOpenCloseButton").innerHTML = "OPEN";
    }
}

function email() {
    if (document.getElementById("sendMail").style.visibility === "visible") {
        document.getElementById("sendMail").style.visibility = "hidden";
        document.getElementById("sendMail").style.height = "0px";
    } else if (document.getElementById("sendMail").style.visibility = "hidden") {
        document.getElementById("sendMail").style.visibility = "visible";
        document.getElementById("sendMail").style.height = "175px";
    }
}

function play() {
    
}

function publish() {
    
}

function attach() {
    
}

function sendMailHover() {
    
}