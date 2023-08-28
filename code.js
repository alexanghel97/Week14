"use strict";

// ------------Set a cokkie on a document-------------------------
function setCookie(name, value) {
  const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; path=/`;
  document.cookie = cookie;
}

// -----------Set value in browser storage-------------------

sessionStorage.setItem("keyName", "This is the Session Storage!");
const valueSessionStorage = sessionStorage.getItem("keyName");
console.log(valueSessionStorage);

localStorage.setItem("keyName", "This is the local storage !");
const valueLocalStorage = localStorage.getItem("keyName");
console.log(valueLocalStorage);

// --------------Radio buttons with languages--------------------

function setLanguageCookie(value) {
  const cookie = `${encodeURIComponent("language")}=${encodeURIComponent(
    value
  )}; path=/`;
  document.cookie = cookie;
}

function getLanguageCookie() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("language=")) {
      return decodeURIComponent(cookie.substring("language=".length));
    }
  }
  return null;
}

const radioButtons = document.getElementsByName("language");
const storedLanguage = getLanguageCookie();

for (let i = 0; i < radioButtons.length; i++) {
  const radio = radioButtons[i];
  if (radio.value === storedLanguage) {
    radio.checked = true;
    break;
  }
}

for (let i = 0; i < radioButtons.length; i++) {
  const radio = radioButtons[i];
  radio.addEventListener("change", function () {
    if (radio.checked) {
      setLanguageCookie(radio.value);
    }
  });
}
