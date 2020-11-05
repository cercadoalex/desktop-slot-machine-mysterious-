   const el = document.getElementById('odo0');
   const el2 = document.getElementById('odo1');
   const el3 = document.getElementById('odo2');
   const el4 = document.getElementById('odo3');



   el.addEventListener('mousedown', mousedown1);
   el2.addEventListener('mousedown', mousedown2);
   el3.addEventListener('mousedown', mousedown3);
   el4.addEventListener('mousedown', mousedown4);

   function mousedown1(e) {
       window.addEventListener('mousemove', mousemove);
       window.addEventListener('mouseup', mouseup);

       let prevX = e.clientX;
       let prevY = e.clienteY;

       let X1;
       let Y1;

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

           X1 = X;
           Y1 = Y;
           console.log(X, Y);





       }

       function mouseup(e) {
           stateOdometer = false;
           Coordenadas(X1, Y1, 0);

           window.removeEventListener('mousemove', mousemove);
           window.removeEventListener('mouseup', mouseup);

       }
   }

   function mousedown2(e) {
       window.addEventListener('mousemove', mousemove);
       window.addEventListener('mouseup', mouseup);

       let prevX = e.clientX;
       let prevY = e.clienteY;

       let X2;
       let Y2;

       function mousemove(e) {
           stateOdometer = true;
           let newX = prevX - e.clientX;
           let newY = prevY - e.clientY;

           const rect = el2.getBoundingClientRect();
           el2.style.left = rect.left - newX + "px";
           el2.style.top = rect.top - newY + "px";

           prevX = e.clientX;
           prevY = e.clientY;

           /*valor que se deben guardar*/
           let X = rect.left - newX;
           let Y = rect.top - newY;

           X2 = X;
           Y2 = Y;
           //console.log(X, Y);

       }

       function mouseup(e) {
           stateOdometer = false;
           Coordenadas(X2, Y2, 1);


           window.removeEventListener('mousemove', mousemove);
           window.removeEventListener('mouseup', mouseup);

       }
   }

   function mousedown3(e) {
       window.addEventListener('mousemove', mousemove);
       window.addEventListener('mouseup', mouseup);

       let prevX = e.clientX;
       let prevY = e.clienteY;

       let X3;
       let Y3;

       function mousemove(e) {
           stateOdometer = true;
           let newX = prevX - e.clientX;
           let newY = prevY - e.clientY;

           const rect = el3.getBoundingClientRect();
           el3.style.left = rect.left - newX + "px";
           el3.style.top = rect.top - newY + "px";

           prevX = e.clientX;
           prevY = e.clientY;

           /*valor que se deben guardar*/
           let X = rect.left - newX;
           let Y = rect.top - newY;
           //console.log(X, Y);
           X3 = X;
           Y3 = Y;

       }

       function mouseup(e) {
           stateOdometer = false;
           Coordenadas(X3, Y3, 2);

           window.removeEventListener('mousemove', mousemove);
           window.removeEventListener('mouseup', mouseup);

       }
   }

   function mousedown4(e) {
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

           const rect = el4.getBoundingClientRect();
           el4.style.left = rect.left - newX + "px";
           el4.style.top = rect.top - newY + "px";

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
           Coordenadas(X4, Y4, 3);

           window.removeEventListener('mousemove', mousemove);
           window.removeEventListener('mouseup', mouseup);

       }
   }