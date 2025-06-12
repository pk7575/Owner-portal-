// Owner Portal Script

// 👇 Backend base URL (https://suriyawan-saffari-backend.onrender.com)

const BASE_URL = "https://suriyawan-saffari-backend.onrender.com";

// Example - Owner Dashboard Load
document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.getElementById("welcome-msg");
  if (welcome) {
    welcome.innerText = "👑 Owner Dashboard Connected to Backend!";
  }

  // Example - Fetch some data from backend
  fetch(`${BASE_URL}/api/owner/stats`)
    .then(res => res.json())
    .then(data => {
      console.log("📦 Owner Stats:", data);
    })
    .catch(err => {
      console.error("❌ Error connecting to backend:", err);
    });
});

