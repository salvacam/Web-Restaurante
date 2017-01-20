window.addEventListener("load", function () {
    var flechaAbajo = document.getElementById("flechaAbajo");
    var numFlecha = 75;
    window.addEventListener("scroll", function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
        if (scrollTop > numFlecha) {
            flechaAbajo.setAttribute("hidden", "");
        } else {
            flechaAbajo.removeAttribute("hidden");
        }
    });

    var cajaMapa = document.getElementById("cajaMapa");

    var gmap = new GMaps({
        div: cajaMapa,
        lat: 37.1685924,
        lng: -3.60451630
    });

	function addRestaurante() {
		gmap.addMarker({
			lat: 37.1685924,
			lng: -3.60451630,
			title: 'Yantra Restaurante Indio',        
			icon: '../img/iconMap_.png',
			infoWindow: {
				content: '<img src="../img/logo.png" width="100px"><br/>Restaurante Indio'
			}
		})
	}
	addRestaurante();
    
    var aPie = document.getElementById("andando");
    var enCoche = document.getElementById("coche");

    if (navigator.geolocation) {
        aPie.addEventListener("click", function () {
            navigator.geolocation.getCurrentPosition(mostrarRutaPie, null);
        });

        enCoche.addEventListener("click", function () {
            navigator.geolocation.getCurrentPosition(mostrarRutaCoche, null);
        });
    }


    function mostrarRutaPie(posicion) {
        gmap.removePolylines();
        gmap.removeMarkers();        
		addRestaurante();
        gmap.addMarker({ lat: posicion.coords.latitude, lng: posicion.coords.longitude, title:"Estas aqui"});
        gmap.setCenter(posicion.coords.latitude, posicion.coords.longitude);
        gmap.drawRoute({
            origin: [ posicion.coords.latitude, posicion.coords.longitude],
            destination: [37.1685924, -3.60451630],
            travelMode: 'walking',
            strokeColor: '#131540',
            strokeOpacity: 0.6,
            strokeWeight: 6
        });
    }

    function mostrarRutaCoche(posicion) {
        gmap.removePolylines();
        gmap.removeMarkers();
        addRestaurante();
        gmap.addMarker({
            lat: posicion.coords.latitude,
            lng: posicion.coords.longitude,
            title: "Estas aqui"
        });
        gmap.setCenter(posicion.coords.latitude, posicion.coords.longitude);
        gmap.drawRoute({
            origin: [posicion.coords.latitude, posicion.coords.longitude],
            destination: [37.1685924, -3.60451630],
            travelMode: 'driving',
            strokeColor: '#b94418',
            strokeOpacity: 0.6,
            strokeWeight: 6
        });
    }
});