// const slider = document.querySelector("input[type= 'checkbox']");
// const backgroundBody = document.querySelector('body'); 
// const switchBackground = document.querySelector('.switch');
// const navLinks = document.querySelectorAll('a');
// const logo = document.querySelector('.navbar-brand img'); // Select the logo

// // slider changes background color of the page, color of links, and logo
// slider.addEventListener('click', () => {
//     if (slider.checked) {
//         backgroundBody.style.background = '#fff';
//         switchBackground.style.background = '#000';
//         logo.src = "Images/logo-dark.png";  // Set the dark logo
//         for (let index = 1; index < navLinks.length; index++) {
//             navLinks[index].style.color = '#000'; // Change links color to black
//         }
//     } else {
//         backgroundBody.style.background = '#000';
//         switchBackground.style.background = '#FF1EAD';
//         logo.src = "Images/logo-light.png"; // Set the light logo
//         for (let index = 1; index < navLinks.length; index++) {
//             navLinks[index].style.color = '#fff'; // Change links color to white
//         }
//     }
// });

// for (let index = 1; index < navLinks.length; index++) {
//     navLinks[index].addEventListener('mouseover', borderBottom);
// }



const slider = document.querySelector("input[type= 'checkbox']");
const backgroundBody = document.querySelector('body'); 
const switchBackground = document.querySelector('.switch');
const navLinks = document.querySelectorAll('a');
const logo = document.querySelector('.navbar-brand img'); // Select the logo

// slider changes background color of the page, color of links, and logo
slider.addEventListener('click', () => {
    if (slider.checked) {
        backgroundBody.style.background = '#fff';
        switchBackground.style.background = '#000';
        // Change logo after background color update
        setTimeout(() => {
            logo.src = "Images/logo-light.png";  // Set the dark logo
        }, 0); // Set the logo change to occur immediately after the background change
        for (let index = 1; index < navLinks.length; index++) {
            navLinks[index].style.color = '#000'; // Change links color to black
        }
    } else {
        backgroundBody.style.background = '#000';
        switchBackground.style.background = '#FF1EAD';
        // Change logo after background color update
        setTimeout(() => {
            logo.src = "Images/logo-dark.png"; // Set the light logo
        }, 0); // Set the logo change to occur immediately after the background change
        for (let index = 1; index < navLinks.length; index++) {
            navLinks[index].style.color = '#fff'; // Change links color to white
        }
    }
});

for (let index = 1; index < navLinks.length; index++) {
    navLinks[index].addEventListener('mouseover', borderBottom);
}
