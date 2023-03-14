import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.btn.disabled = true;
let chosenDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenDate = selectedDates[0];
    if (chosenDate.getTime() < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.btn.disabled = false;
      refs.btn.addEventListener('click', onClickStart);
    }
  },
};

flatpickr('#datetime-picker', options);

function onClickStart() {
    let intervalId = setInterval(() => {
    const delta = chosenDate.getTime() - Date.now();
     if (delta > 0) {
      const { days, hours, minutes, seconds } = convertMs(delta);
      convertMs(delta);
      updateSpan({ days, hours, minutes, seconds });
    }  else {
        clearInterval(intervalId);
        refs.btn.disabled = true;
        Notiflix.Notify.success('The countdown is successfully finished');
      }}, 1000);
}

function updateSpan({ days, hours, minutes, seconds }) {
  (refs.days.textContent = days),
    (refs.hours.textContent = hours),
    (refs.minutes.textContent = minutes),
    (refs.seconds.textContent = seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(data) {
  return String(data).padStart(2, '0');
}
