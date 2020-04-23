const usernameInput=document.getElementById('name');
const userEmail=document.getElementById('email');
const userPassword=document.getElementById('password');
const userTelephone=document.getElementById('telephone');

function isValidUsername(name){
    return /^[a-z]+$/.test(name);
}

function isValidEmail(email){
    return /[^@]+@[^@]+\.[a-z]+$/i.test(email);
}

function isValidPassword(password){
return    /[a-z]/.test(password)&&
    /[A-Z]/.test(password)&&
    /[0-9]/.test(password);
}

function isValidPhone(telephone){
    return /^\d{3}-\d{3}-\d{4}$/.test(telephone)
}


function formatTelephone(text) {}

/**
 * 
 * SET UP EVENTS
 * 
 */

function showOrHideTip(show, element) {
  // show element when show is true, hide when false
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

usernameInput.addEventListener("input", createListener(isValidUsername));

userPassword.addEventListener("input", createListener(isValidPassword));

userTelephone.addEventListener("input", createListener(isValidTelephone));

userEmail.addEventListener("input", createListener(isValidEmail));
