namespace Produkt {

    window.addEventListener("load", init);

    let contentDiv: HTMLDivElement;
    let pGesamtpreis: HTMLParagraphElement;
    let gesamtPreis: number;

    function init(_event: Event): void {
        contentDiv = <HTMLDivElement>document.querySelector(".warenliste");
        pGesamtpreis = <HTMLParagraphElement>document.querySelector("#total");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);

        console.log(localStorage);
        update();
    }

    function update(): void {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index: number = 0; index < localStorage.length; index++) {
            let key: string = <string>localStorage.key(index);
            let artikeljson: string = <string>localStorage.getItem(key);

            let item: Produkt = <Produkt>JSON.parse(artikeljson);

            gesamtPreis += item._preis;
            erstelleInhalt(item);
        }
        setGesamtpreis();
    }

 
    function erstelleInhalt(_inputArticle: Produkt): void {
        //Div erstellen
      
        
        let newDiv: HTMLDivElement = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputArticle._name;
        console.log(newDiv.id);
        //Bild erstellen
        
      
        let bildElement: HTMLImageElement = document.createElement("img");
        newDiv.appendChild(bildElement);
        bildElement.src = _inputArticle._img;
        console.log(bildElement);
        //Namen geben
     
        
        let name: HTMLParagraphElement = document.createElement("h3");
        newDiv.appendChild(name);
        name.innerHTML = _inputArticle._name;
        //Preis festlegen
    
        
        let price: HTMLParagraphElement = document.createElement("p");
        newDiv.appendChild(price);
        price.innerHTML = "" + _inputArticle._preis;
        newDiv.setAttribute("preis", price.innerHTML);
        //Button
       
        let kaufen: HTMLButtonElement  = document.createElement("button");
        newDiv.appendChild(kaufen);
        kaufen.innerHTML = "Löschen";
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }


    function handleRemoveArticle(this: Produkt, _event: Event): void {
        localStorage.removeItem(this._name);
        update();
    }

    //Gesamtpreis in Header plazieren
    function setGesamtpreis(): void {
        pGesamtpreis.innerHTML = "" + gesamtPreis;
    }


    function handleRemoveAll(_event: Event): void {
        localStorage.clear();
        update();
    }
}