/**
 * Edited by Tianyu Ma on 4/5/17.
 */

var flag = false;

function submitReset() {

    document.getElementById("buy").click();

}



function clickFinConfBtn() {

    var finalConfBtn = document.getElementById("seattype2");//vip坐票为seattype2，普坐为seattype3
    finalConfBtn.click();
    flag = true;

}


function mainProcess() {

    submitReset();
    setTimeout(function(){flag = clickFinConfBtn()}, 1000);

    console.log("get flag from clickFinConfBtn");
    console.log(flag);

}


var interval_ctrl = setInterval(function() {

    mainProcess();

    console.log("get flag from mainProcess!");
    console.log(flag);

    if (flag) {
        clearInterval(interval_ctrl);
    }
},
    97);//点击的间隔


