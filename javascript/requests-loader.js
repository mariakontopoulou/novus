fetch('../../json/requests-info.json')
  .then(response => response.json())
  .then(requests => {
    const requestsContainer = document.getElementById('requests');
    const usersContainer = document.getElementById('users');
    const confirmationBanner = document.getElementById('confirmation-banner');
    const confirmDeleteBtn = document.getElementById('confirm-delete');
    const cancelDeleteBtn = document.getElementById('cancel-delete');
    let cardToDelete = null;

    const checkIfEmpty = () => {
      // Ελέγχουμε αν το container αιτημάτων είναι άδειο
      if (requestsContainer.children.length === 0) {
        const msg = document.createElement('p');
        msg.textContent = 'Δεν έχετε άλλα αιτήματα.';
        msg.style.color = '#000';
        msg.style.fontStyle = 'italic';
        requestsContainer.appendChild(msg);
      }
    };

    requests.forEach(user => {
      const card = document.createElement('div');
      card.className = 'user-card';

      card.innerHTML = `
        <div class="user-info">
          <img src="${user.pic || '../../png/default-user.png'}" alt="User Avatar">
          <div>
            <strong>${user.fullname}</strong>
            <span>${user.role}</span>
            <span>${user.email}</span>
          </div>
        </div>
        <div class="user-actions">
          <button class="btn blue-button">Αποδοχή</button>
          <button class="btn grey-button">Διαγραφή</button>
        </div>
      `;

      // ➕ Αποδοχή
      card.querySelector('.blue-button').addEventListener('click', () => {
        requestsContainer.removeChild(card);

        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
          <div class="user-info">
            <img src="${user.pic || '../../png/default-user.png'}" alt="User Avatar">
            <div>
              <strong>${user.fullname}</strong>
              <span>${user.role || 'Χρήστης'}</span>
              <span style="font-size: 13px; color: #999;">${user.email}</span>
            </div>
          </div>
        `;
        usersContainer.appendChild(userCard);

        checkIfEmpty(); // Έλεγχος αν δεν υπάρχουν άλλα αιτήματα
      });

      // ❌ Διαγραφή
      card.querySelector('.grey-button').addEventListener('click', () => {
        // Εμφάνιση του banner επιβεβαίωσης διαγραφής
        cardToDelete = card;
        confirmationBanner.style.display = 'flex';
      });

      requestsContainer.appendChild(card);
    });

    // Επιβεβαίωση διαγραφής από το banner
    confirmDeleteBtn.addEventListener('click', () => {
      if (cardToDelete) {
        requestsContainer.removeChild(cardToDelete);
        confirmationBanner.style.display = 'none'; // Κρύβουμε το banner
        checkIfEmpty(); // Έλεγχος αν δεν υπάρχουν άλλα αιτήματα
      }
    });

    // Ακύρωση διαγραφής από το banner
    cancelDeleteBtn.addEventListener('click', () => {
      confirmationBanner.style.display = 'none'; // Κρύβουμε το banner
    });
  })
  .catch(error => {
    console.error('Σφάλμα κατά τη φόρτωση των αιτημάτων:', error);
  });
