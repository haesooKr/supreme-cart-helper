const input_name = document.querySelector("#order_billing_name");
const input_email = document.querySelector("#order_email")
const input_tel = document.querySelector("#order_tel")
const input_address = document.querySelector('#bo');
const input_address2 = document.querySelector('#oba3');
const input_zip = document.querySelector('#order_billing_zip');
const input_city = document.querySelector('#order_billing_city');
const input_select = document.querySelector('#order_billing_state');

if(!localStorage.getItem('user')){
  const name = prompt("What is your name?")
  const email = prompt("What is your email?")
  const tel = prompt("What is your tel?")
  const address = prompt("What is your address?")
  const address2 = prompt("What is your address(apt, unit, etc)?")
  const zip = prompt("What is your zip code?")
  const city = prompt("Where is your city?")
  const state = prompt("Where is your state? (ex. AL, NY, ... etc)")

  const states = ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"];

  let stateIndex = states.indexOf(state);

  const user = {
    name,
    email,
    tel,
    address,
    address2,
    zip,
    city,
    stateIndex
  }
  localStorage.setItem('user', JSON.stringify(user));
} else {
  const {name, email, tel, address, address2, zip, city, stateIndex} = JSON.parse(localStorage.getItem('user'));

  input_name.value = name
  input_email.value = email
  input_tel.value = tel
  input_address.value = address 
  input_address2.value = address2
  input_zip.value = zip
  input_city.value = city
  input_select.options.selectedIndex = state
}
