'use strict'

    var formulario = document.querySelector("#formulario");
    var mensaje = document.querySelector(".mensaje_total");
    var numerosNegativos = document.querySelector(".mensaje_error");
    var inputpeso = document.querySelector("#input_peso");
    mensaje.style.display = "none";
    numerosNegativos.style.display = "none";

    formulario.addEventListener('submit', function() {

        var envio = document.querySelector("#envio").value;
        var peso = document.querySelector("#peso").value;
        var alto = document.querySelector("#alto").value;
        var ancho = document.querySelector("#ancho").value;
        var profundidad = document.querySelector("#profundidad").value;
        var precio_unidad = 0;
        var total_medidas = 0;
        var total_peso = 0;
        var total = 0;

        if (alto <= 0) {
            numerosNegativos.style.display = 'block';
            return false;
        }
        if (ancho <= 0) {
            numerosNegativos.style.display = 'block';
            return false;
        }
        if (profundidad <= 0) {
            numerosNegativos.style.display = 'block';
            return false;
        }


        if (envio == "aereo") {
            envio = 166;
            precio_unidad = 3.5;

            total_medidas = alto * ancho * profundidad / envio;
            total_medidas = total_medidas * precio_unidad;
            total_medidas = Math.round(total_medidas * 100) / 100;
            console.log(total_medidas);

            total_peso = peso / envio;
            total_peso = total_peso * precio_unidad;
            total_peso = Math.round(total_peso * 100) / 100;
            console.log(total_peso);

            if(total_medidas >= total_peso) {

                total = total_medidas;

                

                mensaje.style.display = "block";

                var p_mensaje = document.querySelector("#p_mensaje span");
                p_mensaje.innerHTML = total;

            }else{
                total = total_peso;

                

                mensaje.style.display = "block";

                var p_mensaje = document.querySelector("#p_mensaje span");
                p_mensaje.innerHTML = total;
            };
        } else {
            if (envio == "maritimo") {
                envio = 1718;
                precio_unidad = 15;

                total = alto * ancho * profundidad / envio;
                total = total * precio_unidad;
                total = Math.round(total * 100) / 100;

                mensaje.style.display = "block";

                var p_mensaje = document.querySelector("#p_mensaje span");
                p_mensaje.innerHTML = total;
                
            };
        };



    });

    document.querySelector("#limpiar").onclick = limpiarCampos;

    function limpiarCampos() {
        envio.value = "Aéreo";
        peso.value = "";
        alto.value = "";
        ancho.value = "";
        profundidad.value = "";
        mensaje.style.display = "none";
        numerosNegativos.style.display = 'none';
        inputpeso.style.display = "block";

    };

    function seleccionarEnvio(sel) {
    
        if(sel.value == "maritimo"){
            inputpeso.style.display= "none";
        }else{
            inputpeso.style.display= "block";  
        };
};





