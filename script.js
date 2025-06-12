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
