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