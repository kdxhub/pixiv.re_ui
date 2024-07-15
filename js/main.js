function setCookie(cname, cvalue, exdays) { var d = new Date(); d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); var expires = "expires=" + d.toGMTString(); document.cookie = cname + "=" + cvalue + "; " + expires }; function getCookie(cname) { var name = cname + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i].trim(); if (c.indexOf(name) == 0) return c.substring(name.length, c.length) }; return null };//cookies操作模块
function getQueryString(name) { let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); let r = window.location.search.substr(1).match(reg); if (r != null) { return unescape(r[2]); }; return null; }; function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }; function removeElement(ElementId) { document.getElementById(ElementId).remove(); };//参数获取模块
function author_kdxiaoyi() {let a = document.createElement("a");a.setAttribute("href", 'https://github.com/kdxhub/pixiv.re_ui');a.setAttribute("target", "_blank");a.click();a.remove();return;};
function newSearch() {//点击「发起新请求」
  document.getElementById('new_id').value='';
  document.querySelector('#newInput').show();
  return;
};
function search(id) {//开始请求指定图片
  if (nl.selected == true) {proxy="https://pixiv.nl/";};
  if (re.selected == true) {proxy="https://pixiv.re/";};
  if (cat.selected == true) {proxy="https://pixiv.cat/";};
  customElements.get('s-snackbar').show('目前正在解决js不允许跨域请求……暂时没法使用');
};
function download() {//下载图片
  
};
//定义变量与常量
const hide="display:none;";const unhide="";
var id=0;var proxy="https://pixiv.re/";
//代理源选项控件常量
const re=document.getElementById('re');
const nl=document.getElementById('nl');
const cat=document.getElementById('cat');
//移除noscript标识
console.log ("pixiv.re UI");console.log("Copyright (C) 2024 kdxiaoyi. All right reserved.\nSee more @ //kdx233.github.io/licen");
document.getElementById("noscript").setAttribute("style", "display:none;");