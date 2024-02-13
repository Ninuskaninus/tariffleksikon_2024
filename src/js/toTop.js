export function toTop() {
    const toTopButton = document.getElementById("btnToTop");
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
            toTopButton.style.display = "block";
        } else {
            toTopButton.style.display = "none";
        }
    }
    toTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
