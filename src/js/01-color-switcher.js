import Notiflix from "notiflix";

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}

refs.form.addEventListener('submit', onSubmit)

function onSubmit(e) {
  e.preventDefault();
  const delay = Number(e.target.elements.delay.value);
  const step = Number(e.target.elements.step.value);
  const amount = Number(e.target.elements.amount.value);

  let currentDelay = delay;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, currentDelay).then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    currentDelay += step;
  }
  
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve,reject) => {
setTimeout(() => {
  if (shouldResolve) {
    resolve(({position, delay}))
  } else {
    reject(({position, delay}))
  }
}, delay);
  })
}