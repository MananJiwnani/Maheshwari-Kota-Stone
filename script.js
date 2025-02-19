function SendMail() {
  var params = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      location: document.getElementById("location").value.trim(),
      order: document.getElementById("order").value.trim(),
  };

  if (!params.name || !params.email || !params.phone ) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill all the required details!',
      });
      return;
  }

  emailjs.send("service_1vq3ikl", "template_ki7tg6u", params)
  .then(function(res) {
    Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Email sent successfully!',
        confirmButtonText: 'OK'
    }).then(() => {
        location.reload(); // Reloads the page after clicking OK
    });
  })
  .catch(function(err) {
      Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to send email: ' + err,
      });
  });
}



// contact form
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});