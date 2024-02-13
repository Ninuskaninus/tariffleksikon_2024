import { tariffLeksikon } from "./tariffNames.js";


export function frontUi() {
    wordA();
    wordB();
    wordD();
    wordE();
    wordF();
    wordG();
    wordH();
    wordI();
    wordJ();
    wordK();
    wordL();
    wordM();
    wordN();
    wordO();
    wordP();
    wordR();
    wordS();
    wordT();
    wordU();
    wordV();
    wordY();
    wordØ();
    wordÅ();
}

function wordA() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordAHead = document.createElement("h1");
    wordAHead.id = "letterA";
    wordAHead.textContent = "A";
    wordDiv.appendChild(wordAHead);
    tariffLeksikon.A.forEach(word => {
        const wordA = document.createElement("a");
        wordA.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordA);
        wordA.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordB() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordBHead = document.createElement("h1");
    wordBHead.id = "letterB";
    wordBHead.textContent = "B";
    wordDiv.appendChild(wordBHead);
    tariffLeksikon.B.forEach(word => {
        const wordB = document.createElement("a");
        wordB.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordB);
        wordB.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordD() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordDHead = document.createElement("h1");
    wordDHead.id = "letterD";
    wordDHead.textContent = "D";
    wordDiv.appendChild(wordDHead);
    tariffLeksikon.D.forEach(word => {
        const wordD = document.createElement("a");
        wordD.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordD);
        wordD.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordE() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordEHead = document.createElement("h1");
    wordEHead.textContent = "E";
    wordEHead.id = "letterE";
    wordDiv.appendChild(wordEHead);
    tariffLeksikon.E.forEach(word => {
        const wordE = document.createElement("a");
         wordE.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordE);
        wordE.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordF() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordFHead = document.createElement("h1");
    wordFHead.textContent = "F";
    wordFHead.id = "letterF";
    wordDiv.appendChild(wordFHead);
    tariffLeksikon.F.forEach(word => {
        const wordF = document.createElement("a");
         wordF.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordF);
        wordF.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordG() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordGHead = document.createElement("h1");
    wordGHead.textContent = "G";
    wordGHead.id = "letterG";
    wordDiv.appendChild(wordGHead);
    tariffLeksikon.G.forEach(word => {
        const wordG = document.createElement("a");
         wordG.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordG);
        wordG.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordH() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordHHead = document.createElement("h1");
    wordHHead.textContent = "H";
    wordHHead.id = "letterH";
    wordDiv.appendChild(wordHHead);
    tariffLeksikon.H.forEach(word => {
        const wordH = document.createElement("a");
            wordH.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordH);
        wordH.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordI() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordIHead = document.createElement("h1");
    wordIHead.textContent = "I";
    wordIHead.id = "letterI";
    wordDiv.appendChild(wordIHead);
    tariffLeksikon.I.forEach(word => {
        const wordI = document.createElement("a");
        wordI.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordI);
        wordI.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordJ() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordJHead = document.createElement("h1");
    wordJHead.textContent = "J";
    wordJHead.id = "letterJ";
    wordDiv.appendChild(wordJHead);
    tariffLeksikon.J.forEach(word => {
        const wordJ = document.createElement("a");
        wordJ.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordJ);
        wordJ.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordK() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordKHead = document.createElement("h1");
    wordKHead.textContent = "K";
    wordKHead.id = "letterK";
    wordDiv.appendChild(wordKHead);
    tariffLeksikon.K.forEach(word => {
        const wordK = document.createElement("a");
        wordK.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordK);
        wordK.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordL() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordLHead = document.createElement("h1");
    wordLHead.textContent = "L";
    wordLHead.id = "letterL";
    wordDiv.appendChild(wordLHead);
    tariffLeksikon.L.forEach(word => {
        const wordL = document.createElement("a");
        wordL.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordL);
        wordL.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordM() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordMHead = document.createElement("h1");
    wordMHead.textContent = "M";
    wordMHead.id = "letterM";
    wordDiv.appendChild(wordMHead);
    tariffLeksikon.M.forEach(word => {
        const wordM = document.createElement("a");
        wordM.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordM);
        wordM.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordN() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordNHead = document.createElement("h1");
    wordNHead.textContent = "N";
    wordNHead.id = "letterN";
    wordDiv.appendChild(wordNHead);
    tariffLeksikon.N.forEach(word => {
        const wordN = document.createElement("a");
        wordN.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordN);
        wordN.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordO() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordOHead = document.createElement("h1");
    wordOHead.textContent = "O";
    wordOHead.id = "letterO";
    wordDiv.appendChild(wordOHead);
    tariffLeksikon.O.forEach(word => {
        const wordO = document.createElement("a");
        wordO.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordO);
        wordO.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordP() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordPHead = document.createElement("h1");
    wordPHead.textContent = "P";
    wordPHead.id = "letterP";
    wordDiv.appendChild(wordPHead);
    tariffLeksikon.P.forEach(word => {
        const wordP = document.createElement("a");
        wordP.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordP);
        wordP.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordR() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordRHead = document.createElement("h1");
    wordRHead.textContent = "R";
    wordRHead.id = "letterR";
    wordDiv.appendChild(wordRHead);
    tariffLeksikon.R.forEach(word => {
        const wordR = document.createElement("a");
        wordR.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordR);
        wordR.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordS() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordSHead = document.createElement("h1");
    wordSHead.textContent = "S";
    wordSHead.id = "letterS";
    wordDiv.appendChild(wordSHead);
    tariffLeksikon.S.forEach(word => {
        const wordS = document.createElement("a");
        wordS.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordS);
        wordS.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordT() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordTHead = document.createElement("h1");
    wordTHead.textContent = "T";
    wordTHead.id = "letterT";
    wordDiv.appendChild(wordTHead);
    tariffLeksikon.T.forEach(word => {
        const wordT = document.createElement("a");
        wordT.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordT);
        wordT.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordU() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordUHead = document.createElement("h1");
    wordUHead.textContent = "U";
    wordUHead.id = "letterU";
    wordDiv.appendChild(wordUHead);
    tariffLeksikon.U.forEach(word => {
        const wordU = document.createElement("a");
        wordU.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordU);
        wordU.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordV() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordVHead = document.createElement("h1");
    wordVHead.textContent = "V";
    wordVHead.id = "letterV";
    wordDiv.appendChild(wordVHead);
    tariffLeksikon.V.forEach(word => {
        const wordV = document.createElement("a");
        wordV.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordV);
        wordV.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordY() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordYHead = document.createElement("h1");
    wordYHead.textContent = "Y";
    wordYHead.id = "letterY";
    wordDiv.appendChild(wordYHead);
    tariffLeksikon.Y.forEach(word => {
        const wordY = document.createElement("a");
        wordY.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordY);
        wordY.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordØ() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordØHead = document.createElement("h1");
    wordØHead.textContent = "Ø";
    wordØHead.id = "letterØ";
    wordDiv.appendChild(wordØHead);
    tariffLeksikon.Ø.forEach(word => {
        const wordØ = document.createElement("a");
        wordØ.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordØ);
        wordØ.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}

function wordÅ() {
    const tariffContainer = document.getElementById("tariffContainer");
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("frifag-leksikon-container");
    const wordÅHead = document.createElement("h1");
    wordÅHead.textContent = "Å";
    wordÅHead.id = "letterÅ";
    wordDiv.appendChild(wordÅHead);
    tariffLeksikon.Å.forEach(word => {
        const wordÅ = document.createElement("a");
        wordÅ.href = '/pages/tariff.html?word=' + encodeURIComponent(word);
        wordDiv.appendChild(wordÅ);
        wordÅ.textContent = word;
        tariffContainer.appendChild(wordDiv);
    });
}




