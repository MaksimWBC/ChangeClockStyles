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