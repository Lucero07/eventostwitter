function agreagarTwitter() {
    var texto = document.getElementById('comentarios').value;
    var autor = document.getElementById('autor').value;
    if (texto === '') {
        alert("No estas agregando un Twit's?");
    } else if (autor === '') {
        alert("No estas agregando el Autor?");
    } else {
        var textos = "Tweeet: " + texto + "<br>" + "Autor: " + autor + "<hr>";
        var article = document.createElement('article');
      

        article.innerHTML = textos === '' ? '' : textos
              document.getElementById('lista_comentarios').appendChild(article);

        //Limpiar las entradas
        document.getElementById('comentarios').value = "";
        document.getElementById('autor').value = "";
        document.getElementById("num_caracteres").innerHTML = 140;
      };
};

var contador = document.getElementById('comentarios');
contador.addEventListener('keypress', contadorCaracteres);
var inicio = 140;

function contadorCaracteres() {
    if (inicio > 0) {
        inicio -= 1;
        var numCaracteres = document.getElementById("num_caracteres");
        numCaracteres.innerHTML = inicio;
    } else {
        alert("No puedes escribir mas! :(");
    };
};



document.getElementById('contador_click').innerHTML =0;
var contaClick = document.getElementById('contador_click');
window.addEventListener('click',contadorClick);
var inicioClick = 0;


function contadorClick() {
inicioClick+=1;

}
