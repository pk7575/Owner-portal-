const BASE_URL = "https://suriyawan-saffari-backend.onrender.com"; // 🔁 Backend URL

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = e.target.username.value;
  const password = e.target.password.value;

  fetch(`${BASE_URL}/api/owner/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      const msg = document.getElementById("login-message");
      if (data.success) {
        msg.innerText = "✅ Login successful!";
        window.location.href = "index.html"; // Redirect
      } else {
        msg.innerText = "❌ Login failed: " + data.message;
      }
    })
    .catch((err) => {
      console.error("Error:", err);
      document.getElementById("login-message").innerText = "❌ Server error.";
    });
});
// script.js
const backendURL = "https://suriyawan-backend-xxxxx.onrender.com"; // ✅ apna URL daaliye

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`${backendURL}/api/owner/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert("Login Successful");
      } else {
        alert("Login Failed");
      }
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Server error");
    });
});
