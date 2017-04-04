function agreagarTwitter() {
    var texto = document.getElementById('comentarios').value;
    var autor = document.getElementById('autor').value;
    if (texto === '') {
        alert("No estas agregando un Twit's?");
    } else if (autor === '') {
        alert("No estas agregando el Autor?");
    } else {
        var textos = "Tweeet: " + texto + "<br>" + "Autor: " + autor;
        var article = document.createElement('article');

        article.innerHTML = textos === '' ? '' : textos
        document.getElementById('lista_comentarios').appendChild(article);
        document.getElementById('comentarios').value = "";
        document.getElementById('autor').value = "";
    }
};

function cuenta() {
    document.article[0].caracteres.value = document.article[0].texto.value.length;
};
