const body = document.getElementById("index");
const blurTitle = document.getElementById("blurTitle");
const wellcome = document.getElementById("wellcome");
const hiddenBox = document.getElementById("hiddenBox");
const container = document.getElementById("container");

var Date = new Date();//初始化
var clientHour = date.getHours();
var dayNight;

var backGroundImageList = ["暗色海滩", "暗色室内", "亮色海滩", "亮色室内"];//5 image
var randomBackGroundNum;

var maxRandNum, minRandNum;
function dayNightCompare(){
    if(clientHour > 6 && clientHour < 21){
        dayNight = true;
    }
    else{
        dayNight = false;
    }
    randomBackGroundNum = Math.floor((Math.random() * (maxRandNum - minRandNum + 1)) + minRandNum);
}
function refreshBackGroundImage() {
    body.style.backgroundImage = "url(\"assets/image/" + randomBackGroundNum + ".png\"";
    console.log(body.style.backgroundImage);
}
refreshBackGroundImage();

setTimeout("hiddenBox.hidden = true", 990);

blurTitle.addEventListener("pointerdown", function(){
    setTimeout(("wellcome.hidden = true"), 990);
    wellcome.style.animation = "disAppear 1s ease-out";
    setTimeout(() => {
        setTimeout(("blurTitle.hidden = true"), 990);
        blurTitle.style.animation = "flat 1s ease-out";
        container.hidden = false;
        manu.style = "animation: appear 1s ease-out"//careful of this🧨代码炸了不怪我
    }, 1000);
});