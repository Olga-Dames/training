!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};t.btnStart.addEventListener("click",(function(){n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.btnStart.disabled=!0,t.btnStop.disabled=!1})),t.btnStop.addEventListener("click",(function(){clearInterval(n),t.btnStart.disabled=!1,t.btnStop.disabled=!0}));var n=null;t.btnStop.disabled=!0}();
//# sourceMappingURL=01-color-switcher.67b640ec.js.map
