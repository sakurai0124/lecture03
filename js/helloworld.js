var helloWorld = function(){
	var message = document.getElementById("helloWorld");
	message.setAttribute("class", "");
};

var showHelloWorldButton = document.getElementById("showHelloWorld");
showHelloWorldButton.addEventListener("click", helloWorld);


var helloWorldaaa = function(){
	var message = document.getElementById("hello");
	message.setAttribute("class", "");
};

var showHelloWorldButtonaaa = document.getElementById("HelloWorldbbb");
showHelloWorldButtonaaa.addEventListener("click", helloWorldaaa);
