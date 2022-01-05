let tries = 0;

function change_page() {
    //usr = document.getElementById("user").value()
    usr = $('#user').val(); 
    pass = $('#password').val();
    if (usr == "Hamed" && pass == "1234")
        window.location.href = "pages/form1.html"
    else if(tries == 0){
        $('#log-button').before('<p style="color: #D9042B">Contraseña incorrecta</p>')
        tries++;
    }
}

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        change_page();
    }
});