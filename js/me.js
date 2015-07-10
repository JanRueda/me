
/* Validación de formulario */

(function(){
    $(".Contact-formButton").click(function() {
 
        var nombre = $("#name").val();
            email = $("#email").val();
            validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            mensaje = $("#message").val();
 
        if (nombre == "") {
            $(".nombre").focus();
            return false;
        }else if(email == "" || !validacion_email.test(email)){
            $(".email").focus();    
            return false;
        }else if(mensaje == ""){
            $(".mensaje").focus();
            return false;
        }else{
				var datos = 'nombre='+ nombre + '&email=' + email + '&mensaje=' + mensaje;
				$.ajax({
					type: "POST",
					url: "mail/contact_me.php",
					data: datos,
					success: function() {
						$('.msg').text('Mensaje enviado!').addClass('msg_ok').animate({ 'right' : '130px' }, 300); 
					},
					error: function() {
						$('.msg').text('Hubo un error!').addClass('msg_error').animate({ 'right' : '130px' }, 300);                 
					}
				});
				return false;
        }
 
    });
})();

/* Scrolling */

$('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			    $('html, body').animate({
			        scrollTop: target.offset().top
			    }, 1000);
			}
});