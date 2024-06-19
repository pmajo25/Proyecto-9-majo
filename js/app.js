document.getElementById('form_pesoIdeal').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener valores del formulario
    const sexo = document.getElementById('sexo').value;
    const edad = parseInt(document.getElementById('edadPesoIdeal').value);
    const pesoActual = parseFloat(document.getElementById('pesoActual').value); 
    let estatura = parseFloat(document.getElementById('estatura').value);

   

    let pesoIdeal, imc, calificacion;

    // Calcular peso ideal
    if (sexo === "Masculino") {
        pesoIdeal = estatura - 100 - ((estatura - 150) / 4);
    } else if (sexo === "Femenino") {
        pesoIdeal = estatura - 100 - ((estatura - 150) / 2);
    } else {
        document.getElementById("resultado").innerHTML = `<div class='alert alert-danger' role='alert'><strong>¡Error!</strong> Seleccione su sexo.</div>`;
        return;
    }

    // Convertir estatura a centímetros
    estatura = estatura / 100;

    // Calcular IMC
    imc = pesoActual / (estatura * estatura);

    // Calificar el IMC
    if (imc < 18.5) {
        calificacion = '<span class="badge text-bg-warning">Bajo peso</span>';
    } else if (imc >= 18.5 && imc <= 24.9) {
        calificacion = '<span class="badge text-bg-success">Normal</span>';
    } else if (imc >= 25 && imc <= 29.9) {
        calificacion = '<span class="badge text-bg-warning">Sobre peso</span>';
    } else if (imc >= 30 && imc <= 34.9) {
        calificacion = '<span class="badge text-bg-danger">Obesidad I</span>';
    } else if (imc >= 35 && imc <= 39.9) {
        calificacion = '<span class="badge text-bg-danger">Obesidad II</span>';
    } else if (imc >= 40 && imc <= 49.9) {
        calificacion = '<span class="badge text-bg-danger">Obesidad III</span>';
    } else if (imc >= 50) {
        calificacion = '<span class="badge text-bg-danger">Obesidad IV</span>';
    }

    // Mostrar resultados finales
    document.getElementById("resultado").innerHTML = `<div class='alert alert-dark ' role='alert'><strong>Respuesta:</strong><br>
    Sexo: ${sexo}<br>
    Edad: ${edad} años<br>
    Peso actual: ${pesoActual} kg<br>
    Altura: ${estatura} cm<br>
    IMC: ${imc.toFixed(1)} tiene ${calificacion}<br>
    Peso ideal: <span class="badge text-bg-info">${pesoIdeal.toFixed(1)} kg</span><br>
    Deberías perder: <span class="badge text-bg-dark">${(pesoActual - pesoIdeal).toFixed(1)} kg</span>
    </div>`;
});
