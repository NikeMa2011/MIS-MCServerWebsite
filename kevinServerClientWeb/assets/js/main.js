const manu = document.getElementById("manu");

function addManu() {
    manu.innerHTML = `
        <a id="serverIcon" href="assets/web/" title="主页">
            <img id="icon" src="assets/image/icon.jpg" alt="主页图标">
        </a>
        <div id="links">
            <div id="navigation">
                <p class="">导航</p>
                <div id="subArea">
                    <a href="assets/web/contributors.html">🎈贡献者名单</a>
                    <a href="assets/web/usefulLinks.html">🔗有用的链接</a>
                </div>
            </div>
        </div>
    `;
// 以后请在这修改菜单内容 此脚本会自动为网页加上
}

addManu();