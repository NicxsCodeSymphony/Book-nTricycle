const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const countInt = document.getElementById('countInt');

let counter = 1;

const count = document.getElementById('count');

plus.addEventListener('click', () =>{
    counter++;
    count.innerHTML = counter;
    countInt.value = counter;
    if(counter > 6){
        count.innerHTML = 6;
        counter = 6;
        countInt.value = counter;
    }
})

minus.addEventListener('click', () => {
    counter--;
    count.innerHTML = counter;
    countInt.value = counter;
    if(counter < 1){
        count.innerHTML = 1;
        counter = 1;
        countInt.value = 1;
    }
})


// END OF PASSENGER COUNTER
const dateDiv = document.querySelector('.date');
const timeDiv = document.querySelector('.time');
const popup = document.querySelector('.popup');
const popup1 =document.querySelector('.popup1');
const saveBtn = document.getElementById('save');
const saveTime = document.getElementById('saveTime');
const date = document.getElementById('date');
const timePicker = document.getElementById('time');
const day = document.querySelector('.day');
const year = document.querySelector('.year');
const timeValue = document.querySelector('.timeValue');
const am = document.querySelector('.am');
const fullDate =document.getElementById('fullDate');
const time = document.getElementById('time');

popup.style.display = 'none';
popup1.style.display = 'none';

dateDiv.addEventListener('click', () => {
    popup.style.display = 'block';
})

timeDiv.addEventListener('click', () => {
    popup1.style.display = 'block';
})



saveBtn.addEventListener('click', () => {

    var selectedDate = new Date(date.value);

    var day1 = selectedDate.getDate();
    var month1 = selectedDate.toLocaleString('default', {month: 'short'});
    var year1 = selectedDate.getFullYear();

    day.innerHTML = day1 + ', ' + month1;
    year.innerHTML = year1;

    fullDate.value = month1 + ' ' + day1 + ', ' + year1;
    
    popup.style.display = 'none';
})  


saveTime.addEventListener('click', () => {
    var selectedTime = timePicker.value;
    var parsedTime = new Date('2000-01-01 ' + selectedTime);

    if (!isNaN(parsedTime)) {
        var hour = parsedTime.getHours();
        var minute = parsedTime.getMinutes();
        
        var ampm = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12 || 12;

        timeValue.innerHTML = hour + ":" + minute;
        am.innerHTML = ampm;

        console.log(hour)
        console.log(minute)
        console.log(ampm)

        time1.value = hour + ":" + minute + " " + ampm
    } else {
        console.error('Invalid time format');
    }

    popup1.style.display = 'none';
});


// SELECT PLACE

const destinationPopup = document.querySelector('.destinationPopup');
const addPlace = document.getElementById('clickPlace');
const feeInput = document.getElementById('fee');

destinationPopup.style.display = 'none';

addPlace.addEventListener('click', () => {
    destinationPopup.style.display = 'block';
})


function selectPlace(place, fee){
    console.log(place)
    console.log(fee);

    addPlace.value = place;
    feeInput.value = fee;

    destinationPopup.style.display = 'none';
}


