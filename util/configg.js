const fs = require('fs')

var str = fs.readFileSync('config.json', 'utf8');
configuracion = JSON.parse(str);


var StateVideoGa = configuracion.StateVideo;
var FolderGanador1 = configuracion.FolderGanador;



if (StateVideoGa) {
    console.log('video')
    //video
    var elVideoG = document.getElementById('transmitirGanador');
    elVideoG.innerHTML =
        `
        <video id="video1" autoplay loop>
        <source src="file://localhost/${FolderGanador1}" type="video/mp4">
    </video>`;

} else {
    console.log('imagen')
    //img
    var elImgG = document.getElementById('transmitirGanador');
    elImgG.innerHTML =
        `<img src="file://localhost/${FolderGanador1}" alt="">`;

}







let id = `monto`;
let id1 = `maquina`;

const coordenada = configuracion.Coordenadas[4];
const coordenada1 = configuracion.Coordenadas[5];

let leftX1 = document.getElementById(id1);
leftX1.style.left = `${coordenada1.X}px`;
let topY1 = document.getElementById(id1)
topY1.style.top = `${coordenada1.Y}px`;
let em1 = document.getElementById(id1);
em1.style.fontSize = `${coordenada1.Size}em`;


//maquina

let leftX = document.getElementById(id);
leftX.style.left = `${coordenada.X}px`;
let topY = document.getElementById(id)
topY.style.top = `${coordenada.Y}px`;
let em = document.getElementById(id);
em.style.fontSize = `${coordenada.Size}em`;






let stateOdometer = false;


/*document.querySelector('section').addEventListener('click', () => {
    window.location.href = 'misterioso.html'

    let videoPlayer = document.getElementById("video1");
    videoPlayer.load();
    videoPlayer.play();
});*/

document.querySelector('section').addEventListener('keydown', (e) => {
    if (event.ctrlKey && event.keyCode == 80) {
        window.location.href = 'misterioso.html'
    } else {
        console.log("error de tecla ctrl+P");
    }

})



const el = document.getElementById('monto');
el.addEventListener('mousedown', mousedown1);

function mousedown1(e) {
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    let prevX = e.clientX;
    let prevY = e.clienteY;


    let X4;
    let Y4;


    function mousemove(e) {
        stateOdometer = true;
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = el.getBoundingClientRect();
        el.style.left = rect.left - newX + "px";
        el.style.top = rect.top - newY + "px";

        prevX = e.clientX;
        prevY = e.clientY;

        /*valor que se deben guardar*/
        let X = rect.left - newX;
        let Y = rect.top - newY;
        //console.log(X, Y);
        X4 = X;
        Y4 = Y;

    }

    function mouseup(e) {
        stateOdometer = false;
        Coordenadas(X4, Y4, 4);


        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);

    }
}


const el1 = document.getElementById('maquina');
el1.addEventListener('mousedown', mousedown2);

function mousedown2(e) {
    window.addEventListener('mousemove', mousemove2);
    window.addEventListener('mouseup', mouseup2);

    let prevX = e.clientX;
    let prevY = e.clienteY;


    let X5;
    let Y5;


    function mousemove2(e) {
        stateOdometer = true;
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = el1.getBoundingClientRect();
        el1.style.left = rect.left - newX + "px";
        el1.style.top = rect.top - newY + "px";

        prevX = e.clientX;
        prevY = e.clientY;

        /*valor que se deben guardar*/
        let X = rect.left - newX;
        let Y = rect.top - newY;
        //console.log(X, Y);
        X5 = X;
        Y5 = Y;

    }

    function mouseup2(e) {
        stateOdometer = false;
        Coordenadas(X5, Y5, 5);

        window.removeEventListener('mousemove', mousemove2);
        window.removeEventListener('mouseup', mouseup2);

    }
}






let element = document.getElementById('monto');



let size = 4.5;
element.addEventListener('mouseup', (evt) => {
    if (evt.which === 3 && stateOdometer == false) {
        size -= 0.5;
        console.log('derecho')

        let Tsizemenos = `${size}`;
        element.style.fontSize = `${size}em`;
        SizeLetra(Tsizemenos, 4);

    }
    if (evt.which === 1 && stateOdometer == false) {
        size += 0.5;
        console.log('Izquierdo')
        let Tsizemas = `${size}`;
        element.style.fontSize = `${size}em`;
        SizeLetra(Tsizemas, 4);

    }
})





let element1 = document.getElementById('maquina');

element1.addEventListener('mouseup', (evt) => {
    if (evt.which === 3 && stateOdometer == false) {
        size -= 0.5;
        console.log('derecho')
        let Tsizemenos = `${size}`;
        element1.style.fontSize = `${size}em`;
        SizeLetra(Tsizemenos, 5);
    }
    if (evt.which === 1 && stateOdometer == false) {
        size += 0.5;
        console.log('Izquierdo')
        let Tsizemas = `${size}`;
        element1.style.fontSize = `${size}em`;
        SizeLetra(Tsizemas, 5);

    }
})




























function Coordenadas(x, y, i) {

    console.log(configuracion.Coordenadas);

    configuracion.Coordenadas.map((dato) => {
        if (dato.key == i) {
            dato.X = x;
            dato.Y = y;
        }
        return dato;

    });


    fs.writeFile("config.json", JSON.stringify(configuracion), function (err) {
        if (err) console.log('error', err);
    });



}


function SizeLetra(s, i) {
    console.log('entro', s, i)
    configuracion.Coordenadas.map((dato) => {
        if (dato.key == i) {

            dato.Size = s;
        }
        return dato;

    });


    /* fs.writeFile("config.json", JSON.stringify(configuracion), function (err) {
         if (err) console.log('error', err);
     });*/
}