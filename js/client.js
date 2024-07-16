function author_kdxiaoyi() {let a = document.createElement("a");a.setAttribute("href", 'https://github.com/kdxhub/pixiv.re_ui');a.setAttribute("target", "_blank");a.click();a.remove();return;};
function hub() {window.location.href="./index.html"};
function msg(Message, confirmTips) {if ( confirmTips == undefined ) {snackbar.innerHTML = Message;} else {snackbar.innerHTML = Message+`<s-button type="text" slot="action"> `+confirmTips+` </s-button>`;};snackbar.show();return;};//封装了一个Material Design的Tipbox
function newSearch() {//点击「发起新请求」
  document.getElementById('new_id').value='';
  document.querySelector('#newInput').show();
  return;
};
function startsearch(id) {//发起新请求
  if (Number(id.replace(/[^0-9]/g, "")) <= 0) {msg("主人，这是一个无效的车牌号喵~", "Σ(ﾟ∀ﾟﾉ)ﾉ");newSearch();return;};
  if (nl.selected == true) {proxy="https://pixiv.nl/";};
  if (re.selected == true) {proxy="https://pixiv.re/";};
  if (cat.selected == true) {proxy="https://pixiv.cat/";};
  window.location.href = "./index.html?id=" + id.replace(/[^0-9]/g, "") + "&proxy=" +proxy;
  return;
};
function download_linux() {//下载shell脚本
  var hidden_a = document.createElement('a'); 
  hidden_a.setAttribute('href', 'https://kdxhub.github.io/pixiv.re_ui/client/pixiv.sh');
  hidden_a.setAttribute('target', '_blank');
  hidden_a.setAttribute('download', "pixiv.sh"); 
  document.body.appendChild(hidden_a); hidden_a.click();
  hidden_a.remove();
  msg("喵~", "(｡•ᴗ-)_");return;
};
function copycurl() {//复制curl命令
//bash $(curl -L "https://kdxhub.github.io/pixiv.re_ui/client/pixiv.sh")
  if (navigator.clipboard == undefined) {msg("喵~主人的浏览器不支持一键复制呢…", "(｡･ˇ_ˇ･｡:)");return;};
  navigator.clipboard.writeText(`bash $(curl -L "https://kdxhub.github.io/pixiv.re_ui/client/pixiv.sh")`).then(
    function () {/* clipboard successfully set */
    msg("已复制~", "朕已知晓");
    },
    function () {/* clipboard write failed */
    msg("呜~主人拒绝了复制权限", "(⋟﹏⋞)");
    },
  );
  return;
};
console.log ("pixiv.re UI");console.log("Copyright (C) 2024 kdxiaoyi. All right reserved.\nSee more @ //kdx233.github.io/licen");
document.getElementById("noscript").setAttribute("style", "display:none;");