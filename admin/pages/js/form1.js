function post() {
    if ($('#titular').val() && $('#subcategoria').val() && $('#resumen').val()) {
        alert($('#titular').val()+
              $('#subcategoria').val()+
              $('#resumen').val());
    }
}