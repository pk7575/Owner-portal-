document.addEventListener('DOMContentLoaded', () => {
  const BACKEND_URL = 'https://suriyawan-backend-18.onrender.com'; // ✅ change if needed

  fetch(`${BACKEND_URL}/api/owner/stats`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('total-orders').innerText = data.totalOrders ?? '0';
      document.getElementById('revenue').innerText = `₹${data.revenue ?? '0'}`;
      document.getElementById('delivery-boys').innerText = data.deliveryBoys ?? '0';
      document.getElementById('sellers').innerText = data.sellers ?? '0';
    })
    .catch(err => {
      console.error("Error fetching dashboard stats:", err);
      document.getElementById('total-orders').innerText = 'N/A';
      document.getElementById('revenue').innerText = 'N/A';
      document.getElementById('delivery-boys').innerText = 'N/A';
      document.getElementById('sellers').innerText = 'N/A';
    });
});
