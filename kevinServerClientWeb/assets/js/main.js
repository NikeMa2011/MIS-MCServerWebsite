const manu = document.getElementById("manu");

function addManu() {
    manu.innerHTML = `
    <div id="links">
            <div id="navigation">
                <p class="">导航</p>
                <div id="subArea">
                    <a href="contributors.html">🎈贡献者名单</a>
                    <a href="usefulLinks.html">🔗有用的链接</a>
                </div>
            </div>
        </div>
        <a id="serverIcon" href="main.html" title="主页">
            <img id="icon" src="../image/icon.jpg" alt="主页图标">
        </a>
    `;
// 以后请在这修改菜单内容 此脚本会自动为网页加上
}

addManu();