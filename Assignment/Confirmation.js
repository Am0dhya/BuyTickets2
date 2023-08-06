
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

var userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails) {
        document.getElementById('username').innerText = userDetails.username;
        document.getElementById('mobile').innerText = userDetails.mobile;
        document.getElementById('email').innerText = userDetails.email;
    }