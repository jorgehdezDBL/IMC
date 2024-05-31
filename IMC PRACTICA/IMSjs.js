document.getElementById('formIMC').addEventListener('submit', function(event) {
    event.preventDefault();

    var peso = parseFloat(document.getElementById('peso').value);
    var estatura = parseFloat(document.getElementById('estatura').value);

    var imc = peso / (estatura * estatura);

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Tu IMC es: ' + imc.toFixed(2);

    if (imc < 18.5) {
        resultado.innerHTML += '<br> Peso inferior al normal';
    } else if (imc < 25) {
        resultado.innerHTML += '<br> Peso normal';
    } else if (imc < 30) {
        resultado.innerHTML += '<br> Sobrepeso';
    } else {
        resultado.innerHTML += '<br> Obesidad';
    }
});