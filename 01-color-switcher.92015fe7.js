const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};t.btnStart.addEventListener("click",(function(){e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.btnStart.disabled=!0,t.btnStop.disabled=!1})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStart.disabled=!1,t.btnStop.disabled=!0}));let e=null;t.btnStop.disabled=!0;
//# sourceMappingURL=01-color-switcher.92015fe7.js.map