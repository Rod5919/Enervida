var image;
let api = "../../../data/news.json";

function post() {

    if ($('#titular').val() && $('#resumen').val() && image) {
        alert(`
              ${$('#titular').val()}+\n
              ${$('#resumen').val()}+\n
              ${image}
              `);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", api, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            titular: $('#titular').val(),
            resume: $('#resumen').val(),
            img: image
        }));
    }
}

$('#blah').hide();

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#blah')
          .attr('src', e.target.result)
          .width(150)
          .height(200);
        $('#blah').show();
        image = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }