
// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll Animation
// gsap.from("#box1",{
//   x:800,
//   duration:5,
//   delay:1
// })
// gsap.from("#box2",{
//   x:-800,
//   duration:2,
//   delay:6
// })
// gsap.from("#box3",{
//   y:20,
//   duration:2,
//   delay:2
// })

// gsap.from(".feature-grid",{
//   stagger:1
// })

//previous 1
// // Theme Toggle

// const themeToggle = document.getElementById('theme-toggle');
// const body = document.body;

// // Check if the user has a preferred theme (optional)
// const savedTheme = localStorage.getItem('theme');
// if (savedTheme) {
//   body.classList.add(savedTheme);
//   themeToggle.textContent = savedTheme === 'dark-theme' ? '🌞' : '🌓';
// } else {
//   themeToggle.textContent = '🌓'; // Default to light theme
// }

// themeToggle.addEventListener('click', () => {
//   body.classList.toggle('dark-theme');
//   const isDarkTheme = body.classList.contains('dark-theme');

//   // Update the button text
//   themeToggle.textContent = isDarkTheme ? '🌞' : '🌓';

//   // Save the theme preference to localStorage (optional)
//   localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : 'light-theme');
// });

// // Smooth Scrolling
// document.querySelectorAll('nav ul li a').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

// // Mobile Menu Toggle
// const menuIcon = document.getElementById('menu-icon');
// const navLinks = document.getElementById('nav-links');

// menuIcon.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });

// // Close menu when a link is clicked (for mobile)
// navLinks.addEventListener('click', () => {
//   if (navLinks.classList.contains('active')) {
//     navLinks.classList.remove('active');
//   }
// });

// // Scroll Animation
// const sections = document.querySelectorAll('.section');

// const checkVisibility = () => {
//   sections.forEach(section => {
//     const sectionTop = section.getBoundingClientRect().top;
//     const sectionBottom = section.getBoundingClientRect().bottom;
//     const isVisible = sectionTop < window.innerHeight && sectionBottom >= 0;

//     if (isVisible) {
//       section.classList.add('visible');
//     }
//   });
// };

// // Initial check on page load
// checkVisibility();

// // Check on scroll
// window.addEventListener('scroll', checkVisibility);

// // EmailJS Integration
// emailjs.init('YOUR_EMAILJS_USER_ID'); // Replace with your EmailJS User ID

// document.getElementById('contact-form').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const message = document.getElementById('message').value;

//   emailjs.send('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', {
//     from_name: name,
//     from_email: email,
//     message: message
//   }).then(() => {
//     document.getElementById('form-status').textContent = 'Message sent successfully!';
//     document.getElementById('contact-form').reset();
//   }, (error) => {
//     document.getElementById('form-status').textContent = 'Failed to send message. Please try again.';
//     console.error('EmailJS Error:', error);
//   });
// });


//previous 2

// // Theme Toggle
// const themeToggle = document.getElementById('theme-toggle');
// const body = document.body;

// themeToggle.addEventListener('click', () => {
//   body.classList.toggle('dark-theme');
//   const isDarkTheme = body.classList.contains('dark-theme');
//   themeToggle.textContent = isDarkTheme ? '🌞' : '🌓';
// });

// // Smooth Scrolling
// document.querySelectorAll('nav ul li a').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

// // Scroll Animation
// const sections = document.querySelectorAll('.section');

// const checkVisibility = () => {
//   sections.forEach(section => {
//     const sectionTop = section.getBoundingClientRect().top;
//     const sectionBottom = section.getBoundingClientRect().bottom;
//     const isVisible = sectionTop < window.innerHeight && sectionBottom >= 0;

//     if (isVisible) {
//       section.classList.add('visible');
//     }
//   });
// };

// // Initial check on page load
// checkVisibility();

// // Check on scroll
// window.addEventListener('scroll', checkVisibility);