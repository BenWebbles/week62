<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
	console.log("pagecreate");


	$('#taptext').on("tap",function(){
		console.log("tap");
		var r = random();
		alert(r);
		function onDeviceReady() {
		console.log(navigator.notification);
		navigator.notification.beep(3);
		}
	});
   




});

function random() {
	return !Math.round(Math.random());
}

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}