function setCookie(cname, cvalue, exdays) { var d = new Date(); d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); var expires = "expires=" + d.toGMTString(); document.cookie = cname + "=" + cvalue + "; " + expires };
function getCookie(cname) { var name = cname + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i].trim(); if (c.indexOf(name) == 0) return c.substring(name.length, c.length) }; return null };
function getQueryString(name) { let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); let r = window.location.search.substr(1).match(reg); if (r != null) { return unescape(r[2]); }; return null; };
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); };
function removeElement(ElementId) { document.getElementById(ElementId).remove();return;};
function author_kdxiaoyi() {let a = document.createElement("a");a.setAttribute("href", 'https://github.com/kdxhub/pixiv.re_ui');a.setAttribute("target", "_blank");a.click();a.remove();return;};
function msg(Message, confirmTips) {if ( confirmTips == undefined ) {snackbar.innerHTML = Message;} else {snackbar.innerHTML = Message+`<s-button type="text" slot="action"> `+confirmTips+` </s-button>`;};snackbar.show();return;};//封装了一个Material Design的Tipbox
function setUItitle(Title) {if (Title == undefined) {document.getElementById("titlebar").innerHTML="Pixiv.re UI"} else {document.getElementById("titlebar").innerHTML=Title};return;};
function setPageTitle(Title) {if (Title == undefined) {document.getElementById("pagetitle").innerHTML="Pixiv.re UI - kdxiaoyi.top";} else {document.getElementById("pagetitle").innerHTML=Title+` - Pixiv.re UI - kdxiaoyi.top`;};return;};
function download(imgsrc, name) {//下载图片地址和图片名
  let image = new Image();
  // 解决跨域 Canvas 污染问题
  image.setAttribute("crossOrigin", "anonymous");
  image.onload = function() {
    let canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    let context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, image.width, image.height);
    let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
    let a = document.createElement("a"); // 生成一个a元素
    let event = new MouseEvent("click"); // 创建一个单击事件
    a.download = name || "photo"; // 设置图片名称
    a.href = url; // 将生成的URL设置为a.href属性
    a.dispatchEvent(event); // 触发a的单击事件
  };
  image.src = imgsrc;
};
function newSearch() {//点击「发起新请求」
  document.getElementById('new_id').value='';
  document.querySelector('#newInput').show();
  return;
};
function startsearch(idSub2) {//发起新请求
  if (Number(idSub2.replace(/[^0-9]/g, "")) <= 0) {msg("主人，这是一个无效的车牌号喵~", "Σ(ﾟ∀ﾟﾉ)ﾉ");newSearch();return;};
  if (nl.selected == true) {proxy="https://pixiv.nl/";};
  if (re.selected == true) {proxy="https://pixiv.re/";};
  if (cat.selected == true) {proxy="https://pixiv.cat/";};
  console.log(`发起新请求 @ `+window.location.href.replace(/[?&].*=[^&]*&?/g, "") + "?id=" + idSub2.replace(/[^0-9]/g, "") + "&proxy=" +proxy);
  window.location.href = window.location.href.replace(/[?&].*=[^&]*&?/g, "") + "?id=" + idSub2.replace(/[^0-9]/g, "") + "&proxy=" +proxy;
  return;
};
async function search(idSub) {//开始请求指定图片
  if (Number(idSub.replace(/[^0-9]/g, "")) <= 0) {msg("主人，这是一个无效的车牌号喵~", "Σ(ﾟ∀ﾟﾉ)ﾉ");newSearch();return;};
  console.log("开始请求指定图片%"+idSub);
  id=idSub;
  setUItitle(`<s-icon><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 12.317 37.683 2 25 2 z M 26.300781 12.009766 C 35.827781 12.009766 39.291969 18.146531 39.292969 23.269531 C 39.292969 28.539531 34.961781 33.662109 26.300781 33.662109 C 23.332781 33.662109 20.992094 32.832375 19.371094 31.984375 L 19.371094 36.259766 L 20.238281 36.259766 L 20.238281 37.992188 L 15.041016 37.992188 L 15.041016 36.259766 L 15.90625 36.259766 L 15.90625 17.945312 C 14.85625 18.643313 13.308594 20.669922 13.308594 20.669922 L 13.308594 22.070312 L 12.443359 22.070312 L 10.710938 18.939453 C 10.710938 18.939453 16.773781 12.009766 26.300781 12.009766 z M 26.300781 14.164062 C 23.557781 14.164062 21.249094 14.824656 19.371094 15.722656 L 19.371094 29.779297 C 20.524094 30.293297 22.829781 31.064453 26.300781 31.064453 C 31.939781 31.064453 34.962891 26.733531 34.962891 23.269531 C 34.962891 18.920531 32.050781 14.164062 26.300781 14.164062 z"></path></svg></s-icon> `+id);
  setPageTitle(id);
  welcome.style=hide;result.style=unhide;
  document.getElementById("img1").src=proxy+id+`.png`;
    console.log(`Image#`+maxIndex+` 已发送请求\n出现CORS Policy报错即请求完毕，但Javascript无法捕获此错误。`);
  while (true) {
    Index = Index + 1;
    let response=await fetch(proxy+id+`-`+Index+`.png`, {});
    //根据代理站点特性，文件存在可以被跨域请求，即await可以正确执行
    // 而若文件不存在，即超出图片数量的请求，会被CORS Policy拦截
    // 则await出错，js执行在上行代码处中断，maxIndex值无法被增加
    maxIndex = maxIndex + 1;
    resultList.innerHTML=resultList.innerHTML+`<li id="li`+maxIndex+`"><img id="img`+maxIndex+`" src="`+proxy+id+`-`+maxIndex+`.png`+`" onerror="img_err_callback(`+maxIndex+`);"></li>`;
    console.log(`Image#`+maxIndex+` 已验证存在`);
    maxTips.innerHTML = `喵~此图集包含`+maxIndex+`张图片`;
  };
};
function img_err_callback(which) {//图片加载失败回调
  msg(`图片#`+which+` 被玩坏了!这肯定不是本喵的问题!绝对不是! 哼╯^╰`,"(⋟﹏⋞)");
  console.warn(`Image #`+which+` 加载失败`);
  let img_onerr=document.getElementById("img"+which);
  img_onerr.setAttribute("onerror","void(0);");//取消回调防止二次错误
  img_onerr.src="./res/imgErr.jpg";
};
function StartDownload() {//下载图片
  msg(`喵呜~已开始下载共`+maxIndex+`张图片呢~`,"准备prpr");
  console.log(`开始下载请求 id=`+id+` maxIndex=`+maxIndex);
  let downloadIndex=1
  download(proxy+id+`-`+downloadIndex+`.png`,id+`-`+downloadIndex+`.png`);
  if (maxIndex==1) {return;};
  while (true) {
    downloadIndex=downloadIndex+1;
    sleep(500);
    download(proxy+id+`-`+downloadIndex+`.png`,id+`-`+downloadIndex+`.png`);
    if (downloadIndex==maxIndex) {break;};
  };
  return;
};
//定义变量与常量
const hide="display:none;";const unhide="";
var id=0; //图片id
var maxIndex=1; //最大图片编号
var Index=1; //当前选定图片编号
const snackbar=document.getElementById("snackbar");
const welcome=document.getElementById("welcome");
const result=document.getElementById("result");
const resultList=document.getElementById("result-list");
const maxTips=document.getElementById("maxTips")
//proxy识别
if (getQueryString('proxy') != null) {var proxy=getQueryString('proxy');} else {var proxy=`https://pixiv.re/`;};
//代理源选项控件常量
const re=document.getElementById('re');
const nl=document.getElementById('nl');
const cat=document.getElementById('cat');
//移除noscript标识
console.log ("pixiv.re UI");console.log("Copyright (C) 2024 kdxiaoyi. All right reserved.\nSee more @ //kdx233.github.io/licen\n仅供个人学习交流，遵守当地法律法规，切勿用于违法用途。");
document.getElementById("noscript").setAttribute("style", "display:none;");
//若有id参数则发起请求尝试
if ( getQueryString('id') != null ) {search(getQueryString('id'));};