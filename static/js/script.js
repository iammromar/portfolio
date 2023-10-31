// Click events for buttons
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

portfolioBtn.addEventListener("click", (event) => {
  skills.style.display = "none";
  portfolio.style.display = "flex";
  skillsBtn.classList.remove("active-btn");
  portfolioBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
  skills.style.display = "flex";
  portfolio.style.display = "none";
  portfolioBtn.classList.remove("active-btn");
  skillsBtn.classList.add("active-btn");
});

// Light & Dark Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme icon"]');
  const githubLogo = document.querySelector('img[alt="github logo"]');
  const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
  const leetcodeLogo = document.querySelector('img[alt="leetcode logo"]');
  const emailLogo = document.querySelector('img[alt="email logo"]');

  const lightLogos = {
    github: "assets/github_light.png",
    linkedin: "assets/linkedin_light.png",
    leetcode: "assets/leetcode_light.png",
    email: "assets/email_light.png",
    theme: "assets/theme_light.png",
  };

  const darkLogos = {
    github: "assets/github_dark.png",
    linkedin: "assets/linkedin_dark.png",
    leetcode: "assets/leetcode_dark.png",
    email: "assets/email_dark.png",
    theme: "assets/theme_dark.png",
  };

  function setTheme(isDark) {
    githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
    linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
    leetcodeLogo.src = isDark ? darkLogos.leetcode : lightLogos.leetcode;
    emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
    themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
  }

  toggleThemeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("isDark", isDark);
    setTheme(isDark);
  });

  const loadTheme = () => {
    const isDark = localStorage.getItem("isDark") === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.classList.toggle("dark-theme", isDark);
    setTheme(isDark);
  };

  // Load saved theme from local storage or default to dark theme
  loadTheme();
});


// Footer auto current year show
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("current-year");
  yearElement.textContent = currentYear;
});


// Loading animation
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  loadingScreen.classList.add('hide');
});


function openModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

