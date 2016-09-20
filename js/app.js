window.addEventListener("load", function() {
	var boton = document.getElementById("btn-agregar");
	boton.addEventListener("click", function() {
		var tweet = document.getElementById("tweet").value;
		newTweet(tweet);
	});
	function newTweet (tweet) {
        var nuevoTweet = document.createElement("div");
        var contenedor = document.getElementById("contenedor");
        nuevoTweet.innerText = tweet;
		 if(!contenedor.childNodes[0]){
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
		var longitud = document.getElementById("tweet").value.length;
		document.getElementById("contadorNumeros").innerHTML= limite-longitud;
		if(longitud=>limite){
			boton.disabled=true;
		}
	}
});