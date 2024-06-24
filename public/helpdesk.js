const form = document.querySelector('form');

function sendEmail() {
   
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "docmeet2024@gmail.com",
        Password : "7D68EBF6F80C6E4AE96792A2A0E928FEA6B8",
        To : 'docmeet2024@gmail.com',
        From : "docmeet2024@gmail.com",
        Subject : "This is a subject",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone No: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent Sucessfully")
    );
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    sendEmail();
});