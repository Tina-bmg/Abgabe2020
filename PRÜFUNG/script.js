"use strict";
var Produkt;
(function (Produkt) {
    let warenrechner = 0;
    let preis = 0;
    // Zahl von Blase anzeigen
    let zahlAnzeige = document.createElement("p");
    // Blase Div
    let anzahlblase = document.createElement("div");
    anzahlblase.id = "anzahlblase";
    let produkt = [];
    window.addEventListener("load", init);
    function init() {
        let url = "artikel.json";
        communicate(url);
    }
    async function communicate(_url) {
        console.log("Start");
        let response = await fetch(_url);
        console.log("Response", response);
        produkt = await response.json();
        console.log("End");
        buildProducts();
    }
    function buildProducts() {
        for (let _index = 0; _index < produkt.length; _index++) {
            //Div erzeugen
            let _newDiv = document.createElement("div");
            _newDiv.setAttribute("class", "div");
            _newDiv.setAttribute("id", "produkt" + _index);
            //Produktbild hinzufügen +A
            let _newImg = document.createElement("img");
            _newImg.setAttribute("src", produkt[_index]._img);
            _newImg.setAttribute("alt", "produkt");
            _newImg.setAttribute("class", "produktbild");
            //Produktbezeichnung hinzufügen
            let _newH3 = document.createElement("h3");
            _newH3.innerHTML = produkt[_index]._name;
            document.getElementById("produkt" + _index)?.appendChild(_newH3);
            // _preis hinzufügen
            let _newPreis = document.createElement("h4");
            _newPreis.innerHTML = produkt[_index]._preis.toFixed(2) + "€";
            document.getElementById("produkt" + _index)?.appendChild(_newPreis);
            //Button hinzufügen
            let _newButton = document.createElement("button");
            _newButton.innerHTML = "Jetzt kaufen";
            document.getElementById("produkt" + _index)?.appendChild(_newButton);
            _newButton.setAttribute("preis", produkt[_index]._preis.toString());
            //"Button" in Warenkorb
            _newButton.addEventListener("click", rechner.bind(produkt[_index]));
            _newButton.setAttribute("preis", produkt[_index]._preis.toString());
            _newButton.setAttribute("name", produkt[_index]._name);
            _newButton.setAttribute("img", produkt[_index]._img);
            document.getElementById("artikel" + _index)?.appendChild(_newButton);
            switch (produkt[_index]._kategorie) {
                case "fruchteis":
                    document.getElementById("fruchteis")?.appendChild(_newDiv);
                    document.getElementById("produkt" + _index)?.appendChild(_newImg);
                    document.getElementById("produkt" + _index)?.appendChild(_newH3);
                    document.getElementById("produkt" + _index)?.appendChild(_newPreis);
                    document.getElementById("produkt" + _index)?.appendChild(_newButton);
                    break;
                case "milcheis":
                    document.getElementById("milcheis")?.appendChild(_newDiv);
                    document.getElementById("produkt" + _index)?.appendChild(_newImg);
                    document.getElementById("produkt" + _index)?.appendChild(_newH3);
                    document.getElementById("produkt" + _index)?.appendChild(_newPreis);
                    document.getElementById("produkt" + _index)?.appendChild(_newButton);
                    break;
                case "Soßen":
                    document.getElementById("Soßen")?.appendChild(_newDiv);
                    document.getElementById("produkt" + _index)?.appendChild(_newImg);
                    document.getElementById("produkt" + _index)?.appendChild(_newH3);
                    document.getElementById("produkt" + _index)?.appendChild(_newPreis);
                    document.getElementById("produkt" + _index)?.appendChild(_newButton);
                    break;
                case "Streusel":
                    document.getElementById("Streusel")?.appendChild(_newDiv);
                    document.getElementById("produkt" + _index)?.appendChild(_newImg);
                    document.getElementById("produkt" + _index)?.appendChild(_newH3);
                    document.getElementById("produkt" + _index)?.appendChild(_newPreis);
                    document.getElementById("produkt" + _index)?.appendChild(_newButton);
                    break;
                case "Waffeln":
                    document.getElementById("Waffeln")?.appendChild(_newDiv);
                    document.getElementById("produkt" + _index)?.appendChild(_newImg);
                    document.getElementById("produkt" + _index)?.appendChild(_newH3);
                    document.getElementById("produkt" + _index)?.appendChild(_newPreis);
                    document.getElementById("produkt" + _index)?.appendChild(_newButton);
                    break;
                case "Becher":
                    document.getElementById("Becher")?.appendChild(_newDiv);
                    document.getElementById("produkt" + _index)?.appendChild(_newImg);
                    document.getElementById("produkt" + _index)?.appendChild(_newH3);
                    document.getElementById("produkt" + _index)?.appendChild(_newPreis);
                    document.getElementById("produkt" + _index)?.appendChild(_newButton);
                    break;
            }
        }
        function rechner(_event) {
            warenrechner++;
            console.log(warenrechner);
            preis += parseFloat(_event.target?.getAttribute("preis"));
            console.log(preis);
            //Blase erstellen bei min 1 Artiekl
            if (warenrechner >= 0) {
                document.getElementById("artikelBlase")?.appendChild(anzahlblase);
            }
            //Zahl in der Blase anzeigen lassen
            zahlAnzeige.innerHTML = "" + warenrechner;
            document.getElementById("anzahlblase")?.appendChild(zahlAnzeige);
        }
    }
    //Ein und ausblenden der Kategorien
    function handleCategoryClick(_click) {
        switch (this.getAttribute("id")) {
            case "fruchteis":
                fruchteis();
                break;
            case "milcheis":
                milcheis();
                break;
        }
        function fruchteis() {
            document.getElementById("fruchteis").style.display = "inline-grid";
            document.getElementById("milcheis").style.display = "none";
        }
        function milcheis() {
            document.getElementById("milcheis").style.display = "inline-grid";
            document.getElementById("fruchteis").style.display = "none";
        }
    }
    //neue Varialbe + Verlinkung zu den Button
    let fruchteisAnzeigen = document.querySelector("#fruchteisbutton");
    weinAnzeigen.addEventListener("click", handleCategoryClick.bind(fruchteisAnzeigen));
    let milcheisAnzeigen = document.querySelector("#milcheisbutton");
    feinkostAnzeigen.addEventListener("click", handleCategoryClick.bind(milcheisAnzeigen));
})(Produkt || (Produkt = {}));
//# sourceMappingURL=script.js.map