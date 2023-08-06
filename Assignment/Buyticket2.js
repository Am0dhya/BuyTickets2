const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), 
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), 
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), 
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); 
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { 
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
    
}
renderCalendar();
prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => { 
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { 
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); 
            currMonth = date.getMonth(); 
        } else {
            date = new Date();
            
        }
        renderCalendar(); 
    });
});


const updateSelectedDate = (selectedDate) => {
    const dateField = document.getElementById("Date");
    dateField.textContent = selectedDate;
   
  };
  
 
  const handleDateClick = (event) => {
    const clickedDate = event.target.textContent;
    const selectedDate = `${months[currMonth]} ${clickedDate}, ${currYear}`;
    updateSelectedDate(selectedDate);
  };
  
 
  const addDateClickListeners = () => {
    const dateItems = daysTag.querySelectorAll("li:not(.inactive)");
    dateItems.forEach((dateItem) => {
      dateItem.addEventListener("click", handleDateClick);
    });
  };
  

  updateSelectedDate(`${months[currMonth]} ${date.getDate()}, ${currYear}`);
  
  
  addDateClickListeners();

  let count1=0;
  let count2=0;
  let count3=0;
  let count4=0;
  let count5=0;


  

  document.getElementById("dbtn1").onclick=function(){
    if(count1>0){
        count1-=1;
    }
    document.getElementById("lbl1").innerHTML=count1;
    document.getElementById("SLA").innerHTML = count1;

    document.getElementById("SLAPrice").innerHTML = count1*4;

}
document.getElementById("ibtn1").onclick=function(){
    count1+=1;
    document.getElementById("lbl1").innerHTML=count1;
    document.getElementById("SLA").innerHTML = count1;
}


document.getElementById("dbtn2").onclick=function(){
    if(count2>0){
        count2-=1;
    }
    document.getElementById("lbl2").innerHTML=count2;
    document.getElementById("SLC").innerHTML = count2;
    document.getElementById("SLCPrice").innerHTML = count2 *2; 
}
document.getElementById("ibtn2").onclick=function(){
    count2+=1;
    document.getElementById("lbl2").innerHTML=count2;
    document.getElementById("SLC").innerHTML = count2;
}


document.getElementById("dbtn3").onclick=function(){
    if(count3>0){
        count3-=1;
    }
    document.getElementById("lbl3").innerHTML=count3;
    document.getElementById("FA").innerHTML = count3;
    document.getElementById("FAPrice").innerHTML = count3 *10; 
}
document.getElementById("ibtn3").onclick=function(){
    count3+=1;
    document.getElementById("lbl3").innerHTML=count3;
    document.getElementById("FA").innerHTML = count3;
    
}


document.getElementById("dbtn4").onclick=function(){
    if(count4>0){
        count4-=1;
    }
    document.getElementById("lbl4").innerHTML=count4;
    document.getElementById("FC").innerHTML = count4;
    document.getElementById("FCPrice").innerHTML = count4 *5; 
}
document.getElementById("ibtn4").onclick=function(){
    count4+=1;
    document.getElementById("lbl4").innerHTML=count4;
    document.getElementById("FC").innerHTML = count4;

}


document.getElementById("dbtn5").onclick=function(){
    if(count5>0){
        count5-=1;
    }
    document.getElementById("lbl5").innerHTML=count5;
    document.getElementById("Inf").innerHTML = count5;
}
document.getElementById("ibtn5").onclick=function(){
    count5+=1;
    document.getElementById("lbl5").innerHTML=count5;
    document.getElementById("Inf").innerHTML = count5;

}



