

namespace Produkt {

    let warenrechner: number = 0;
    let preis: number = 0;
    // Zahl von Blase anzeigen
    let zahlAnzeige: HTMLParagraphElement = document.createElement("p");
    // Blase Div
    let anzahlblase: HTMLDivElement = document.createElement("div");
    anzahlblase.id = "anzahlblase";

    let produkt: Produkt[] = [];
    window.addEventListener("load", init);

    export interface Produkt {

        _kategorie: string;
        _img: string;
        _name: string;
        _preis: number;


    }
    
    function init(): void {
        let url: string = "artikel.json";
        communicate(url);
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        console.log("Start");
        let response: Response = await fetch(_url);
        console.log("Response", response);
        produkt = await response.json();
        console.log("End");
        buildProducts();
    }
    function saveinlocalstorage (_inputArticle: Produkt): void {
        //Artikel bauen
        let itemString: string = JSON.stringify(_inputArticle);
        let key: string = "" + _inputArticle._name; //in localstorage packen

        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }

    function buildProducts(): void {
        for (let _index: number = 0; _index < produkt.length; _index++) {
            //Div erzeugen
            let _newDiv: HTMLDivElement = document.createElement("div");
            _newDiv.setAttribute("class", "div");
            _newDiv.setAttribute("id", "produkt" + _index);

            //Produktbild hinzufügen +A
            let _newImg: HTMLElement = document.createElement("img");
            _newImg.setAttribute("src", produkt[_index]._img);
            _newImg.setAttribute("alt", "produkt");
            _newImg.setAttribute("class", "produktbild");

            //Produktbezeichnung hinzufügen
            let _newH3: HTMLHeadingElement = document.createElement("h3");
            _newH3.innerHTML = produkt[_index]._name;
            document.getElementById("produkt" + _index)?.appendChild(_newH3);

            // _preis hinzufügen
            let _newPreis: HTMLHeadingElement = document.createElement("h4");
            _newPreis.innerHTML = produkt[_index]._preis.toFixed(2) + "€";
            document.getElementById("produkt" + _index)?.appendChild(_newPreis);

            //Button hinzufügen
            let _newButton: HTMLButtonElement = document.createElement("button");
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




        function rechner(this: Produkt,_event: Event): void {
            warenrechner++;
            console.log(warenrechner);

            saveinlocalstorage(this);
        

            preis += parseFloat((<HTMLInputElement>_event.target)?.getAttribute("preis")!);
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
    function handleCategoryClick(this: HTMLDivElement, _click: MouseEvent): void {
        switch (this.getAttribute("id")) {
            case "fruchteis":
                fruchteis();
                break;
            case "milcheis":
                milcheis();
                break;
        }
        function fruchteis(): void {
            (<HTMLElement>document.getElementById("fruchteis")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("milcheis")).style.display = "none";

        }

        function milcheis(): void {
            (<HTMLElement>document.getElementById("milcheis")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("fruchteis")).style.display = "none";

        }
    }
    //neue Varialbe + Verlinkung zu den Button
    let fruchteisAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#fruchteisbutton");
    weinAnzeigen.addEventListener("click", handleCategoryClick.bind(fruchteisAnzeigen));

    let milcheisAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#milcheisbutton");
    feinkostAnzeigen.addEventListener("click", handleCategoryClick.bind(milcheisAnzeigen));


}

