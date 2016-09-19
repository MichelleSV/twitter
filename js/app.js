window.addEventListener("load", function() {
	var boton = document.getElementById("btn-agregar");
	boton.addEventListener("click", function(e) {
		e.preventDefault();
		var tweet = document.getElementById("tweet").value;
		var nuevoTweet = document.createElement("div");
		nuevoTweet.innerText = tweet;
		var tweets = document.getElementById("texto";)



		newTweet(tweet);
	});
	function newTweet (tweet) {

        var contenedor = document.getElementById("contenedor");
        nuevoTweet.innerText = tweet;
		 if(!contenedor.childNodes[0]){
            contenedor.appendChild(nuevoTweet);
        } else {
			contenedor.insertBefore(nuevoTweet,contenedor.childNodes[0]);
        }
	}
});
