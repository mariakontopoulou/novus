// Μπορείς να φορτώσεις τα δεδομένα από εξωτερικό αρχείο JSON
fetch('../../json/user_info.json') // άλλαξε τη διαδρομή αν χρειάζεται
  .then(response => response.json())
  .then(users => {
    const container = document.getElementById('users');

    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'user-card';

      card.innerHTML = `
        <div class="user-info">
          <img src="${user.pic}" alt="User Avatar">
          <div>
            <strong>${user.fullname}</strong>
            <span>${user.role}</span>
            <span>${user.email}</span>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Σφάλμα κατά τη φόρτωση των χρηστών:', error);
  });
