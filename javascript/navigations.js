function goToHome() {
  const user = localStorage.getItem("role");

  if (user === "ceo") {
    window.location.href = "../mains/main-ceo.html";
  } else if (user === "cfo") {
    window.location.href = "../mains/main-cfo.html";
  } else if (user === "p&o") {
    window.location.href = "../mains/main-p&o.html";
  } else if (user === "sales") {
    window.location.href = "../mains/main-sales.html";
  } else if (user === "worker") {
    window.location.href = "../mains/main-worker.html";
  } else {
    alert("Προέκυψε πρόβλημα. Συνδεθείτε ξανά.");
    window.location.href = "../login_pages/login.html";
  }
}

function goToStorage() {
  const user = localStorage.getItem("role");

  if (user === "ceo") {
    window.location.href = "../menu_pages/storage.html";
  } else if (user === "cfo") {
    window.location.href = "../landing_pages/noaccess.html";
  } else if (user === "p&o") {
    window.location.href = "../menu_pages/storage.html";
  } else if (user === "sales") {
    window.location.href = "../menu_pages/storage.html";
  } else if (user === "worker") {
    window.location.href = "../landing_pages/noaccess.html";
  } else {
    alert("Προέκυψε πρόβλημα. Συνδεθείτε ξανά.");
    window.location.href = "../login_pages/login.html";
  }
}

function goToOrders() {
  const user = localStorage.getItem("role");

  if (user === "ceo") {
    window.location.href = "../menu_pages/orders.html";
  } else if (user === "cfo") {
    window.location.href = "../menu_pages/orders.html";
  } else if (user === "p&o") {
    window.location.href = "../menu_pages/orders.html";
  } else if (user === "sales") {
    window.location.href = "../menu_pages/orders.html";
  } else if (user === "worker") {
    window.location.href = "../landing_pages/noaccess.html";
  } else {
    alert("Προέκυψε πρόβλημα. Συνδεθείτε ξανά.");
    window.location.href = "../login_pages/login.html";
  }
}

function goToTasks() {
  const user = localStorage.getItem("role");

  if (user === "ceo") {
    window.location.href = "../menu_pages/tasks.html";
  } else if (user === "cfo") {
    window.location.href = "../landing_pages/noaccess.html";
  } else if (user === "p&o") {
    window.location.href = "../menu_pages/tasks.html";
  } else if (user === "sales") {
    window.location.href = "../landing_pages/noaccess.html";
  } else if (user === "worker") {
    window.location.href = "../menu_pages/tasks.html";
  } else {
    alert("Προέκυψε πρόβλημα. Συνδεθείτε ξανά.");
    window.location.href = "../login_pages/login.html";
  }
}

function goToUsers() {
  const user = localStorage.getItem("role");

  if (user === "ceo") {
    window.location.href = "../menu_pages/users.html";
  } else if (user === "cfo") {
    window.location.href = "../landing_pages/noaccess.html";
  } else if (user === "p&o") {
    window.location.href = "../landing_pages/noaccess.html";
  } else if (user === "sales") {
    window.location.href = "../landing_pages/noaccess.html";
  } else if (user === "worker") {
    window.location.href = "../landing_pages/noaccess.html";
  } else {
    alert("Προέκυψε πρόβλημα. Συνδεθείτε ξανά.");
    window.location.href = "../login_pages/login.html";
  }
}

function goToReports() {
  const user = localStorage.getItem("role");

  if (user === "ceo") {
    window.location.href = "../menu_pages/reports.html";
  } else if (user === "cfo") {
    window.location.href = "../landing_pages/noaccess.html";
  } else if (user === "p&o") {
    window.location.href = "../landing_pages/noaccess.html";
  } else if (user === "sales") {
    window.location.href = "../landing_pages/noaccess.html";
  } else if (user === "worker") {
    window.location.href = "../landing_pages/noaccess.html";
  } else {
    alert("Προέκυψε πρόβλημα. Συνδεθείτε ξανά.");
    window.location.href = "../login_pages/login.html";
  }
}

function toggleMenu() {
  const menu = document.getElementById("mainMenu");
  menu.classList.toggle("show");
}