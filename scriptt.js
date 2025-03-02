document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.getElementById("navLinks"),
        hamburger = document.querySelector(".hamburger"),
        navItems = document.querySelectorAll("nav ul li a"),
        navbar = document.querySelector("nav");

  // Smooth scrolling and auto-close navbar
  navItems.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(item.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      navLinks.classList.remove("active");
    });
  });

  // Toggle hamburger menu
  hamburger?.addEventListener("click", () => navLinks.classList.toggle("active"));

  // Hide/show navbar on scroll
  let prevScroll = window.pageYOffset;
  window.onscroll = debounce(() => {
    const currScroll = window.pageYOffset;
    navbar.style.top = prevScroll > currScroll ? "0" : "-80px";
    prevScroll = currScroll;
  }, 50);
  function debounce(func, wait) {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }

  // Contact form submission with EmailJS
  document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    emailjs.init("o6FCj7eybSWlzKniL");
    emailjs.send("service_gy57yxh", "template_1hohhlv", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    }).then(() => alert("Message sent successfully!"), () => alert("Failed to send message. Try again later."));
    e.target.reset();
  });

  // FAQ accordion
  document.querySelectorAll(".question").forEach(q => {
    q.addEventListener("click", () => {
      const active = document.querySelector(".question.active");
      if (active && active !== q) {
        active.classList.toggle("active");
        active.nextElementSibling.style.maxHeight = 0;
      }
      q.classList.toggle("active");
      const answer = q.nextElementSibling;
      answer.style.maxHeight = q.classList.contains("active") ? `${answer.scrollHeight}px` : 0;
    });
  });

  // Scroll-to-top button
  const scrollTopBtn = document.getElementById("scroll-to-top");
  window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("show", window.scrollY > 300);
  });
  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Projects data
  const projects = [
    { id: "1", title: "Star Computers", category: "Web Development", image: "Images/project-6.png", video: "video/star computers.mp4", description: "A website for a laptop selling shop.", links: { live: "video/star computers.mp4" }, progress: "Completed" },
    { id: "2", title: "Himflix OTT Platform", category: "App Development", image: "Images/project-1.png", video: "video/Himflix.mp4", description: "An OTT platform for Himalayan movies and web series", links: { live: "video/Himflix.mp4" }, progress: "Completed" },
    { id: "3", title: "Mini Spotify", category: "Web Development", image: "Images/project-9.png", video: "video/Mini Spotify.mp4", description: "A mini version of Spotify, to enjoy music.", links: { live: "video/Mini Spotify.mp4" }, progress: "Working on it" },
    { id: "4", title: "Musica", category: "App Development", image: "Images/project-2.png", video: "video/musica.mp4", description: "A Flutter app for music lovers.", links: { live: "video/musica.mp4" }, progress: "In Progress" },
    { id: "5", title: "Weather Forecast App", category: "App Development", image: "Images/project-5.png", video: "video/weather.mp4", description: "A Flutter-based mobile app for real-time weather forecast.", links: { live: "video/weather.mp4" }, progress: "Completed" }
  ];

  const categories = ["All", "App Development", "Web Development", "Embedded"];
  let selectedCategory = "All";
  const filterButtons = document.getElementById("portfolio-filter-buttons"),
        projectsGrid = document.getElementById("portfolio-projects-grid");

  // Create filter buttons
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = cat === selectedCategory ? "portfolio-bg-white portfolio-text-black filterBtn" : "portfolio-text-white portfolio-bg-black filterBtn";
    btn.onclick = () => { selectedCategory = cat; updateUI(); };
    filterButtons.appendChild(btn);
  });

  // Video play/pause helpers
  const playVideo = video => video.play().catch(err => console.error("Error playing video:", err));
  const pauseVideo = video => { video.pause(); video.currentTime = 0; };

  // Update UI function
  function updateUI() {
    [...filterButtons.children].forEach(btn => {
      btn.className = btn.textContent === selectedCategory ? "portfolio-bg-white portfolio-text-black filterBtn" : "portfolio-text-white portfolio-bg-black filterBtn";
    });

    const filtered = selectedCategory === "All" ? projects : projects.filter(p => p.category === selectedCategory);
    projectsGrid.innerHTML = "";
    filtered.forEach(p => {
      const div = document.createElement("div");
      div.className = "portfolio-group relative overflow-hidden";
      div.innerHTML = `
        <div class="portfolio-media-wrapper relative">
          <img src="${p.image}" alt="${p.title}" class="portfolio-image portfolio-aspect-3-2 portfolio-object-cover" loading="lazy">
          <video src="${p.video}" autoplay muted loop class="portfolio-video portfolio-aspect-3-2 portfolio-object-cover"></video>
          <div class="portfolio-overlay-blur"></div>
        </div>
        <div class="portfolio-overlay portfolio-absolute portfolio-inset-0 portfolio-bg-gradient-to-t"></div>
        <div class="portfolio-absolute portfolio-bottom-0 portfolio-p-4">
          <p class="portfolio-progress">${p.progress}</p>
          <h3 class="portfolio-text-xl portfolio-font-semibold portfolio-text-white">${p.title}</h3>
          <p class="portfolio-description">${p.description}</p>
          <div class="portfolio-links mt-4">
            <a href="${p.links.live}" target="_blank" class="portfolio-btn">
              <button class="button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46689 4.39207C5.75949 4.68526 5.75902 5.16013 5.46583 5.45273C3.78722 7.128 2.75 9.44218 2.75 12C2.75 14.5878 3.81163 16.9262 5.52503 18.6059C5.82082 18.8959 5.82554 19.3707 5.53557 19.6665C5.24561 19.9623 4.77076 19.967 4.47497 19.677C2.48564 17.7269 1.25 15.0071 1.25 12C1.25 9.02783 2.45721 6.33616 4.40623 4.39102C4.69941 4.09842 5.17429 4.09889 5.46689 4.39207ZM18.6164 4.46446C18.9122 4.17449 19.387 4.17921 19.677 4.475C21.5771 6.41326 22.75 9.07043 22.75 12C22.75 14.9645 21.5491 17.6499 19.609 19.5938C19.3164 19.887 18.8415 19.8875 18.5484 19.5949C18.2552 19.3023 18.2547 18.8274 18.5473 18.5342C20.2182 16.86 21.25 14.5512 21.25 12C21.25 9.47873 20.2422 7.1943 18.6059 5.52507C18.3159 5.22928 18.3206 4.75443 18.6164 4.46446ZM8.30923 7.48757C8.59226 7.79001 8.57652 8.26462 8.27408 8.54765C7.32517 9.43564 6.75 10.6502 6.75 11.9822C6.75 13.3297 7.33869 14.5573 8.30756 15.4479C8.61251 15.7282 8.63248 16.2026 8.35216 16.5076C8.07185 16.8125 7.59739 16.8325 7.29244 16.5522C6.03967 15.4006 5.25 13.7824 5.25 11.9822C5.25 10.203 6.02148 8.60128 7.24916 7.45242C7.5516 7.16939 8.02621 7.18513 8.30923 7.48757ZM15.7429 7.52559C16.0292 7.22626 16.5039 7.21571 16.8033 7.50202C18.0005 8.64714 18.75 10.2286 18.75 11.9822C18.75 13.7568 17.9825 15.3548 16.7604 16.503C16.4586 16.7867 15.9839 16.7719 15.7003 16.47C15.4167 16.1681 15.4315 15.6935 15.7333 15.4099C16.6778 14.5225 17.25 13.3108 17.25 11.9822C17.25 10.6692 16.6911 9.47046 15.7664 8.58599C15.4671 8.29968 15.4566 7.82492 15.7429 7.52559Z" fill="#fafafa"/>
                  </g>
                  <path d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z" fill="#fafafa"/>
                </svg>
              </button>
            </a>
          </div>
        </div>
      `;
      ["touchstart", "mouseenter"].forEach(evt => div.addEventListener(evt, () => {
        const vid = div.querySelector("video");
        if (vid) { vid.style.opacity = 1; playVideo(vid); }
      }));
      ["touchend", "mouseleave"].forEach(evt => div.addEventListener(evt, () => {
        const vid = div.querySelector("video");
        if (vid) { vid.style.opacity = 0; pauseVideo(vid); }
      }));
      projectsGrid.appendChild(div);
    });
  }

  // Initial UI setup
  updateUI();
});