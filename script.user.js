// ==UserScript==
// @name         Ship Cost Clipboard Copy
// @version      1.0
// @description  Copy ship cost to clipboard on left click
// @author       Revq
// @namespace  	 https://github.com/Revq
// @license   	 MIT
// @match        *://seat.alwaysbait.com/srp/*
// @run-at document-idle
// @updateURL    https://github.com/Revq/SEAT-CopyISK-UserJS/raw/main/script.user.js
// @downloadURL  https://github.com/Revq/SEAT-CopyISK-UserJS/raw/main/script.user.js
// ==/UserScript==

(function() {
    document.addEventListener('click', function(e) {
        if (e.target.textContent.includes('ISK')) {
            if (e.button === 0) {  // Left click
                e.stopPropagation();
                const cost = e.target.textContent.trim().replace(/[^\d.]/g, '');
                navigator.clipboard.writeText(cost).then(() => {
                    console.log('Ship cost copied to clipboard: ' + cost);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            }
        }
    }, true);
})();