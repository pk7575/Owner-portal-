document.addEventListener('DOMContentLoaded', () => {
  const statusBox = document.getElementById('status-box');
  const BACKEND_URL = 'https://suriyawan-backend-18.onrender.com'; // ✅ सही Backend URL

  // 🔄 Backend से कनेक्शन चेक करें
  statusBox.innerText = '🔄 Backend से कनेक्ट हो रहे हैं...';
  fetch(`${BACKEND_URL}/api/owner/ping`)
    .then(res => res.json())
    .then(data => {
      statusBox.innerText = '✅ Backend से सफलतापूर्वक कनेक्ट हो गया!';
      console.log('Ping Response:', data);
    })
    .catch(err => {
      statusBox.innerText = '❌ Backend नहीं मिल पाया। कृपया जांच करें।';
      console.error('Backend error:', err.message);
    });

  // 🔐 Owner Login फॉर्म को Handle करें
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const username = document.getElementById('email')?.value;
      const password = document.getElementById('password')?.value;

      try {
        const response = await fetch(`${BACKEND_URL}/api/owner/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password }) // 👈 यहां username और password भेजे जाते हैं
        });

        const result = await response.json();

        if (response.ok && result.success) {
          alert('✅ लॉगिन सफल रहा!');
          localStorage.setItem('ownerToken', result.token); // 🔑 Token सेव करना
          window.location.href = 'dashboard.html'; // 👉 लॉगिन के बाद redirect करें
        } else {
          alert('❌ लॉगिन फेल: ' + result.message);
        }

      } catch (err) {
        console.error('Login error:', err);
        alert('⚠️ लॉगिन के दौरान नेटवर्क या सर्वर की गलती।');
      }
    });
  }
});
