"use strict";
var configuracion;
var IP = configuracion.IP;
let Puerto = 4773;


let url = `http://${IP}:${Puerto}/Myhub`;
console.log(url);


var connection = new signalR.HubConnectionBuilder().withUrl(url).withAutomaticReconnect().build();

connection.on("CloseAnimation", function () {

    sessionStorage.clear();
    window.location.href = './misterioso.html'

});

connection.onreconnected((connectionId) => {
    console.log('RECONECNTADO');

});




connection.start().then(function () {
    console.log('CONECTADO');
}).catch(function (err) {
    console.log('NO CONECTADO');
    return console.error(err.toString());
});