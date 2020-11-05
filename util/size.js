let odoitem = document.querySelectorAll('.item');


odoitem.forEach(element => {
    let size = 3;

    element.addEventListener('mouseup', (evt) => {


        let id = evt.currentTarget.id;
        numero = id.substr(3, 4);



        if (evt.which === 3 && stateOdometer == false) {
            size -= 0.5;
            let Tsizemenos = `${size}`;
            console.log('Event SIZE', size);


            element.style.fontSize = `${size}em`;
            SizeLetra(Tsizemenos, parseInt(numero));
        }
        if (evt.which === 1 && stateOdometer == false) {
            size += 0.5;
            let Tsizemas = `${size}`;
            console.log('Izquierdo');
            console.log('Event SIZE', size);


            element.style.fontSize = `${size}em`;
            SizeLetra(Tsizemas, parseInt(numero));

        }
    })

});