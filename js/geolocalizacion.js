var cargarPagina = function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
	$("#tweet").focus();
};
var funcionExito = function(posicion) {
	var lat = posicion.coords.latitude;
	var lon = posicion.coords.longitude;
	var geocoder = new google.maps.Geocoder;
	var dir = "";
	var latlng = new google.maps.LatLng(lat, lon);
	geocoder = new google.maps.Geocoder();
	geocoder.geocode({"latLng": latlng}, function(resultado, estado){
		if (estado == google.maps.GeocoderStatus.OK){
			if (resultado[0]){
				dir = resultado[0].formatted_address;
			}
			else{
				dir = "";
			}
		}
		else{
			dir = "";
		}
		window.localStorage.setItem("direccion",dir)
	});
}
var funcionError = function (error) {
	alert("Tenemos un problema con encontrar tu ubicación, verifica si está encendida");
}
$(document).ready(cargarPagina);
