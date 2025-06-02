// Navbar scroll behavior
const navbar = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Add/remove background color based on scroll position
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved dark mode preference
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDarkScheme.matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

darkModeToggle.addEventListener('click', () => {
    let theme = 'light';
    if (document.documentElement.getAttribute('data-theme') !== 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        theme = 'dark';
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    localStorage.setItem('theme', theme);
});

// Initialize tooltips for skill items
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    const tooltip = item.getAttribute('data-tooltip');
    if (tooltip) {
        item.addEventListener('mouseenter', (e) => {
            const tooltipEl = document.createElement('div');
            tooltipEl.className = 'tooltip';
            tooltipEl.textContent = tooltip;
            
            const rect = item.getBoundingClientRect();
            tooltipEl.style.top = `${rect.top - 30}px`;
            tooltipEl.style.left = `${rect.left + (rect.width / 2)}px`;
            
            document.body.appendChild(tooltipEl);
            
            setTimeout(() => tooltipEl.classList.add('show'), 50);
        });
        
        item.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.classList.remove('show');
                setTimeout(() => tooltip.remove(), 200);
            }
        });
    }
});

// Experience cards mouse move effect
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.experience-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            card.classList.add('active');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('active');
        });
    });
}); 

// // Theme Switcher
// document.addEventListener('DOMContentLoaded', function() {
// const toggle = document.getElementById('toggle');
// const savedTheme = localStorage.getItem('theme') || 'dark';
// document.documentElement.setAttribute('data-theme', savedTheme);
// toggle.checked = savedTheme === 'dark';

// toggle.addEventListener('change', () => {
//     const newTheme = toggle.checked ? 'dark' : 'light';
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
// });

// // Typing Animation
// const texts = ["Data Scientist Trainee", "Machine Learning Enthusiast"];
// const typingText = document.querySelector('.typing-text');
// let textIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// function type() {
//     const currentText = texts[textIndex];
//     typingText.textContent = isDeleting ? currentText.substring(0, charIndex - 1) : currentText.substring(0, charIndex + 1);
//     charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

//     let typeSpeed = isDeleting ? 50 : 100;
//     if (!isDeleting && charIndex === currentText.length) {
//         typeSpeed = 1500;
//         isDeleting = true;
//     } else if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         textIndex = (textIndex + 1) % texts.length;
//         typeSpeed = 500;
//     }
//     setTimeout(type, typeSpeed);
// }
// type();

// // Navbar active state
// const sections = document.querySelectorAll('section[id]');
// const navLinks = document.querySelectorAll('.nav-link');
// window.addEventListener('scroll', () => {
//     let current = '';
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (pageYOffset >= (sectionTop - sectionHeight/3)) {
//             current = section.getAttribute('id');
//         }
//     });
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${current}`) {
//             link.classList.add('active');
//         }
//     });
// });
        // });