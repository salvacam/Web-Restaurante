window.addEventListener("load", function () {
    var menuOculto = document.getElementById("menuOculto");
    var flechaAbajo = document.getElementById("flechaAbajo");
    var num = parseInt(window.innerHeight);
    var numFlecha = 75;
    window.addEventListener("scroll", function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log("scrollTop: " + scrollTop);
        if (scrollTop > num) {
            menuOculto.removeAttribute("hidden");
        } else {
            menuOculto.setAttribute("hidden", "");
        }

        if (scrollTop > numFlecha) {
            flechaAbajo.setAttribute("hidden", "");
        } else {
            flechaAbajo.removeAttribute("hidden");
        }
    });
    
    var imgs = new Array('../img/fondo1.jpg', '../img/fondo2.jpg', '../img/fondo3.jpg', '../img/fondo4.jpg');
    
    //var imgs = new Array('../img/fondo3_menu.jpg', '../img/fondo2_menu.jpg', '../img/fondo1_menu.jpg');
    

    function preCargarImg() {
        var lista = [];
        var i;
        for (i = 0; i < imgs.length; i++) {
            lista[i] = document.createElement('img');
            lista[i].src = imgs[i];
        }
        return lista;
    }
    
    preCargarImg();
});