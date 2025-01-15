function SendMail(){
    var params = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_nbdzv9n" , "template_4rv15p1" , params).then(function(res){
        alert("Success! " + res.status);
    })
}