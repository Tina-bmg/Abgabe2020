"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http"); // ein url link wird aufgerufen
var A08Server;
(function (A08Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port) //wenn es kein Port gibt wird die zahl 8100 ausgegeben. 
        port = 8100;
    let server = Http.createServer(); // neuer server wird erstellt 
    server.addListener("request", handleRequest); //anfragen bearbeiten 
    server.addListener("listening", handleListen); //anfragen abfangen
    server.listen(port);
    //Ausführen bei Start
    function handleListen() {
        console.log("Listening"); //Methoden aufruf ohne Rückgabewert
    }
    //Ausführen bei Anfragen
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Methodenaufruf
        //Parameter erstellen und den Kopf des Dokuments (http-Header)
        _response.setHeader("content-type", "text/html; charset=utf-8"); //gibt die Zeichncordierung des Dokuments an und gibt den Conten-Typ an
        _response.setHeader("Access-Control-Allow-Origin", "*"); // gibt an, ob die Antwort mit dem Anfordern von Code vom angegebenen Ursprung geteilt werden kann.
        _response.write(_request.url); // als Anforderungs-Antwort-Protokoll zwischen einem Client und einem Server.
        console.log(_request.url); //Teilaufgabe, die request.url wird in der Serverkonsole ausgegeben
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map