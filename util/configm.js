const fs = require('fs')

var str = fs.readFileSync('config.json', 'utf8');
configuracion = JSON.parse(str);

var IP = configuracion.IP;

var StateVideo = configuracion.StateVideo;
var FolderMystery = configuracion.FolderMystery;
var FolderGanador = configuracion.FolderGanador;


if (StateVideo) {
    console.log('video')
    //video
    var element = document.getElementById('transmitir');
    element.innerHTML =
        `<video autoplay loop>
        <source src="file://localhost/${FolderMystery}" type="video/mp4">
    </video>`;

} else {
    console.log('imagen')

    //img
    var element = document.getElementById('transmitir');
    element.innerHTML =
        `<img src="file://localhost/${FolderMystery}" alt="">`;

}









for (let index = 0; index < 4; index++) {
    let id = `odo${index}`;

    const element = configuracion.Coordenadas[index];
    let left = document.getElementById(id);
    left.style.left = `${element.X}px`;
    let top = document.getElementById(id)
    top.style.top = `${element.Y}px`;

    let size = document.getElementById(id);
    size.style.fontSize = `${element.Size}em`;


}


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
    configuracion.Coordenadas.map((dato) => {
        if (dato.key == i) {

            dato.Size = s;
        }
        return dato;

    });


    fs.writeFile("config.json", JSON.stringify(configuracion), function (err) {
        if (err) console.log('error', err);
    });
}