const blurTitle = document.getElementById("blurTitle");
const wellcome = document.getElementById("wellcome");
const hiddenBox = document.getElementById("hiddenBox");
const container = document.getElementById("container");

var date = new Date();
var clientHour = date.getHours();
console.log(date, clientHour);

var dayNight;

var backGroundDarkImageList = ["暗色海滩", "暗色室内"];
var backGroundLightImageList = ["亮色海滩", "亮色室内"];
var randomBackGroundNum, randomBackGroundString;

function dayNightCompare() {
    randomBackGroundNum = Math.floor((Math.random() * 2));
    if (clientHour > 6 && clientHour < 18) {
        dayNight = true;
    } else {
        dayNight = false;
    }
    setBackGroundImage();
}
function setBackGroundImage(){
    if (dayNight) {
        randomBackGroundString = backGroundLightImageList[randomBackGroundNum];
    } else {
        randomBackGroundString = backGroundDarkImageList[randomBackGroundNum];
    }
}
function refreshBackGroundImage() {
    blurTitle.style.backgroundImage = "url(\"assets/image/" + randomBackGroundString + ".jpg\"";
    console.log(blurTitle.style.backgroundImage);
}
dayNightCompare();
refreshBackGroundImage();

setTimeout("hiddenBox.hidden = true", 990);

blurTitle.addEventListener("pointerdown", function () {
    setTimeout(("wellcome.hidden = true"), 990);
    wellcome.style.animation = "disAppear 1s ease-out";
    setTimeout(() => {
        setTimeout(("blurTitle.hidden = true"), 990);
        blurTitle.style.animation = "flat 1s ease-out";
        container.hidden = false;
        manu.style = "animation: appear 1s ease-out"//careful of this🧨代码炸了不怪我
    }, 1000);
});