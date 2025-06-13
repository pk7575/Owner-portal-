document.addEventListener('DOMContentLoaded', () => {
  const statusBox = document.getElementById('status-box');
  const BACKEND_URL = 'https://suriyawan-backend-18.onrender.com'; // 🔗 Backend URL

  // Backend connection check
  if (statusBox) {
    statusBox.innerText = '🔄 Backend से कनेक्ट हो रहे हैं...';
    fetch(`${BACKEND_URL}/api/owner/ping`)
      .then(res => res.json())
      .then(data => {
        statusBox.innerText = '✅ Backend से सफलतापूर्वक कनेक्ट हो गया!';
        console.log('Ping Response:', data);
      })
      .catch(err => {
        statusBox.innerText = '❌ Backend से कनेक्शन नहीं हो पाया!';
        console.error('Backend error:', err.message);
      });
  }

  // Login system
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const username = document.getElementById('email')?.value;
      const password = document.getElementById('password')?.value;

      if (!username || !password) {
        alert("⚠️ कृपया Username और Password भरें।");
        return;
      }

      try {
        const response = await fetch(`${BACKEND_URL}/api/owner/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });

        const result = await response.json();

        if (response.ok && result.success) {
          alert('✅ लॉगिन सफल!');
          localStorage.setItem('ownerToken', result.token); // Store token
          window.location.href = 'dashboard.html'; // Redirect
        } else {
          alert('❌ लॉगिन असफल: ' + result.message);
        }

      } catch (err) {
        console.error('Login Error:', err);
        alert('⚠️ नेटवर्क या सर्वर से जुड़ने में त्रुटि हुई।');
      }
    });
  }
});
