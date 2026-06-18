const modal = document.getElementById("login-modal");
if (modal) {
  modal.classList.remove("hidden");
}
const ADMIN_PASSWORD = "09031993";
let isAdmin = false;
let activeProject = null;

const projects = [
  {
    name: "Exemple",
    desc: "Projet de démonstration",
    link: "https://github.com/"
  }
];

// --- ADMIN ---

document.getElementById("admin-btn").onclick = () => {
  document.getElementById("login-modal").classList.remove("hidden");
};

function loginAdmin() {
  const pwd = document.getElementById("admin-password").value;

  if (pwd === ADMIN_PASSWORD) {
    isAdmin = true;
    document.getElementById("login-modal").classList.add("hidden");
    document.getElementById("admin-panel").classList.remove("hidden");
  } else {
    document.getElementById("login-error").textContent = "Mot de passe incorrect";
  }
}

// --- PROJETS ---

function renderProjects() {
  const list = document.getElementById("project-list");
  list.innerHTML = "";

  projects.forEach((p, i) => {
    const li = document.createElement("li");
    li.textContent = p.name;
    li.onclick = () => selectProject(i);
    list.appendChild(li);
  });
}

function selectProject(index) {
  const p = projects[index];
  document.getElementById("project-frame").src = p.link;
  document.getElementById("empty-state").style.display = "none";
}

function addProject() {
  if (!isAdmin) return;

  projects.push({
    name: document.getElementById("proj-name").value,
    desc: document.getElementById("proj-desc").value,
    link: document.getElementById("proj-link").value
  });

  renderProjects();
}

renderProjects();

