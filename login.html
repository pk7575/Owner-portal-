document.getElementById("login-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const messageBox = document.getElementById("login-message");
  const statusBox = document.getElementById("status-box");

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
      // ✅ Show success message
      messageBox.innerText = data.message;
      messageBox.style.color = "green";

      // ✅ Save token to localStorage
      localStorage.setItem("ownerToken", data.token);

      // ✅ Redirect to dashboard
      statusBox.innerText = "Redirecting to Dashboard...";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    } else {
      // ❌ Show error message
      messageBox.innerText = data.message || "Login failed!";
      messageBox.style.color = "red";
    }

  } catch (error) {
    messageBox.innerText = "❌ Server error. Try again later.";
    messageBox.style.color = "red";
    console.error(error);
  }
});
