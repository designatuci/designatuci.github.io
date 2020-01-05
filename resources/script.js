//
// Ready
//
function ready(wait = 0) {
    setTimeout(() => {
        document.body.className = "ready"
    }, 200+wait);
}