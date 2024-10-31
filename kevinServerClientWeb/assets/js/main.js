const manu = document.getElementById("manu");

function addManu() {
    manu.innerHTML = `
        <a id="serverIcon" href="assets/web/" title="主页">
            <img id="icon" src="assets/image/icon.jpg" alt="主页图标">
        </a>
        <div id="links">
            <div id="navigation">
                <p class="">导航</p>
                <div>
                    <a href="assets/web/contributors.html">🎈贡献者名单</a>
                    <a href="assets/web/usefulLinks.html">🔗有用的链接</a>
                </div>
            </div>
        </div>
    `;
}

// 再说一次 不要加注释!!!!
document.addEventListener("DOMContentLoaded", addManu);