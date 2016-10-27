window.addEventListener("load", function() {
	var boton = document.getElementById("btn-agregar");
	boton.addEventListener("click", function() {
		var tweet = document.getElementById("tweet").value;
		var contadorDeNumbers = document.getElementById("contadorNumeros");
		document.getElementById("tweet").value = "";
		contadorDeNumbers.textContent = "140";
		newTweet(tweet);
	});
	var contadorDeNumbers;
	function newTweet (tweet) {
		var nuevoTweet = document.createElement("div"),
			contenedor = document.getElementById("contenedorTweets"),
			nuevaHora = document.createElement("p");
		var fecha = new Date();
		var hora = fecha.getHours();
		var minuto = fecha.getMinutes();
		if(minuto < 10){
			minuto = "0" + minuto;
		}
		var horaTotal = hora + ":" + minuto;
		if (window.localStorage.getItem("direccion").length==0){
			nuevaHora.textContent= "A las "+horaTotal;
		}
		else{
			nuevaHora.textContent= "A las "+horaTotal+" en "+ window.localStorage.getItem("direccion").substring(0,window.localStorage.getItem("direccion").length-12);
		}
		nuevoTweet.innerText = tweet;
		nuevaHora.classList.add("horas");
		nuevoTweet.appendChild(nuevaHora);
		if(tweet == ""){
			boton.disabled=true;
		}
		else if(!contenedor.childNodes[0]){
			contenedor.appendChild(nuevoTweet);
		} else {
			contenedor.insertBefore(nuevoTweet,contenedor.childNodes[0]);
		}
	contadorDeNumbers.style.color="black";
	}
	tweet.addEventListener("keydown",function(){
		contador(tweet);
	});
	function contador(tweet){
		boton.disabled=false;
		contadorDeNumbers=document.getElementById("contadorNumeros");
		var limite = 140;
		var longitud = document.getElementById("tweet").value.length;
		var count = document.getElementById("contadorNumeros").innerHTML= limite-longitud;
		if(longitud>=140){
			contadorDeNumbers.style.color="red";
			boton.disabled=true;
		}else if(longitud>=120){
			contadorDeNumbers.style.color="blue";
			boton.disabled=false;
		}
		else if(longitud>=130){
			contadorDeNumbers.style.color="green";
			boton.disabled=true;
		}
		else{
			contadorDeNumbers.style.color="black";
		}
	}
});
