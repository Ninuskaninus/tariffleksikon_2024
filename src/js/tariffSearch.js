import { tariffLeksikon } from './tariffNames.js';
for (const letterObj of Object.values(tariffLeksikon)) {
    if (Array.isArray(letterObj)) {
        for (const word of letterObj) {
        }
    } 
}

const searchContainer = document.querySelector('.frifag-tariff-search-container');
const searchInput = document.getElementById('frifagTariffSearch');
const searchLabel = document.getElementById('frifagTariffLabel');
const searchButton = document.getElementById('frifagTariffBtn');
const searchResultContainer = document.getElementById('frifagSearchResultContainer');
const searchNoMatch = document.getElementById('noMatchSearch');


export function tariffSearch() {
    hideLabel();
    searchTariff();
}

function hideLabel() {
    searchInput.addEventListener('focus', function() {
        searchLabel.style.display = 'none';
    });

    searchInput.addEventListener('blur', function() {
        if (!searchInput.value.trim()) {
            searchLabel.style.display = 'flex';
        }
    });
}

function searchTariff() {
    searchInput.addEventListener('input', function() {
        const searchValue = searchInput.value.trim().toLowerCase();
        let hasMatch = false; 

        if (searchValue.length > 0) {
            searchResultContainer.innerHTML = '';
            for (const letterObj of Object.entries(tariffLeksikon)) {
                const words = letterObj[1];
                for (const word of words) {
                    if (word.toLowerCase().includes(searchValue)) {
                        const result = document.createElement('a');
                        result.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
                        result.textContent = word;
                        searchResultContainer.appendChild(result);
                        hasMatch = true; 
                    }
                }
            }
        }

        if (!hasMatch || searchValue.length === 0) {
            searchResultContainer.innerHTML = '';
            searchNoMatch.style.display = searchValue.length === 0 ? 'none' : 'block';
        } else {
            searchNoMatch.style.display = 'none';
        }
    });
}



