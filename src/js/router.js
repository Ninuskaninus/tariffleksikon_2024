import { frontUi } from "./tariffList.js";
import { tariffSort } from "./tariffSort.js";
import { toTop } from "./toTop.js";
import { tariffSearch } from "./tariffSearch.js";
import { windowLocation } from "./windowLocation.js";


if (window.location.pathname === '/pages/tariff.html') {
    windowLocation();
} else {
    frontUi();
    tariffSort();
    toTop();
    tariffSearch();
}



