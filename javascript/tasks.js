  // Όλες οι εργασίες
  document.querySelectorAll('.task-card').forEach(card => {
    const badge = card.querySelector('.badge');
    const checkboxes = card.querySelectorAll('ul.task-steps input[type="checkbox"]');
    const stepItems = card.querySelectorAll('ul.task-steps li');
  
    // Συνάρτηση ενημέρωσης κατάστασης κάρτας
    function updateCardStatus() {
const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
const total = checkboxes.length;

if(checked === total) {
  badge.className = 'badge badge-completed';
  badge.textContent = 'Ολοκληρώθηκε';
} else if(checked > 0) {
  badge.className = 'badge badge-in-progress';
  badge.textContent = 'Σε εξέλιξη';
} else {
  badge.className = 'badge badge-pending';
  badge.textContent = 'Εκκρεμεί';
}

// Ενημέρωση ποσοστού αν το modal είναι ανοιχτό
const activeModal = document.querySelector('.modal-overlay:not(.hidden)');
if(activeModal) {
  const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
  activeModal.querySelector('#modal-progress').style.width = `${percentage}%`;
  activeModal.querySelector('#modal-percent').textContent = `${percentage}%`;
}
}
  
    // Συνάρτηση για toggle διάστικτου
    function updateLineThrough(cb, li) {
      if (cb.checked) {
        li.classList.add('completed');
      } else {
        li.classList.remove('completed');
      }
    }
  
    // Πρόσθεσε listener σε κάθε checkbox
    checkboxes.forEach((cb, idx) => {
      // αρχικοποίηση εμφάνισης
      updateLineThrough(cb, stepItems[idx]);
      //listener
      cb.addEventListener('change', () => {
        // 1) ενημέρωση line-through
        updateLineThrough(cb, stepItems[idx]);
        // 2) ενημέρωση badge
        updateCardStatus();
        // -- εδώ μπορείς να στείλεις και PATCH στο API αν θέλεις --
      });
    });
  
    // αρχική ρύθμιση badge
    updateCardStatus();
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Ορισμός συναρτήσεων ΠΡΙΝ από τη χρήση τους
    const initTaskCard = (card) => { /* ... */ };
    const addModalListeners = (card) => { /* ... */ };
    // Αρχικοποίηση υπαρχουσών καρτών
    document.querySelectorAll('.task-card').forEach(card => {
      initTaskCard(card);
      addModalListeners(card);
    })})
      // Λειτουργία Checkbox
      const initTaskCard = (card) => {
    const badge = card.querySelector('.badge');
    const checkboxes = card.querySelectorAll('input[type="checkbox"]');
    const steps = card.querySelectorAll('.task-steps li');
    const lastUpdated = card.querySelector('.last-updated');
  
    const updateStatus = () => {
      const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
      const total = checkboxes.length;
      const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
      
      // Ενημέρωση badge
      if(checked === total) {
        badge.className = 'badge badge-completed';
        badge.textContent = 'Ολοκληρώθηκε';
      } else if(checked > 0) {
        badge.className = 'badge badge-in-progress';
        badge.textContent = 'Σε εξέλιξη';
      } else {
        badge.className = 'badge badge-pending';
        badge.textContent = 'Εκκρεμεί';
      }
      
      // Ενημέρωση ημερομηνίας
      lastUpdated.textContent = new Date().toLocaleDateString('el-GR');
      
      // Ενημέρωση modal αν είναι ανοιχτό
      const activeModal = document.querySelector('.modal-overlay:not(.hidden)');
      if(activeModal) {
        activeModal.querySelector('#modal-progress').style.width = `${percentage}%`;
        activeModal.querySelector('#modal-percent').textContent = `${percentage}%`;
      }
    };
  
    checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener('change', () => {
        steps[index].classList.toggle('completed', checkbox.checked);
        updateStatus();
      });
    });
    
    // Αρχικοποίηση κατάστασης
    checkboxes.forEach((checkbox, index) => {
      steps[index].classList.toggle('completed', checkbox.checked);
    });
    updateStatus();
  };
  
      // Αρχικοποίηση υπαρχουσών καρτών
      document.querySelectorAll('.task-card').forEach(initTaskCard);
  
      // Λειτουργία Modal Λεπτομερειών
      document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', () => {
          const card = btn.closest('.task-card');
          const modal = document.getElementById('task-modal-overlay');
          
              // Συλλογή δεδομένων
              const checkboxes = card.querySelectorAll('input[type="checkbox"]');
              const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
              const total = checkboxes.length;
              const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
  
              // Ενημέρωση προόδου
              modal.querySelector('#modal-progress').style.width = `${percentage}%`;
              modal.querySelector('#modal-percent').textContent = `${percentage}%`;
          
          // Συμπλήρωση περιεχομένου modal
          modal.querySelector('#modal-title').textContent = card.querySelector('h2').textContent;
          modal.querySelector('#modal-order').textContent = card.querySelector('.order-info').textContent;
          modal.querySelector('#modal-due').textContent = card.querySelector('.due-date time').textContent;
          modal.querySelector('#modal-updated').textContent = card.querySelector('.last-updated').textContent;
          
          modal.classList.remove('hidden');
        });
      });
  
      // Λειτουργία Νέας Εργασίας
      document.querySelector('.btn-new-task').addEventListener('click', () => {
        document.getElementById('new-task-overlay').classList.remove('hidden');
      });
  
      // Κλείσιμο Modals
      document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.classList.add('hidden');
          });
        });
      });
  
      // Δυναμική προσθήκη βημάτων
      document.getElementById('add-step').addEventListener('click', () => {
        const container = document.getElementById('steps-container');
        const newStep = document.createElement('div');
        newStep.className = 'step-item';
        newStep.innerHTML = `
          <input type="text" name="step" required placeholder="Βήμα ${container.children.length + 1}">
          <button type="button" class="remove-step">–</button>
        `;
        container.appendChild(newStep);
        
        newStep.querySelector('.remove-step').addEventListener('click', () => {
          newStep.remove();
        });
      });
  
      document.getElementById('new-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Δημιουργία νέας κάρτας
    const newCard = document.createElement('article');
    newCard.className = 'task-card';
    newCard.innerHTML = `
      <div class="task-card-header">
        <div>
          <h2>${formData.get('title')}</h2>
          <small class="order-info">${formData.get('orderInfo')}</small>
        </div>
        <span class="badge badge-pending">Εκκρεμεί</span>
      </div>
      <div class="task-card-body">
        <p class="due-date">Προθεσμία: <time datetime="${formData.get('dueDate')}">${new Date(formData.get('dueDate')).toLocaleDateString('el-GR')}</time></p>
        <ul class="task-steps">
          ${Array.from(formData.getAll('step')).map(step => `
            <li><input type="checkbox" /> ${step}</li>
          `).join('')}
        </ul>
      </div>
      <div class="task-card-footer">
        <small class="last-updated">${new Date().toLocaleDateString('el-GR')}</small>
        <button class="btn-details">Λεπτομέρειες</button>
      </div>
    `;
  
    // Προσθήκη νέας κάρτας
    document.querySelector('.tasks-list').prepend(newCard);
    
    // Αρχικοποίηση λειτουργιών
    initTaskCard(newCard);
    addModalListeners(newCard); // Προσθήκη λειτουργίας modal
    
    // Επαναφορά φόρμας
    e.target.reset();
    document.getElementById('new-task-overlay').classList.add('hidden');
  });
  
  const addModalListeners = (card) => {
    card.querySelector('.btn-details').addEventListener('click', () => {
      const modal = document.getElementById('task-modal-overlay');
      const checkboxes = card.querySelectorAll('input[type="checkbox"]');
      
      // Συμπλήρωση περιεχομένου modal
      modal.querySelector('#modal-title').textContent = card.querySelector('h2').textContent;
      modal.querySelector('#modal-order').textContent = card.querySelector('.order-info').textContent;
      modal.querySelector('#modal-due').textContent = card.querySelector('.due-date time').textContent;
      modal.querySelector('#modal-updated').textContent = card.querySelector('.last-updated').textContent;
      
      // Λίστα βημάτων
      const stepList = modal.querySelector('#modal-step-list');
      stepList.innerHTML = '';
      card.querySelectorAll('.task-steps li').forEach(li => {
        const newLi = document.createElement('li');
        newLi.textContent = li.textContent;
        if(li.classList.contains('completed')) newLi.style.textDecoration = 'line-through';
        stepList.appendChild(newLi);
      });
      
      // Ενημέρωση προόδου
      const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
      const total = checkboxes.length;
      const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
      modal.querySelector('#modal-progress').style.width = `${percentage}%`;
      modal.querySelector('#modal-percent').textContent = `${percentage}%`;
      
      modal.classList.remove('hidden');
    });
  };