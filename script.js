function sendMail(){
  let parms = {
    name : document.getElementById("name").value,
    number : document.getElementById("number").value,
    email : document.getElementById("email").value,
    pesan : document.getElementById("pesan").value
  }
  
  emailjs.send("service_hpbfgrh","template_x7ygugs",parms).then(alert("Email sent!!!"))
}