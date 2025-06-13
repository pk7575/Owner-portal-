// dashboard.js

document.addEventListener('DOMContentLoaded', () => {
  const API_URL = 'https://suriyawan-backend-18.onrender.com/api/owner/stats';

  const totalOrdersBox = document.getElementById('total-orders');
  const revenueBox = document.getElementById('revenue');
  const deliveryBox = document.getElementById('delivery-boys');
  const sellersBox = document.getElementById('active-sellers');
  const statusBox = document.getElementById('backend-status');

  // Show loading status
  statusBox.innerText = '⏳ Connecting to backend...';

  fetch(API_URL)
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch data');
      return res.json();
    })
    .then(data => {
      // Update UI with fetched data
      totalOrdersBox.innerText = data.totalOrders || '0';
      revenueBox.innerText = `₹${data.revenue || '0'}`;
      deliveryBox.innerText = data.deliveryBoys || '0';
      sellersBox.innerText = data.activeSellers || '0';

      statusBox.innerText = '✅ Dashboard loaded successfully!';
    })
    .catch(error => {
      console.error('Error:', error);
      statusBox.innerText = '❌ Failed to connect to backend';
    });
});
