export function windowLocation() {
    const urlParams = new URLSearchParams(window.location.search);
    const word = urlParams.get('word');
    
    const articleHeader = document.getElementById('tariffHeader');
    articleHeader.textContent = word;
}