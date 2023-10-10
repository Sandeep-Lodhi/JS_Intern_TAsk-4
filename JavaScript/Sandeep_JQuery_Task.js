

// Validation function create here for customer form
function validateForm() {
    var a = true;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var dob = document.getElementById("dob").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    // First Name Valdation 
    var regName = /^[a-zA-Z]+$/;
    var firstname = document.getElementById('firstname').value;
    if (!regName.test(firstname)) {
        document.getElementById("vfname").innerHTML = 'Invalid first name given.';
        a = false;
    } else {
        document.getElementById("vfname").innerHTML = "";
    }
    // Last Name Validation 
    var regName = /^[a-zA-Z]+$/;
    var lastname = document.getElementById('lastname').value;
    if (!regName.test(lastname)) {
        document.getElementById("vlname").innerHTML = 'Invalid last name given.';
        a = false;
    } else {
        document.getElementById("vlname").innerHTML = "";
    }

    // Date of Birth Valdation 
    if (dob == "") {

        document.getElementById("vdob").innerHTML = "DOB is required";
        a = false;
    } else {
        document.getElementById("vdob").innerHTML = "";
    }
    //Mobile Valdation 
    if (mobile == "") {
        document.getElementById("vmobile").innerHTML = "Mobile no. is required";
        a = false;
    }
    else {
        document.getElementById("vmobile").innerHTML = "";
    }

    //Email Valdation 
    if (email == "") {
        document.getElementById("vemail").innerHTML = "Email is required";
        a = false;
    }
    else if (!email.includes("@")) {
        document.getElementById("vemail").innerHTML = "Invalid email address ";
        a = false;
    } else {
        document.getElementById("vemail").innerHTML = "";
    }
    //Mobile Valdation 
    if (address == "") {

        document.getElementById("vaddress").innerHTML = "Address is required";
        a = false;
    } else {
        document.getElementById("vaddress").innerHTML = "";
    }
    return a;
}


var tabCount = 1;
function result() {
    if(!validateForm()){
        return 
    }
    
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var dob = document.getElementById("dob").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    var object = [];

    let inputdata = {
        "ID":tabCount,
        "FirstName": firstname,
        "LastName": lastname,
        "DateOfBirth": dob,
        "Mobile": mobile,
        "Email": email,
        "Address": address,
    }
    object.push(inputdata);

    console.log(inputdata); 
    empty();
}
function empty(){
    var firstname = document.getElementById("firstname").value="";
    var lastname = document.getElementById("lastname").value="";
    var dob = document.getElementById("dob").value="";
    var mobile = document.getElementById("mobile").value="";
    var email = document.getElementById("email").value="";
    var address = document.getElementById("address").value="";
}