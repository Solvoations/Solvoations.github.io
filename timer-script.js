// // // Set the launch date (March 2)
// // const launchDate = new Date('March 2, 2025 00:00:00').getTime();

// // // Update the countdown every second
// // const timer = setInterval(() => {
// //   const now = new Date().getTime();
// //   const timeLeft = launchDate - now;

// //   // Calculate days, hours, minutes, and seconds
// //   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
// //   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// //   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
// //   const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

// //   // Display the countdown
// //   document.getElementById('days').innerText = String(days).padStart(2, '0');
// //   document.getElementById('hours').innerText = String(hours).padStart(2, '0');
// //   document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
// //   document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

  
// //   // If the countdown is over, display a message and redirect after 2 seconds
// //   if (timeLeft < 0) {
// //     clearInterval(timer);
// //     document.querySelector('.timer-container').innerHTML = `
// //       <h1>Website Launched!</h1>
// //       <p>Thank you for waiting. Explore our new website now!</p>
// //     `;

// //     // Redirect to the main website after 2 seconds
// //     setTimeout(() => {
// //       window.location.href = 'index.html'; // Redirect to the main website
// //     }, 2000); // 2000 milliseconds = 2 seconds
// //   }
// // }, 1000);


// // Set the launch date to March 2, 2025, at midnight
// const launchDate = new Date('March 2, 2025 00:00:00').getTime();

// // Update the countdown every second
// const timer = setInterval(() => {
//   const now = new Date().getTime();
//   const timeLeft = launchDate - now;

//   if (timeLeft <= 0) {
//     // Stop the timer when countdown reaches zero or goes negative
//     clearInterval(timer);

//     // Update UI to show launch message
//     document.querySelector('.timer-container').innerHTML = `
//       <h1>Website Launched!</h1>
//       <p>Thank you for waiting. Explore our new website now!</p>
//     `;

//     // Redirect after 2 seconds
//     setTimeout(() => {
//       window.location.href = 'index.html'; // Adjust this path if needed for your hosted environment
//     }, 2000);
//   } else {
//     // Calculate days, hours, minutes, and seconds
//     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//     // Update the display with leading zeros
//     document.getElementById('days').innerText = String(days).padStart(2, '0');
//     document.getElementById('hours').innerText = String(hours).padStart(2, '0');
//     document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
//     document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
//   }
// }, 1000);