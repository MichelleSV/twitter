window.addEventListener("load", function() {
	var boton = document.getElementById("btn-agregar");
	boton.addEventListener("click", function() {
		var tweet = document.getElementById("tweet").value;
		var contadorDeNumbers = document.getElementById("contadorNumeros");
		document.getElementById("tweet").value = "";
        contadorDeNumbers.textContent = "140";
		newTweet(tweet);
	});
	function newTweet (tweet) {
        var nuevoTweet = document.createElement("div"),
			contenedor = document.getElementById("contenedorTweets"),
			nuevaHora = document.createElement("span");
		var fecha = new Date();
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();
        if(minuto < 10){
            minuto = "0" + minuto;
        }
		nuevoTweet.appendChild(nuevaHora);
		var horaTotal = hora + ":" + minuto;
        nuevaHora.innerText = horaTotal;
		nuevoTweet.innerText = tweet;
		if(tweet == ""){
			boton.disabled=true;
		}
		 else if(!contenedor.childNodes[0]){
            contenedor.appendChild(nuevoTweet);
        } else {
			contenedor.insertBefore(nuevoTweet,contenedor.childNodes[0]);
		}	
	}
	tweet.addEventListener("keydown",function(){
		contador(tweet);
	});
	function contador(tweet){
		boton.disabled=false;
		var limite = 140;
		var contadorDeNumbers=document.getElementById("contadorNumeros");
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