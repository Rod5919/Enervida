class PostData {
  constructor(api) {
    this.api = api;
    this.post = this.post.bind(this);
  }

  async post(data, requireds) {
    if (this.validator(data, requireds)) {
      console.log(data);
      let dataForm = new FormData();

      for (var key in data) {
        // console.log(data[key]);
        dataForm.append(key, data[key]);
      }

      for (var key of dataForm.entries()) {
        // console.log(key[0] + ", " + key[1]);
      }
      const settings = {
        method: "POST",
        body: dataForm,
      };
      
      const fetchResponse = await fetch(this.api, settings);

      await fetchResponse.json();
      console.log( fetchResponse);

      alert("Form submitted successfully");
      
      return dataForm;
    } else {
      console.error("Empty required form field");
    }
  }

  validator(data, requireds) {
    for (const item in requireds) {
      if (data[requireds[item]].length == 0) {
        return false;
      }
    }
    return true;
  }
}

export default PostData;
