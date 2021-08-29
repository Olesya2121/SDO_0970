// ==UserScript==
// @name         YandexBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot
// @author       OlesyaBatsanova
// @match        https://ya.ru/*
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

let keywords = ['как звучит кларнет', 'как звучит флейта'];
let button = document.querySelector('.button_theme_search');
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];
document.getElementsByName('text')[0].value = keyword;

if(button!== null && button !== undefined){
button.click();
} else{
    for(let i=0; i<links.length; i++){
        if (links[i].href.includes('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')){
            let link = links[i];
            link.click();
            break;
        }
    }
}

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
