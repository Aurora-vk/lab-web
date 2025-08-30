// 页面加载时执行
window.onload = async function () {
    await includeHTML();
    activateTabByHash();
    // 监听哈希值变化
    window.addEventListener('hashchange', activateTabByHash);
};