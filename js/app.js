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
        var nuevoTweet = document.createElement("div");
        var contenedor = document.getElementById("contenedor");
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
	var textarea = document.getElementById("tweet");
	var heightLimit = 1000;
	textarea.oninput = function() {
	textarea.style.height = "";
	textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
	};	
});