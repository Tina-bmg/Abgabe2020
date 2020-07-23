"use strict";
var Produkt;
(function (Produkt) {
    window.addEventListener("load", init);
    let contentDiv;
    let pGesamtpreis;
    let gesamtPreis;
    function init(_event) {
        contentDiv = document.querySelector(".warenliste");
        pGesamtpreis = document.querySelector("#total");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        console.log(localStorage);
        update();
    }
    function update() {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let artikeljson = localStorage.getItem(key);
            let item = JSON.parse(artikeljson);
            gesamtPreis += item._preis;
            erstelleInhalt(item);
        }
        setGesamtpreis();
    }
    function erstelleInhalt(_inputArticle) {
        //Div erstellen
        let newDiv = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputArticle._name;
        console.log(newDiv.id);
        //Bild erstellen
        let bildElement = document.createElement("img");
        newDiv.appendChild(bildElement);
        bildElement.src = _inputArticle._img;
        console.log(bildElement);
        //Namen geben
        let name = document.createElement("h3");
        newDiv.appendChild(name);
        name.innerHTML = _inputArticle._name;
        //Preis festlegen
        let price = document.createElement("p");
        newDiv.appendChild(price);
        price.innerHTML = "" + _inputArticle._preis;
        newDiv.setAttribute("preis", price.innerHTML);
        //Button
        let kaufen = document.createElement("button");
        newDiv.appendChild(kaufen);
        kaufen.innerHTML = "Löschen";
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this._name);
        update();
    }
    //Gesamtpreis in Header plazieren
    function setGesamtpreis() {
        pGesamtpreis.innerHTML = "" + gesamtPreis;
    }
    function handleRemoveAll(_event) {
        localStorage.clear();
        update();
    }
})(Produkt || (Produkt = {}));
//# sourceMappingURL=ScriptKorb.js.map