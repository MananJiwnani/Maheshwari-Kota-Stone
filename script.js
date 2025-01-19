function SendMail(){
    var params = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_nbdzv9n", "template_4rv15p1", params)
    .then(function(res){
        alert("Success! " + res.status);
    })
    .catch(function(err) {
        alert("Failed to send email: " + err);
    });
    console.log("First Name:", params.firstName);
    console.log("Email:", params.email);

}