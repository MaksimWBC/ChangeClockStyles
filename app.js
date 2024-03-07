function clock() {
    var date = new Date;
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock1').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock, 1000);
clock();

function clock2() {
    var date = new Date;
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock2').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock2, 1000);
clock2();

function clock3() {
    var date = new Date;
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock3').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock3, 1000);
clock3();


// let button1 = document.getElementById('button1');
// let button2 = document.getElementById('button2');
// let buttin3 = document.getElementById('button3');

// let clock1 = document.getElementById('clock1');
// let clock2 = document.getElementById('clock2');
// let clock3 = document.getElementById('clock3');

// document.addEventListener()
// document.addEventListener()
// document.addEventListener()

// function changeImg() {
//     if (x.style.display == "none") {
//         x.style.display = "block";
//         } else {
//       x.style.display = "none"}
// }