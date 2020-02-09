document.querySelector('form').addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  const reqFields = document.querySelectorAll('.js-required');
  const radios = document.querySelectorAll('[name=gender]');


  
  for(let i = 0; i < reqFields.length; i++) {
    const field = reqFields[i];

    
    if(field.value === '') {
      console.warn('Nu s-a completat field-ul cu numele: ', field.name);
      field.classList.add('error-message')
      field.addEventListener(
        'change', 
        () => removeErrorState(field), 
        { once: true }
      );
      e.preventDefault();
    }
  }

  if(!radios[0].checked && !radios[1].checked) {
    const parent = radios[0].parentElement.parentElement;
    parent.classList.add('error-message')
    radios[0].addEventListener('change', () => removeErrorState(parent));
    radios[1].addEventListener('change', () => removeErrorState(parent));
    console.warn('Nu s-a ales sexul');
    e.preventDefault();
  }

  console.log(reqFields)  
}

function removeErrorState(elem) {
  elem.style.border = '1px solid #afafaf';  
}

function hideErrorMessage(messageRef) {
    messageRef.remove();
  }
  
  
  
  function showSuccessMessage() {
    if(document.location.search === '') {
      return;
    }
  
    const p = document.createElement('p');
    p.classList.add('success-message');
  
    p.innerHTML = 'Thank you for contacting us, !';
  
    const form = document.querySelector('form');
    form.before(p);
  
    setTimeout(hideSuccessMessage, 5000);
  }
  
  function hideSuccessMessage() {
    
    document.querySelector('.success-message').classList.add('fade-out');
  }
  
  
  window.addEventListener('DOMContentLoaded', showSuccessMessage);
  window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));
  
  
  window.addEventListener('load', () => console.log('Load'))


  
  function getOut () {
    const name= document.querySelector(".fName");
     console.log(name.value());
  }