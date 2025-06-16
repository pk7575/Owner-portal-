document.getElementById("login-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const messageBox = document.getElementById("login-message");
  const statusBox = document.getElementById("status-box");

  // 🔒 Field validation
  if (!username || !password) {
    messageBox.innerText = "⚠️ Please fill all fields.";
    messageBox.style.color = "red";
    return;
  }

  try {
    const response = await fetch("https://suriyawan-backend-18.onrender.com/api/owner/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (data.success) {
      // ✅ Login success
      messageBox.innerText = data.message;
      messageBox.style.color = "green";

      // 💾 Store token securely
      localStorage.setItem("ownerToken", data.token);

      // 🎯 Optional: Store owner data for future (if needed)
      localStorage.setItem("ownerData", JSON.stringify(data.owner || {}));

      statusBox.innerText = "✅ Login successful. Redirecting...";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    } else {
      // ❌ Login failed
      messageBox.innerText = data.message || "Login failed!";
      messageBox.style.color = "red";
    }

  } catch (error) {
    console.error("Login error:", error);
    messageBox.innerText = "❌ Server error. Please try again later.";
    messageBox.style.color = "red";
  }
});
