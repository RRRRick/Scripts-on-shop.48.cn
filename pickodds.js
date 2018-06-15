/**
 * Edited by MTY on 10/18/16.
 */
var flag = false;

timeout = 4;
current = location.href;
if(timeout > 0)
setTimeout('reload()',1000 * timeout);
else
location.replace(current);

function clickFinConfBtn() {

    var finalConfBtn = document.getElementById("seattype3")[0];
    finalConfBtn.click();
    flag = true;

}

function submitReset() {

    document.getElementById("buy").click();

}

function reload(){
	if(flag){
		exit();
	}
	else{
		setTimeout('reload()',1000 * timeout);
		fr4me = '<frameset cols=\'*\'>\n<frame src=\''+current+'\'/>';
		fr4me += '</frameset>';
		with(document){write(fr4me);void(close())};
		clickFinConfBtn();
		submitReset();
	}
}
