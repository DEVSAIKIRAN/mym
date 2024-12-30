function sendMail(){
    var params = {
        name: document.getElementById('name').value ,
        email: document.getElementById('email').value ,
        message : document.getElementById('message').value ,
        
    }
    const serviceID = "service_4wc4bmf"
const templateID ="template_yqlitwe"

emailjs.send(serviceID,templateID,params)
.then(
    res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("THANK YOU");
    }
)
.catch(err=>console.log(err))
}
