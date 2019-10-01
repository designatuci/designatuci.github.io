// Redirect to HTTPS
if (location.protocol != 'https:') {
    if (window.location.hostname != "localhost") {
        location.href = "https://" + window.location.hostname + window.location.pathname
    }
}


// Mobile navigation UI code
var mobileNav = false

function toggleMobileNav() {
    if (mobileNav) {
        mobileNav = false
        document.getElementById("navMobile").className = ""
    } else {
        mobileNav = true
        document.getElementById("navMobile").className = "open"
    }
}