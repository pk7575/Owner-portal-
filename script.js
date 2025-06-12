// script.js

document.addEventListener('DOMContentLoaded', () => {
  const statusBox = document.getElementById('status-box');
  statusBox.innerText = '🔄 Connecting to backend...';

  // 👉 Replace this with your actual backend URL (Render ka URL)
  const BACKEND_URL = ''https://suriyawan-backend-1-qyuq.onrender.com;

  // Check connection on load
  fetch(`${BACKEND_URL}/api/owner/ping`)
    .then(res => {
      if (!res.ok) throw new Error('Backend not reachable');
      return res.json();
    })
    .then(data => {
      statusBox.innerText = '✅ Connected to backend successfully!';
      console.log('Backend Response:', data);
    })
    .catch(err => {
      statusBox.innerText = '❌ Backend not reachable. Please check again.';
      console.error('Backend Error:', err.message);
    });

  // Sample Login Handler (Owner Login)
  document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;

    try {
      const response = await fetch(`${BACKEND_URL}/api/owner/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (response.ok) {
        alert('✅ Login successful!');
        // localStorage.setItem('token', result.token); // optional
      } else {
        alert('❌ Login failed: ' + result.message);
      }

    } catch (err) {
      console.error('Error during login:', err);
      alert('⚠️ Network error during login.');
    }
  });
});
// script.js
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const res = await fetch('https://suriyawan-backend-3.onrender.comapi/owner/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  document.getElementById('result').innerText = data.message;
}
