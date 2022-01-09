function readURL(input, id) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(id)
        .attr('src', e.target.result)
        .width(150)
        .height(200);
      $(id).show();
    };
    reader.readAsDataURL(input.files[0]);
  }
}

export default readURL;