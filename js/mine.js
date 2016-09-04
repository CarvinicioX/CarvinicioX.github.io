function Nav() {
    if (document.getElementById("navOpenCloseButton").innerHTML.charAt(5) === 'n') {
        document.getElementById("mySidenav").style.width = "175px";
        document.getElementById("main").style.marginLeft = "175px";
        document.getElementById("player").style.marginLeft = "175px";
        document.getElementById("spanOpenClose").style.marginLeft = "175px";
        document.getElementById("sendMail").style.marginLeft = "175px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("navOpenCloseButton").innerHTML= "skip_previous";
    } else if (document.getElementById("navOpenCloseButton").innerHTML.charAt(5) === 'p') {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("player").style.marginLeft = "0";
        document.getElementById("spanOpenClose").style.marginLeft = "0";
        document.getElementById("sendMail").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
        document.getElementById("navOpenCloseButton").innerHTML = "skip_next";
    }
}

function email() {
    if (document.getElementById("sendMail").style.visibility === "visible") {
        document.getElementById("main").style.visibility = "visible";
        document.getElementById("sendMail").style.visibility = "hidden";
        document.getElementById("sendMail").style.height = "0";
    } else if (document.getElementById("sendMail").style.visibility = "hidden") {
        document.getElementById("main").style.visibility = "hidden";
        document.getElementById("sendMail").style.visibility = "visible";
        document.getElementById("sendMail").style.height = "450px";
    }
    if (document.getElementById("navOpenCloseButton").innerHTML.charAt(5) === 'p') {
        Nav();
    }
}

function aboutMain() {
    if (document.getElementById("sendMail").style.visibility === "visible") {
        email();
    } else if (document.getElementById("navOpenCloseButton").innerHTML.charAt(5) === 'p') {
        Nav();
    }
}

function attach() {
    
}

function sendMailHover() {
    
}