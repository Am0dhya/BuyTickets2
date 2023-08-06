
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

 const form = document.querySelector('.form');
const CardNumberInput = document.getElementById('CardNumber');
const expiredateInput = document.getElementById('expiredate');
const CVCInput = document.getElementById('CVC');
const NOCInput = document.getElementById('NOC');

form.addEventListener('submit', function (event) {
  let isValid = true;

 
  const errorElements = form.querySelectorAll('.error');
  errorElements.forEach(error => error.innerText = '');


  if (!CardNumberInput.value.match(/^\d{16}$/)) {
    document.getElementById('CardNumberError').innerText = 'Please enter a valid 16-digit Card Number.';
    isValid = false;
  }

  
  if (!expiredateInput.value.match(/^\d{2}\/\d{2}$/)) {
    document.getElementById('expiredateError').innerText = 'Please enter a valid expiry date in MM/YY format.';
    isValid = false;
  }

  
  if (!CVCInput.value.match(/^\d{3}$/)) {
    document.getElementById('CVCError').innerText = 'Please enter a valid 3-digit CVC/CVV.';
    isValid = false;
  }


  if (NOCInput.value.trim() === '') {
    document.getElementById('NOCError').innerText = 'Name on card is required.';
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault(); 
  }
});

 