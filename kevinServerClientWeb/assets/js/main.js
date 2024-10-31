const body = document.getElementById("index");
const blurTitle = document.getElementById("blurTitle");
const wellcome = document.getElementById("wellcome");
const hiddenBox = document.getElementById("hiddenBox");
const container = document.getElementById("container");
const manu = document.getElementById("manu");

var backGroundImageList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var randomBackGroundNum = Math.floor((Math.random()) * 10);//没有10


function RefreshBackGroundImage() {
    body.style.backgroundImage = "url(\"assets/image/" + randomBackGroundNum + ".png\"";
    console.log(body.style.backgroundImage);
}
RefreshBackGroundImage();

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