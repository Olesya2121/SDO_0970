// ==UserScript==
// @name         YandexBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot
// @author       OlesyaBatsanova
// @match        https://ya.ru/*
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

let keywords = ['как звучит кларнет', 'как звучит флейта'];
let button = document.querySelector('.button_theme_search');
let yandexInput =document.getElementsByName('text')[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];
//yandexInput.value = keyword;

if(button!== null && button !== undefined){
    let i = 0;
    let timerId = setInterval(()=> {
        yandexInput.value += keyword[i];
        i++;
        if (i == keyword.length) {
            clearInterval(timerId);
            button.click();
       }
    },500);

}else if(location.hostname == 'xn----7sbab5aqcbiddtdj1e1g.xn--p1ai'){
    setInterval(()=>{
        let index = getRandom(0, links.length);
        if(getRandom(0,101)>=80){
            location.href="https://ya.ru";
        }
        if (links[index].href.indexOf("n----7sbab5aqcbiddtdj1e1g.xn--p1ai") !== -1)
            links[index].click();}, getRandom(1000, 5000));

} else{
let nextYandexPage = true;
    for(let i=0; i<links.length; i++){
        if (links[i].href.includes('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')){
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
        location.href="https://ya.ru";
    }
    if (nextYandexPage) {
        setTimeout(()=>{document.querySelector('[aria-label="Следующая страница"]').click();},getRandom(2000,6000));
    }
}

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
