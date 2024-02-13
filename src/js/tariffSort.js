import { tariffLeksikon } from "./tariffNames.js";
const tariffLetter = Object.keys(tariffLeksikon);


export function tariffSort() {
    const tariffSortContainer = document.querySelector(".frifag-tariff-sort");
    for (let i = 0; i < tariffLetter.length; i++) {
        const letterButton = document.createElement("button");
        letterButton.textContent = tariffLetter[i];
        tariffSortContainer.appendChild(letterButton);


        letterButton.addEventListener("click", function () {
            const letterId = "letter" + tariffLetter[i];
            const targetElement = document.getElementById(letterId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        })
    }
}