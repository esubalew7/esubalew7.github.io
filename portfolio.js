  // Typing effect
    const texts = ["Computer Science Student", "Frontend Designer", "Tech Enthusiast"];
    let i = 0, j = 0;
    const typing = document.getElementById('typing');
    function type() {
      if (j < texts[i].length) {
        typing.innerHTML += texts[i].charAt(j);
        j++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 1500);
      }
    }
    function erase() {
      if (j > 0) {
        typing.innerHTML = texts[i].substring(0, j - 1);
        j--;
        setTimeout(erase, 50);
      } else {
        i = (i + 1) % texts.length;
        setTimeout(type, 500);
      }
    }
    type();


// About Counter
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  const startCounting = (counter) => {
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const duration = 500; // Animation duration in ms (1.5 sec)
    const stepTime = Math.abs(Math.floor(duration / target));

    const timer = setInterval(() => {
      current++;
      counter.innerText = current;
      if (current >= target) {
        clearInterval(timer);
        counter.innerText = target; // ensure exact number
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver((entries, observerObj) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        startCounting(counter);
        observerObj.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
});


    //Form
    document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("alertMsg").classList.remove("d-none");
  this.reset();
  
  setTimeout(() => {
    document.getElementById("alertMsg").classList.add("d-none");
  }, 3000);
});


        // Show button on scroll
        window.addEventListener("scroll", function () {
          const scrollBtn = document.getElementById("scrollTopBtn");
          if (window.scrollY > 400) {
            scrollBtn.style.visibility = "visible";
            scrollBtn.style.opacity = "1";
          } else {
            scrollBtn.style.visibility = "hidden";
            scrollBtn.style.opacity = "0";
          }
        });

        // Smooth scroll to top
        document.getElementById("scrollTopBtn").addEventListener("click", function () {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        });





// === DARK / LIGHT MODE TOGGLE ===
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");

// Apply saved theme
if (savedTheme === "light") {
  body.classList.add("light-theme");
  themeToggle.innerHTML = '<i class="bi bi-moon"></i>'; // show moon when in light mode
} else {
  body.classList.remove("light-theme");
  themeToggle.innerHTML = '<i class="bi bi-brightness-high"></i>'; // show sun in dark mode
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    themeToggle.innerHTML = '<i class="bi bi-moon"></i>'; // light mode → moon
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.innerHTML = '<i class="bi bi-brightness-high"></i>'; // dark mode → sun
    localStorage.setItem("theme", "dark");
  }
});






