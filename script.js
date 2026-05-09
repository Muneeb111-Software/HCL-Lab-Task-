// Show popup when page loads
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('popup').style.display = 'flex';
    }, 1000);
});

// Close popup function
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Button click alert
document.getElementById('clickBtn').addEventListener('click', function() {
    alert('🚀 Welcome! Thanks for clicking!');
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if(name && email && message) {
        alert('✅ Thank you ' + name + '! Your message has been sent.');
        this.reset();
    } else {
        alert('⚠️ Please fill all fields!');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add hover effect on project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        let projectName = this.querySelector('h3').innerText;
        alert('🔧 ' + projectName + ' - Coming soon!');
    });
});

// Typewriter effect for hero heading (Bonus)
const heading = document.querySelector('.hero-content h1 span');
if(heading) {
    const originalText = heading.innerText;
    heading.innerText = '';
    let i = 0;
    function typeWriter() {
        if(i < originalText.length) {
            heading.innerText += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
}