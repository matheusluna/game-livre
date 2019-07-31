(function($){
	function myFunction() {
	  var popup = document.getElementById("myPopup");
	  popup.classList.toggle("show");
	}

  $(function(){
  	$('.tooltipped').tooltip();
  	$('.modal').modal();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.dropdown-trigger').dropdown();
  }); // end of document ready
})(jQuery); // end of jQuery name space
