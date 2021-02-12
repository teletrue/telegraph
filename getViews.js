// ==UserScript==
// @name         Downloader
// @namespace    https://www.youtube.com/channel/UCuxYn-hgUOe7EZbINy_SP8w
// @version      0.1
// @description  downloads videos via savefrom.net
// @author       MewForest
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(setDownloader, 1000);
    function setDownloader() {
        let link = document.getElementById('downloader');
        if (!link) {
            link = document.createElement('a');
            link.innerText = "Download";
            link.setAttribute('target', '_blank');
            link.setAttribute('id', 'downloader');
            document.getElementById('info-text').appendChild(link)
        }
        let hrefDownload = 'https://www.youtubepp.com/watch' + window.location.search;
        link.setAttribute('href', hrefDownload);
    }
})();
