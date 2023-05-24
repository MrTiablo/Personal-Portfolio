function sendMail(){
    var params ={
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value
    };

    const serviceID = "service_7d50i3n";
    const templateID ="template_amoovlh"
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res=>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("subject").value="";
            document.getElementById("message").value="";
            console.log(res); 
            alert("your message has send successfully")
        }
    )
    .catch((err)=> console.log(err));
}