
// Submit form with id function.

function myFunction() {
  document.getElementById("i52").style.fontSize = "25px"; 
  document.getElementById("i52").style.color = "blue";
  document.getElementById("i52").style.backgroundColor = "orange";        
}


function submit_by_id() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (validation()) // Calling validation function
    {
    document.getElementById("form_id").submit(); //form submission
    alert(" Name : " + name + " n Email : " + email + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
    }
    }
    
    // Submit form with name function.
    function submit_by_name() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (validation()) // Calling validation function
    {
    var x = document.getElementsByName('form_name');
    x[0].submit(); //form submission
    alert(" Name : " + name + " n Email : " + email + " n Form Name : " + document.getElementById("form_id").getAttribute("name") + "nn Form Submitted Successfully......");
    }
    }
    
    // Submit form with class function.
    function submit_by_class() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (validation()) // Calling validation function
    {
    var x = document.getElementsByClassName("form_class");
    x[0].submit(); //form submission
    alert(" Name : " + name + " n Email : " + email + " n Form Class : " + document.getElementById("form_id").getAttribute("class") + "nn Form Submitted Successfully......");
    }
    }
    
    // Submit form with HTML <form> tag function.
    function submit_by_tag() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (validation()) // Calling validation function
    {
    var x = document.getElementsByTagName("form");
    x[0].submit(); //form submission
    alert(" Name : " + name + " n Email : " + email + " n Form Tag : <form>nn Form Submitted Successfully......");
    }
    }
    
    // Name and Email validation Function.
    function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if (name === '' || email === '') {
    alert("Please fill all fields...!!!!!!");
    return false;
    } else if (!(email).match(emailReg)) {
    alert("Invalid Email...!!!!!!");
    return false;
    } else {
    return true;
    }
    }
