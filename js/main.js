function setCookie(cname, cvalue, exdays) { var d = new Date(); d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); var expires = "expires=" + d.toGMTString(); document.cookie = cname + "=" + cvalue + "; " + expires };
function getCookie(cname) { var name = cname + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i].trim(); if (c.indexOf(name) == 0) return c.substring(name.length, c.length) }; return null };
function getQueryString(name) { let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); let r = window.location.search.substr(1).match(reg); if (r != null) { return unescape(r[2]); }; return null; };
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); };
function removeElement(ElementId) { document.getElementById(ElementId).remove();return;};
function author_kdxiaoyi() {let a = document.createElement("a");a.setAttribute("href", 'https://github.com/kdxhub/pixiv.re_ui');a.setAttribute("target", "_blank");a.click();a.remove();return;};
function msg(Message, confirmTips) {if ( confirmTips == undefined ) {snackbar.innerHTML = Message;} else {snackbar.innerHTML = Message+`<s-button type="text" slot="action"> `+confirmTips+` </s-button>`;};snackbar.show();return;};//封装了一个Material Design的Tipbox
function setUItitle(Title) {if (Title == undefined) {document.getElementById("titlebar").innerHTML="Pixiv.re UI"} else {document.getElementById("titlebar").innerHTML=Title};return;};
function setPageTitle(Title) {if (Title == undefined) {document.getElementById("pagetitle").innerHTML="Pixiv.re UI - kdx233.github.io";} else {document.getElementById("pagetitle").innerHTML=Title+` - Pixiv.re UI - kdx233.github.io`;};return;};
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
  window.location.href = window.location.href.replace(/[?&].*=[^&]*&?/g, "") + "?id=" + id.replace(/[^0-9]/g, "") + "&proxy=" +proxy;
  return;
};
function search(id) {//开始请求指定图片
  if (Number(id.replace(/[^0-9]/g, "")) <= 0) {msg("主人，这是一个无效的车牌号喵~", "Σ(ﾟ∀ﾟﾉ)ﾉ");newSearch();return;};
  setUItitle(`<s-button disabled="true" type="text"><s-circular-progress slot="start" indeterminate="true"></s-circular-progress></s-button>`+id);
  setPageTitle(id);
  msg("抱歉，相关功能开发喵还在掉头发……","凭啥不支持跨域请求！！！")
};
function download() {//下载图片
  
};
//定义变量与常量
const hide="display:none;";const unhide="";
var id=0;
const snackbar=document.getElementById("snackbar");
//proxy识别
if (getQueryString('proxy') != null) {var proxy=getQueryString('proxy');} else {var proxy=`https://pixiv.re/`;};
//代理源选项控件常量
const re=document.getElementById('re');
const nl=document.getElementById('nl');
const cat=document.getElementById('cat');
//移除noscript标识
console.log ("pixiv.re UI");console.log("Copyright (C) 2024 kdxiaoyi. All right reserved.\nSee more @ //kdx233.github.io/licen");
document.getElementById("noscript").setAttribute("style", "display:none;");
//若有id参数则发起请求尝试
if ( getQueryString('id') != null ) {search(getQueryString('id'));};