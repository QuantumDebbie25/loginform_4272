
// script.js - Frontend form validation for login.html

function validateForm() {
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();

  const usernameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  let valid = true;

  if (!usernameRegex.test(username)) {
    document.getElementById('usernameError').textContent = "Enter surname and middle name (letters only).";
    valid = false;
  } else {
    document.getElementById('usernameError').textContent = "";
  }

  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = "Enter a valid email address.";
    valid = false;
  } else {
    document.getElementById('emailError').textContent = "";
  }

  return valid;
}
