// ==UserScript==
// @name         YandexBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot
// @author       OlesyaBatsanova
// @match        https://ya.ru/*
// @match        https://www.yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match        https://psyholog.me/*
// @match        https://motoreforma.com/*
// @grant        none
// ==/UserScript==
let sites = {
    "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":["как звучит кларнет", "как звучит флейта"],
    "psyholog.me":["центр здоровых отношений", "Услуги центра здоровых отношений", "Чекалина Елена психолог"],
    "motoreforma.com":["мотореформа", "прошивки для CAN-AM", "тюнинг Maverikc X3", "тюнинг для квадроциклов CAN-AM", "вариатор CV-Tech для Can-Am"]
}

let site = Object.keys(sites)[getRandom(0, Object.keys(sites).length)];//сайт
let keywords = sites[site];
let button = document.querySelector('.button_theme_search');
let yandexInput =document.getElementsByName('text')[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];
//yandexInput.value = keyword;

if(button!== null && button !== undefined){
    document.cookie = `site=${site}`;
}else if(location.hostname == "https://ya.ru/"){
    site = getCookie("site");
}else {
    site = location.hostname;
}
if(button!== null && button !== undefined){
    document.cookie = `site=${site}`;
    let i = 0;
    let timerId = setInterval(()=> {
        yandexInput.value += keyword[i];
        i++;
        if (i == keyword.length) {
            clearInterval(timerId);
            button.click();
        }
    },500);

}else if(location.hostname == site){
    setInterval(()=>{
        let index = getRandom(0, links.length);
        if(getRandom(0,101)>=80){
            location.href="https://ya.ru/";
        }
        if (links[index].href.indexOf(site) !== -1)
            links[index].click();}, getRandom(1000, 5000));

} else{
    let nextYandexPage = true;
    for(let i=0; i<links.length; i++){
        if (links[i].href.includes(site)){
            let link = links[i];
            link.setAttribute("target", "_self"); //открытие в этом же окне
            let nextYandexPage = false;
            setTimeout(()=>{link.click();},getRandom(1500,4500));
            console.log("Нашел строку" + links[i]);
            break;
        }
    }
    if (document.querySelector('[aria-label="Текущая страница 5"]')) {
        let nextYandexPage = false;
        location.href="https://ya.ru/";
    }
    if (nextYandexPage) {
        setTimeout(()=>{document.querySelector('[aria-label="Следующая страница"]').click();},getRandom(2000,6000));
    }
}

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