document.getElementById("time1").onclick = function(){

    const time1 = document.getElementById("time1").textContent;
    document.getElementById("Time").textContent=time1;

    document.getElementById("SLAPrice").innerHTML =  document.getElementById("SLA").innerHTML *4; 
    document.getElementById("SLCPrice").innerHTML =  document.getElementById("SLC").innerHTML *2;
    document.getElementById("FAPrice").innerHTML =   document.getElementById("FA").innerHTML *10; 
    document.getElementById("FCPrice").innerHTML =   document.getElementById("FC").innerHTML  *5; 

    let tot=0;

let v1=document.getElementById("SLAPrice").textContent;
v1=Number(v1);
let v2=document.getElementById("SLCPrice").textContent;
v2=Number(v2);
let v3=document.getElementById("FAPrice").textContent;
v3=Number(v3);
let v4=document.getElementById("FCPrice").textContent;
v4=Number(v4);
tot=v1+v2+v3+v4;
document.getElementById("Total").innerHTML=tot;

   
}
document.getElementById("time2").onclick = function(){
    const time2 = document.getElementById("time2").textContent;
    document.getElementById("Time").textContent=time2;

    document.getElementById("SLAPrice").innerHTML =  document.getElementById("SLA").innerHTML *4;
    document.getElementById("SLCPrice").innerHTML =  document.getElementById("SLC").innerHTML *2;
    document.getElementById("FAPrice").innerHTML =   document.getElementById("FA").innerHTML *10;
    document.getElementById("FCPrice").innerHTML =   document.getElementById("FC").innerHTML  *5; 
    
    let tot=0;

let v1=document.getElementById("SLAPrice").textContent;
v1=Number(v1);
let v2=document.getElementById("SLCPrice").textContent;
v2=Number(v2);
let v3=document.getElementById("FAPrice").textContent;
v3=Number(v3);
let v4=document.getElementById("FCPrice").textContent;
v4=Number(v4);
tot=v1+v2+v3+v4;
document.getElementById("Total").innerHTML=tot;
    
}
document.getElementById("time3").onclick = function(){
    const time3 = document.getElementById("time3").textContent;
    document.getElementById("Time").textContent=time3;

    document.getElementById("SLAPrice").innerHTML =  document.getElementById("SLA").innerHTML *4;
    document.getElementById("SLCPrice").innerHTML =  document.getElementById("SLC").innerHTML *2; 
    document.getElementById("FAPrice").innerHTML =   document.getElementById("FA").innerHTML *10; 
    document.getElementById("FCPrice").innerHTML =   document.getElementById("FC").innerHTML  *5;
    
    let tot=0;

let v1=document.getElementById("SLAPrice").textContent;
v1=Number(v1);
let v2=document.getElementById("SLCPrice").textContent;
v2=Number(v2);
let v3=document.getElementById("FAPrice").textContent;
v3=Number(v3);
let v4=document.getElementById("FCPrice").textContent;
v4=Number(v4);
tot=v1+v2+v3+v4;
document.getElementById("Total").innerHTML=tot;
}
document.getElementById("time4").onclick = function(){
    const time4 = document.getElementById("time4").textContent;
    document.getElementById("Time").textContent=time4;

    document.getElementById("SLAPrice").innerHTML =  document.getElementById("SLA").innerHTML *6;
    document.getElementById("SLCPrice").innerHTML =  document.getElementById("SLC").innerHTML *3; 
    document.getElementById("FAPrice").innerHTML =   document.getElementById("FA").innerHTML *13; 
    document.getElementById("FCPrice").innerHTML =   document.getElementById("FC").innerHTML  *8;
    
    let tot=0;

let v1=document.getElementById("SLAPrice").textContent;
v1=Number(v1);
let v2=document.getElementById("SLCPrice").textContent;
v2=Number(v2);
let v3=document.getElementById("FAPrice").textContent;
v3=Number(v3);
let v4=document.getElementById("FCPrice").textContent;
v4=Number(v4);
tot=v1+v2+v3+v4;
document.getElementById("Total").innerHTML=tot;

}
document.getElementById("time5").onclick = function(){
    const time5 = document.getElementById("time5").textContent;
    document.getElementById("Time").textContent=time5;

    document.getElementById("SLAPrice").innerHTML =  document.getElementById("SLA").innerHTML *6;
    document.getElementById("SLCPrice").innerHTML =  document.getElementById("SLC").innerHTML *3; 
    document.getElementById("FAPrice").innerHTML =   document.getElementById("FA").innerHTML *13; 
    document.getElementById("FCPrice").innerHTML =   document.getElementById("FC").innerHTML  *8; 

    let tot=0;

let v1=document.getElementById("SLAPrice").textContent;
v1=Number(v1);
let v2=document.getElementById("SLCPrice").textContent;
v2=Number(v2);
let v3=document.getElementById("FAPrice").textContent;
v3=Number(v3);
let v4=document.getElementById("FCPrice").textContent;
v4=Number(v4);
tot=v1+v2+v3+v4;
document.getElementById("Total").innerHTML=tot;

}
document.getElementById("time6").onclick = function(){
    const time6 = document.getElementById("time6").textContent;
    document.getElementById("Time").textContent=time6;

    document.getElementById("SLAPrice").innerHTML =  document.getElementById("SLA").innerHTML *6;
    document.getElementById("SLCPrice").innerHTML =  document.getElementById("SLC").innerHTML *3; 
    document.getElementById("FAPrice").innerHTML =   document.getElementById("FA").innerHTML *13;
    document.getElementById("FCPrice").innerHTML =   document.getElementById("FC").innerHTML  *8; 
    
    let tot=0;

let v1=document.getElementById("SLAPrice").textContent;
v1=Number(v1);
let v2=document.getElementById("SLCPrice").textContent;
v2=Number(v2);
let v3=document.getElementById("FAPrice").textContent;
v3=Number(v3);
let v4=document.getElementById("FCPrice").textContent;
v4=Number(v4);
tot=v1+v2+v3+v4;
document.getElementById("Total").innerHTML=tot;

}
document.getElementById("time7").onclick = function(){
    const time7 = document.getElementById("time7").textContent;
    document.getElementById("Time").textContent=time7;

    document.getElementById("SLAPrice").innerHTML =  document.getElementById("SLA").innerHTML *4;
    document.getElementById("SLCPrice").innerHTML =  document.getElementById("SLC").innerHTML *2; 
    document.getElementById("FAPrice").innerHTML =   document.getElementById("FA").innerHTML *10;
    document.getElementById("FCPrice").innerHTML =   document.getElementById("FC").innerHTML  *5;  

    let tot=0;

let v1=document.getElementById("SLAPrice").textContent;
v1=Number(v1);
let v2=document.getElementById("SLCPrice").textContent;
v2=Number(v2);
let v3=document.getElementById("FAPrice").textContent;
v3=Number(v3);
let v4=document.getElementById("FCPrice").textContent;
v4=Number(v4);
tot=v1+v2+v3+v4;
document.getElementById("Total").innerHTML=tot;

}
document.getElementById("time8").onclick = function(){
    const time8 = document.getElementById("time8").textContent;
    document.getElementById("Time").textContent=time8;

    document.getElementById("SLAPrice").innerHTML =  document.getElementById("SLA").innerHTML *4;
    document.getElementById("SLCPrice").innerHTML =  document.getElementById("SLC").innerHTML *2; 
    document.getElementById("FAPrice").innerHTML =   document.getElementById("FA").innerHTML *10;
    document.getElementById("FCPrice").innerHTML =   document.getElementById("FC").innerHTML  *5;

    let tot=0;

let v1=document.getElementById("SLAPrice").textContent;
v1=Number(v1);
let v2=document.getElementById("SLCPrice").textContent;
v2=Number(v2);
let v3=document.getElementById("FAPrice").textContent;
v3=Number(v3);
let v4=document.getElementById("FCPrice").textContent;
v4=Number(v4);
tot=v1+v2+v3+v4;
document.getElementById("Total").innerHTML=tot; 

}
document.getElementById("time9").onclick = function(){
    const time9 = document.getElementById("time9").textContent;
    document.getElementById("Time").textContent=time9;

    document.getElementById("SLAPrice").innerHTML =  document.getElementById("SLA").innerHTML *6;
    document.getElementById("SLCPrice").innerHTML =  document.getElementById("SLC").innerHTML *3; 
    document.getElementById("FAPrice").innerHTML =   document.getElementById("FA").innerHTML *13; 
    document.getElementById("FCPrice").innerHTML =   document.getElementById("FC").innerHTML  *8; 

    let tot=0;

let v1=document.getElementById("SLAPrice").textContent;
v1=Number(v1);
let v2=document.getElementById("SLCPrice").textContent;
v2=Number(v2);
let v3=document.getElementById("FAPrice").textContent;
v3=Number(v3);
let v4=document.getElementById("FCPrice").textContent;
v4=Number(v4);
tot=v1+v2+v3+v4;
document.getElementById("Total").innerHTML=tot;

}
document.getElementById("time10").onclick = function(){
    const time10 = document.getElementById("time10").textContent;
    document.getElementById("Time").textContent=time10;

    document.getElementById("SLAPrice").innerHTML =  document.getElementById("SLA").innerHTML *6;
    document.getElementById("SLCPrice").innerHTML =  document.getElementById("SLC").innerHTML *3; 
    document.getElementById("FAPrice").innerHTML =   document.getElementById("FA").innerHTML *13;
    document.getElementById("FCPrice").innerHTML =   document.getElementById("FC").innerHTML  *8;  

    let tot=0;

let v1=document.getElementById("SLAPrice").textContent;
v1=Number(v1);
let v2=document.getElementById("SLCPrice").textContent;
v2=Number(v2);
let v3=document.getElementById("FAPrice").textContent;
v3=Number(v3);
let v4=document.getElementById("FCPrice").textContent;
v4=Number(v4);
tot=v1+v2+v3+v4;
document.getElementById("Total").innerHTML=tot;

}
document.getElementById("time11").onclick = function(){
    const time11 = document.getElementById("time11").textContent;
    document.getElementById("Time").textContent=time11;

    document.getElementById("SLAPrice").innerHTML =  document.getElementById("SLA").innerHTML *6;
    document.getElementById("SLCPrice").innerHTML =  document.getElementById("SLC").innerHTML *3; 
    document.getElementById("FAPrice").innerHTML =   document.getElementById("FA").innerHTML *13; 
    document.getElementById("FCPrice").innerHTML =   document.getElementById("FC").innerHTML  *8; 

    let tot=0;

let v1=document.getElementById("SLAPrice").textContent;
v1=Number(v1);
let v2=document.getElementById("SLCPrice").textContent;
v2=Number(v2);
let v3=document.getElementById("FAPrice").textContent;
v3=Number(v3);
let v4=document.getElementById("FCPrice").textContent;
v4=Number(v4);
tot=v1+v2+v3+v4;
document.getElementById("Total").innerHTML=tot;
}


document.getElementById('continueButton').addEventListener('click', function() {
    
    var data = {
        Date: document.getElementById('Date').innerText,
        Time: document.getElementById('Time').innerText,
        SLA: document.getElementById('SLA').innerText,
        SLAPrice: document.getElementById('SLAPrice').innerText,
        SLC: document.getElementById('SLC').innerText,
        SLCPrice: document.getElementById('SLCPrice').innerText,
        FA: document.getElementById('FA').innerText,
        FAPrice: document.getElementById('FAPrice').innerText,
        FC: document.getElementById('FC').innerText,
        FCPrice: document.getElementById('FCPrice').innerText,
        Inf: document.getElementById('Inf').innerText,
        Total: document.getElementById('Total').innerText
    };
    localStorage.setItem('summaryData', JSON.stringify(data));
});







    
 







