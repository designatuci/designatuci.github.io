// Redirect to HTTPS
if (location.protocol != 'https:') {
    // location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
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