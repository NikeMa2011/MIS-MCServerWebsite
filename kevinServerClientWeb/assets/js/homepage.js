const body = document.getElementById("index");
const blurTitle = document.getElementById("blurTitle");
const wellcome = document.getElementById("wellcome");
const hiddenBox = document.getElementById("hiddenBox");
const container = document.getElementById("container");

var Date = new Date();//初始化
var clientHour = date.getHours();
var dayNight;

var backGroundDarkImageList = ["暗色海滩", "暗色室内"];
var backGroundLightImageList = [ "亮色海滩", "亮色室内"];
var randomBackGroundNum, randomBackGroundString;

var maxRandNum, minRandNum;
function dayNightCompare(){
    randomBackGroundNum = Math.floor((Math.random() * 2));
    if(clientHour > 6 && clientHour < 21){
        dayNight = true;
    }
    else{
        dayNight = false;
    }
    
}
function refreshBackGroundImage() {
    body.style.backgroundImage = "url(\"assets/image/" + randomBackGroundString + ".png\"";
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