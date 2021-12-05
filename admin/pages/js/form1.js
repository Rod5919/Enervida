function post() {
    if ($('#titular').val() && $('#subcategoria').val() && $('#resumen').val()) {
        alert($('#titular').val()+"\n"+
              $('#subcategoria').val()+"\n"+
              $('#resumen').val());
    }
}