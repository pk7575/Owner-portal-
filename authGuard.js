// authGuard.js - Protects owner dashboard & internal pages

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("ownerToken");

  if (!token) {
    alert("🔒 Unauthorized Access!\nPlease login first to access the Owner Dashboard.");
    window.location.href = "index.html"; // Or login.html, based on your structure
  } else {
    // Optional: Verify token with backend for added security
    fetch("https://suriyawan-backend-18.onrender.com/api/owner/verify", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token
      }
    })
    .then(res => res.json())
    .then(data => {
      if (!data.success) {
        localStorage.removeItem("ownerToken");
        alert("🔐 Session expired. Please login again.");
        window.location.href = "index.html";
      }
    })
    .catch(err => {
      console.error("Token verification failed:", err);
      alert("⚠️ Connection issue. Redirecting to login.");
      window.location.href = "index.html";
    });
  }
});
