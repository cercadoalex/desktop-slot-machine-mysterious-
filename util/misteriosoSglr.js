"use strict";
var configuracion;
var IP = configuracion.IP;
let Puerto = 4773;


let url = `http://${IP}:${Puerto}/Myhub`;
console.log(url);

const ajaxJson = async (url) => await (await fetch(url)).json();


function CargarPozosIniciales() {

    let urlPozo = `http://${IP}:${Puerto}/api/Iniciales/GetConfiguraciones`;
    ajaxJson(urlPozo)
        .then(data => {
            let nroPozo = data.NroPozos;
            for (let index = 0; index < nroPozo; index++) {

                let iditem = `odo${index}`;
                const element = data.ListaPozo[index];

                let odoItem = document.getElementById(iditem);
                odoItem.style.display = 'block';

                console.log('entro1', element.MisteryId, element.Actual);


                let idted = `odometer${element.MisteryId}`;
                let textOdo = document.getElementById(idted);
                textOdo.innerHTML = element.Actual;




                console.log('POZOSS MONTO', element.Actual.toFixed(2));


                // console.log('MISTERI ID VALOR', data.ListaPozo[index].MisteryId)
            }

        }).catch((err) => {
            console.log('Error', err);
        });
}



var connection = new signalR.HubConnectionBuilder().withUrl(url).withAutomaticReconnect().build();

connection.onreconnected((connectionId) => {
    console.log('RECONECNTADO');
    CargarPozosIniciales();
});


connection.on("OpenWinPlayerScreen", function (nromachine, mount, message) {
    console.log('SIGNALRRECIVIDO', nromachine, mount, message);
    ///mensaje de ganador , abrir modal
    let monto = mount.toFixed(2);

    sessionStorage.setItem('ganador', monto);
    sessionStorage.setItem('maquina', nromachine);
    window.location.href = './ganador.html'



    //console.log('GANADOR MISTERIOSO', monto)

});

connection.on("MysteryList", function (lista) {

    let idted = `odometer${lista.misteryId}`;
    let textOdo = document.getElementById(idted);
    textOdo.innerHTML = lista.actual;





});

connection.start().then(function () {
    console.log('CONECTADO');
    CargarPozosIniciales();

}).catch(function (err) {
    console.log('NO CONECTADO');



    return console.error(err.toString());
});