const body = document.getElementById("index");
const blurTitle = document.getElementById("blurTitle");
const wellcome = document.getElementById("wellcome");
const hiddenBox = document.getElementById("hiddenBox");
const container = document.getElementById("container");
const manu = document.getElementById("manu");

function addManu(){
    manu.innerHTML = `
                     <a href="assets/web/" title="主页">
            <img id="icon" src="assets/image/icon.jpg" alt="主页图标">
        </a>
    <div id="links">
        <a href="assets/web/contributors.html">🎈贡献者名单</a>
    </div>
    `;
};

addManu();