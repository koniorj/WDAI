function hideElement(id) {
  const el = document.getElementById(id);
  el.style.display = "none";
}

function showElement(id) {
  const el = document.getElementById(id);
  el.style.display = "block";
}

function toggleElement(id) {
  const el = document.getElementById(id);
  if (el.style.display === "none" || el.style.display === "") {
    el.style.display = "block";
    btn.textContent = "Ukryj";
  } else {
    el.style.display = "none";
    btn.textContent = "Pokaż";
  }
}
