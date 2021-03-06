const buttons = document.querySelectorAll('.password-btn');
const passwordLength = document.querySelector('#input-range p span');
const symbolsCheckbox = document.querySelector('#symbols');
const lettersCheckbox = document.querySelector('#letters');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const generatorBtn = document.querySelector('#generator-btn button');
const popUp = document.querySelector('.pop-up');
const inputRange = document.querySelector('#slider');
const rangeValue = document.querySelector('#slider-value div');

let charset;

inputRange.addEventListener('input', () => {
  const newValue = inputRange.value;
  rangeValue.textContent = newValue;
});

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    checkbox.toggleAttribute('checked');
  });
});

function generatePassword() {
  let password = "";
  switch (true) {
    case (symbolsCheckbox.checked && lettersCheckbox.checked):
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~-=`|{}[]:;?<>,./";
      break;
    case (symbolsCheckbox.checked):
      charset = "0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
      break;
    case (lettersCheckbox.checked):
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      break
    default:
      charset = "0123456789";
      break;
  }

  for (let i = 0; i < inputRange.value; ++i) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
};

generatorBtn.addEventListener('click', () => {
  buttons.forEach(button => {
    button.textContent = generatePassword();
  });
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.innerHTML);
    console.log(button.textContent);
    if (button.textContent) {
      navigator.clipboard.writeText(button.textContent);

      popUp.classList.add('animation');

      setTimeout( () => {
        popUp.classList.remove('animation');
      }, 3000)
    }
  });
});
