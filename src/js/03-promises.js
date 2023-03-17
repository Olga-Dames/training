
const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
  };
  
  refs.btnStart.addEventListener('click', onClickStart);
  refs.btnStop.addEventListener('click', onClickStop);
  
  let intervalId = null;
  refs.btnStop.disabled = true;
  
  function onClickStart() {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    disabledStart();
  }
  
  function onClickStop() {
    clearInterval(intervalId);
    disabledStop();
  }
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  function disabledStart() {
    (refs.btnStart.disabled = true), (refs.btnStop.disabled = false);
  }
  
  function disabledStop() {
    (refs.btnStart.disabled = false), (refs.btnStop.disabled = true);
  }
  
