// console.log("Ish boshlandi");



// setTimeout(function (){
// console.log("3 soniyadan song ishga tushdi");
// }, 3000);


// console.log("Ish tugadi");




// setTimeout(function (){
//     console.log("1");
//     }, 2000);


// for (let i = 1; i < 4; i++) {
//     console.log(i);
//     setTimeout(function () {

//     }, 3000)
// }

// for (let i = 5; i < 9; i++) {
//     console.log(i);
//     setTimeout(function () {

//     }, 3000)
// }

// for (let i = 9; i < 11  ; i++) {
//     console.log(i);
//     setTimeout(function () {

//     }, 3000)
// }


// let hisoblagich = 0;

// const intervalid = setInterval(function () {
//     hisoblagich++;
//     console.log(`Hisoblagich: ${hisoblagich}`);

//     if (hisoblagich === 5) {
//         clearInterval(intervalid);
//         console.log("Interval toxtatildi");
//     }

// }, 1000);



// let hozirgiSana = new Date();

// console.log("Hozirgi sana va vaqt:" + hozirgiSana);

var myhour, myminute, mysecond;
function flipNumber(el, newnumber) {
    var thistop = el.find(".top").clone();
    var thisbottom = el.find(".bottom").clone();
    thistop.addClass("new");
    thisbottom.addClass("new");
    thisbottom.find(".text").text(newnumber);
    el.find(".top").after(thistop);
    el.find(".top.new").append(thisbottom);
    el.addClass("flipping");
    el.find(".top:not(.new)").find(".text").text(newnumber);
    setTimeout(function () {
        el.find(".bottom:not(.new)").find(".text").text(newnumber);
    }, 500);
}
function setTime() {
    $(".flipper").removeClass("flipping");
    $(".flipper .new").remove();
    var date = new Date();
    var seconds = date.getSeconds().toString();
    if (seconds.length == 1) {
        seconds = "0" + seconds;
    }
    var minutes = date.getMinutes().toString();
    if (minutes.length == 1) {
        minutes = "0" + minutes;
    }
    var hour = date.getHours();
    if (hour > 12) { hour
         hour = - 12;
    }
    if (hour == 0) {
        hour = 12;
    }
    hour = hour.toString();
    if (hour.length == 1) {
        hour = "0" + hour;
    }
    if ($(myhour[0]).text() !== hour) {
        flipNumber($(myhour[0]).closest(".flipper"), hour)
    }
    if ($(myminute[0]).text() !== minutes) {
        flipNumber($(myminute[0]).closest(".flipper"), minutes)
    }
    if ($(mysecond[0]).text() !== seconds) {
        flipNumber($(mysecond[0]).closest(".flipper"), seconds)
    }
    setTimeout(function () {
        setTime();
    }, 500);
}

$(function () {
    myhour = $(".clock .flipper:nth-child(1) div:not(.new) .text");
    myminute = $(".clock .flipper:nth-child(2) div:not(.new) .text");
    mysecond = $(".clock .flipper:nth-child(3) div:not(.new).text");
    setTime();
})











