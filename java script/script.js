const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function() {
  const email = document.getElementById('emailInput').value;
  const phoneNumber = document.getElementById('phoneInput').value;
  const password = document.getElementById('passwordInput').value;

  if (email && phoneNumber && password) {
    if (validateCredentials(email, password)) {
      alert("Login successful!");
    } else {
      alert("Please enter correct details.");
    }
  } else {
    alert("Please fill in all fields.");
  }
});

function validateCredentials(email, password) {
  const storedEmail = "user@example.com";
  const storedPassword = "password123";


  return email === storedEmail && password === storedPassword;
}