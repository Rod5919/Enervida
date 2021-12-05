let tries = 0;

function change_page() {
    usr = $('#user').val();
    pass = $('#password').val();
    if (usr == "Hamed" && pass == "1234")
        window.location.href = "https://www.google.com"
    else if(tries == 0){
        $('#log-button').before('<p style="color: #D9042B">Contraseña incorrecta</p>')
        tries++;
    }
}
