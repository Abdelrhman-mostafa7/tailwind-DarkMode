const modeToggleButton = document.getElementById('modeToggle');
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
  modeToggleButton.textContent = "Light Mode";
} else {
  document.documentElement.classList.remove("dark");
  modeToggleButton.textContent = "Dark Mode";
}
modeToggleButton.addEventListener('click', function() {
  const isDarkMode = document.documentElement.classList.contains("dark");
  
  if (isDarkMode) {
    console.log("Switching to Light Mode");
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    modeToggleButton.textContent = "Dark Mode";
  } else {
    console.log("Switching to Dark Mode");
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    modeToggleButton.textContent = "Light Mode";
  }
});
