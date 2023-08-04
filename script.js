const selectedDate = document.getElementById('date');

window.addEventListener('load', () => {
    selectedDate.value = "2025-01-01";
})

function countDown() {
    let now = new Date();
    let eventDate = new Date(selectedDate.value);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();
    let remTime = eventTime - currentTime;
    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);
    
    h %= 24;
    m %= 60;
    s %= 60;

    document.getElementById('days').innerHTML = d;
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
    document.getElementById('title').innerHTML = "Countdown to the " + eventDate.toLocaleDateString('en-US', options);
}

setInterval(countDown, 1000);