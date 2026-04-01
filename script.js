// 1. Grab the "Start Training" button
const startBtn = document.getElementById('mainBtn');

// 2. Grab the section we want to scroll to
const targetSection = document.getElementById('programs-section');

// 3. Add the click event
startBtn.addEventListener('click', () => {
    // This is the magic line that scrolls the page smoothly
    targetSection.scrollIntoView({ 
        behavior: 'smooth' 
    });

    // Optional: Change the button color after clicking to show it worked!
    startBtn.style.backgroundColor = "#fff";
    startBtn.style.color = "#0f172a";
});
// Grab the logo(s)
const logos = document.querySelectorAll('.logo, .footer-logo');

logos.forEach(logo => {
    logo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});