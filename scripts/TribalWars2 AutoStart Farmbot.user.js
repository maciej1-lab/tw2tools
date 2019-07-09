// ==UserScript==
// @name         TribalWars2 AutoStart Farmbot
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  This script automatically starts the FarmBot of TWOverflow for TribalWars2
// @author       JPylypiw (https://github.com/JPylypiw)
// @match        https://de.tribalwars2.com/game.php*
// @grant        none
// ==/UserScript==

function waitForInjector() {
    if (typeof injector == "undefined" || typeof findElement(document.getElementsByClassName("label"), "Farmer") == "undefined") {
        setTimeout(function () { waitForInjector(); }, 3000);
    } else {
        startBot();
    }
}

function startBot() {
    setTimeout(function () {
        findElement(document.getElementsByClassName("label"), "Farmer").click();
        findElement(document.getElementsByClassName("btn-border btn-green"), "Start").click();
        document.getElementsByClassName("list-btn")[1].getElementsByTagName("a")[0].click();
    }, 200);
}

function findElement(elements, searchText) {
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].innerText == searchText) {
            return elements[i];
        }
    }
}

waitForInjector();