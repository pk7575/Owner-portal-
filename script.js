// ✅ Updated script.js for Owner Portal
const BASE_URL = "https://suriyawan-saffari-backend.onrender.com";

// Example API call
fetch(`${BASE_URL}/api/owner/dashboard`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error fetching owner data:", err));
