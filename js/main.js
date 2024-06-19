function puntox() {
    let input = document.getElementById('altura1');
    let value = input.value;

    if (value.length === 1 && !value.includes('.')) {
        input.value = value + '.';
    }
}

function zapateria() {
    // Obtenemos los valores ingresados en los inputs
    const cantidad = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;

    // Verificar si los campos están vacíos
    if (cantidad === "" || precio === "") {
        document.getElementById("resultadoapp1").innerHTML = "<div class='alert alert-danger' role='alert'><strong>Error:</strong> Por favor ingrese todos los datos necesarios.</div>";
        return; // Detener la ejecución de la función
    }

    // Declaración de variables 
    let subtotal = cantidad * precio;
    let p_descuento, v_descuento, t_compras;

    // Procesos
    if (cantidad < 10) {
        p_descuento = 0;
    } else if (cantidad >= 10 && cantidad < 20) {
        p_descuento = 0.10;
    } else if (cantidad >= 20 && cantidad < 30) {
        p_descuento = 0.20;
    } else if (cantidad > 30) {
        p_descuento = 0.40;
    } else {
        p_descuento = 0.40;
    }

    v_descuento = subtotal * p_descuento;
    t_compras = subtotal - v_descuento;

    // Salida
    document.getElementById("resultadoapp1").innerHTML = `<div class='alert alert-success' role='alert'><strong>Respuesta:</strong> ➞El descuento es del ${p_descuento * 100}%. <br> ➞Este descuento tiene un valor de $${v_descuento} <br> ➞El total a pagar es $${t_compras}. <img src='img/tienda.png'></div>`;
}

function identificacion() {
    // Obtenemos los valores ingresados en los inputs
    const edad = document.getElementById("edad").value;

    // Verificar si el campo está vacío
    if (edad === "") {
        document.getElementById("resultadoapp2").innerHTML = "<div class='alert alert-danger' role='alert'><strong>Error:</strong> Por favor ingrese su edad.</div>";
        return; // Detener la ejecución de la función
    }

    // Declaración de variables 
    let resultado;

    // Procesos
    if (edad <= 12) {
        resultado = "Eres un niño";
    } else if (edad > 12 && edad < 40) {
        resultado = "Eres un joven";
    } else if (edad > 40 && edad <= 60) {
        resultado = "Eres un adulto";
    } else if (edad > 60) {
        resultado = "Eres un adulto mayor";
    }

    // Salida
    document.getElementById("resultadoapp2").innerHTML = `<div class='alert alert-success' role='alert'><strong>Respuesta:</strong> ➞Su edad es ${edad} años. <br> ➞Esto indica que: ${resultado} <img src='img/edad.png'></div>`;
}


function imc() {
    // Obtenemos los valores ingresados en los inputs
    const peso = Number(document.getElementById("peso1").value);
    const altura = Number(document.getElementById("altura1").value);

    // Declaración de variables 
    let resultado;
    const indice = peso / (altura * altura);

    // Procesos
    if (indice < 18.5) {
        resultado = "Usted tiene bajo peso";
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-warning' role='alert'><strong>Respuesta:</strong> ${resultado} <img src='img/imc.png'></div>`;
    } else if (indice >= 18.5 && indice <= 24.9) {
        resultado = "Usted está en un estado normal";
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-success' role='alert'><strong>Respuesta:</strong> ${resultado} <img src='img/imc.png'></div>`;
    } else if (indice >= 25 && indice <= 29.9) {
        resultado = "Usted tiene sobrepeso";
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-warning' role='alert'><strong>Respuesta:</strong> ${resultado} <img src='img/imc.png'></div>`;
    } else if (indice >= 30 && indice <= 34.9) {
        resultado = "Usted tiene obesidad I";
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Respuesta:</strong> ${resultado} <img src='img/imc.png'></div>`;
    } else if (indice >= 35 && indice <= 39.9) {
        resultado = "Usted tiene obesidad II";
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Respuesta:</strong> ${resultado} <img src='img/imc.png'></div>`;
    } else if (indice >= 40 && indice <= 49.9) {
        resultado = "Usted tiene obesidad III";
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Respuesta:</strong> ${resultado} <img src='img/imc.png'></div>`;
    } else if (indice > 50) {
        resultado = "Usted tiene obesidad IV";
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Respuesta:</strong> ${resultado} <img src='img/imc.png'></div>`;
    }else {
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> Por favor ingrese los datos.</div>`;
        return;
    }
}


function presion_arterial() {
    // Obtenemos los valores ingresados en los inputs
    const presion = document.getElementById("presion").value;

    // Verificar si el campo está vacío
    if (presion === "") {
        document.getElementById("resultadoapp4").innerHTML = "<div class='alert alert-danger' role='alert'><strong>Error:</strong> Por favor ingrese su presión arterial.</div>";
        return; // Detener la ejecución de la función
    }

    // Declaración de variables 
    let resultado;

    // Procesos
    if (presion < 90) {
        resultado = "Baja";
        document.getElementById("resultadoapp4").innerHTML = `<div class="alert alert-info" role="alert"><strong>Respuesta:</strong> ➞Su presión arterial sistólica es de ${presion}. <br> ➞Esto indica que se encuentra ${resultado} <img src='img/hipertension.png'></div>`;
    } else if (presion < 120) {
        resultado = "Normal";
        document.getElementById("resultadoapp4").innerHTML = `<div class="alert alert-success" role="alert"><strong>Respuesta:</strong> ➞Su presión arterial sistólica es de ${presion}. <br> ➞Esto indica que se encuentra ${resultado}<img src='img/hipertension.png'></div>`;
    } else if (presion >= 120 && presion <= 139) {
        resultado = "en estado de prehipertensión";
        document.getElementById("resultadoapp4").innerHTML = `<div class="alert alert-warning" role="alert"><strong>Respuesta:</strong> ➞Su presión arterial sistólica es de ${presion}. <br> ➞Esto indica que se encuentra ${resultado} <img src='img/hipertension.png'></div>`;
    } else if (presion >= 140 && presion <= 159) {
        resultado = "Alta: Hipertensión Fase 1";
        document.getElementById("resultadoapp4").innerHTML = `<div class="alert alert-danger" role="alert"><strong>Respuesta:</strong> ➞Su presión arterial sistólica es de ${presion}. <br> ➞Esto indica que se encuentra ${resultado} <img src='img/hipertension.png'></div>`;
    } else if (presion >= 160) {
        resultado = "Alta: Hipertensión Fase 2";
        document.getElementById("resultadoapp4").innerHTML = `<div class="alert alert-danger" role="alert"><strong>Respuesta:</strong> ➞Su presión arterial sistólica es de ${presion}. <br> ➞Esto indica que se encuentra ${resultado} <img src='img/hipertension.png'></div>`;
    }

    // Salida
}
