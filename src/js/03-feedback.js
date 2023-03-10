import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onInputChange,500));
formRef.addEventListener('submit', onSubmit);

const STORAGE_KEY = "feedback-form-state";
const {email, message} = formRef.elements;
const values = {};
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onInputChange(e) {
    e.preventDefault();

    values.email = email.value;
    values.message = message.value
 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values))    
}

onLoad();
  
function onLoad() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const elements = formRef.elements;

    for(const key in data) {  
        if(data.hasOwnProperty(key)) {
            elements[key].value = data[key]
    }
    } 
  }

  function onSubmit(e) {
    e.preventDefault()
    console.log(savedData);  
    localStorage.removeItem(STORAGE_KEY);
    e.target.reset();   
  }
