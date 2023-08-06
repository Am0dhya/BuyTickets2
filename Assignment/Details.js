
 var storedData = JSON.parse(localStorage.getItem('summaryData'));
 if (storedData) {
     document.getElementById('Date').innerText = storedData.Date;
     document.getElementById('Time').innerText = storedData.Time;
     document.getElementById('SLA').innerText = storedData.SLA;
     document.getElementById('SLAPrice').innerText = storedData.SLAPrice;
     document.getElementById('SLC').innerText = storedData.SLC;
     document.getElementById('SLCPrice').innerText = storedData.SLCPrice;
     document.getElementById('FA').innerText = storedData.FA;
     document.getElementById('FAPrice').innerText = storedData.FAPrice;
     document.getElementById('FC').innerText = storedData.FC;
     document.getElementById('FCPrice').innerText = storedData.FCPrice;
     document.getElementById('Inf').innerText = storedData.Inf;
     document.getElementById('Total').innerText = storedData.Total;
 }


 document.getElementById('continueButton').addEventListener('click', function() {
    var userDetails = {
        username: document.getElementById('username').value,
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
});


 function validateForm() {
    const fullName = document.getElementById("fullname").value;
    const mobileNumber = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const emailConfirm = document.getElementById("emailconfirm").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((errorElement) => (errorElement.textContent = ""));

    let isValid = true;

if (fullName.trim() === "") {
    document.getElementById("Fullname-error").textContent = "Full Name is required";
    isValid = false;
  }

 
  if (mobileNumber.trim() === "") {
    document.getElementById("mobile-error").textContent = "Mobile Number is required";
    isValid = false;
  }

  
  if (email.trim() === "") {
    document.getElementById("email-error").textContent = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("email-error").textContent = "Invalid Email format";
    isValid = false;
  }

  
  if (emailConfirm.trim() === "") {
    document.getElementById("emailconfirm-error").textContent = "Confirm Email is required";
    isValid = false;
  } else if (email !== emailConfirm) {
    document.getElementById("emailconfirm-error").textContent = "Emails do not match";
    isValid = false;
  }

  return isValid;
}




