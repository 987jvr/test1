button = document.querySelector(".js-go"); //variable correspondiente al botón de búsqueda
button.addEventListener('click', function () { //creamos  un evento asociado a la pulsación del botón
    search = document.querySelector("input").value; /*al hacer click la variable se actualiza 
    con el valor del recuadro input */
    console.log(search);
    //pushToDOM(search);
    búsqueda(search);
    console.log('se ha pulsado botón GO');
    reset();

})
document.querySelector(".js-userinput").addEventListener('keypress', function (e) {
    input = document.querySelector("input").value;
    //console.log(input);
    if (e.key === 'Enter') {
        search = document.querySelector("input").value;
        búsqueda(search);
        reset();
    }
})

function reset() {
    var container = document.querySelector(".js-container");
    container.innerHTML = "";
}

/* 2 Con los datos hacemos cosas */

function búsqueda(gif) {
    var url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=HrGkOQVc3WKU4wOY3NPq0BrZ2Y3EKm7S`;
    // El uso de AJAX permite recuperar y mostrar información en la página sin 
    // necesiad de frescar la página.
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load', function (e) {
        /*Cuando termine de recabar los datos los envía mediante la función pushToDOM*/
        var data = e.target.response;
        //console.log(data);
        pushToDOM(data)
    })

}

/* 3 Mostramos el resultado */


function pushToDOM(data) {
    var response = JSON.parse(data); // "ordena los datos en un array"
    var imageUrl = response.data; //la consola de depuración del navegador permite encontrar, copiar y pegar esta propiedad directamten
    console.log(response);
    //console.log(imageUrl);

    imageUrl.forEach(function (image) {
        var src = image.images.fixed_height.url;
        console.log(src);
        var container = document.querySelector(".js-container");
        //container.innerHTML='';
        container.innerHTML += "<img src=" + src + "\" class=\"container-image\">"
        /*Importante: con el += añadimos a la variable, en lugar de sustituirla con otro valor 
        Con el container-image le damos las propiedades definidias en el CSS */

    });

}
