// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle nav
            nav.classList.toggle('active');

            // Animate links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger animation
            burger.classList.toggle('toggle');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            navLinks.forEach(link => {
                link.style.animation = '';
            });
            burger.classList.remove('toggle');
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hobbies page specific header behavior
if (document.body.classList.contains('hobbies-page')) {
    const hobbiesHeader = document.querySelector('.hobbies-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight * 0.1) {
            hobbiesHeader.classList.add('scrolled');
        } else {
            hobbiesHeader.classList.remove('scrolled');
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Timeline items animation
document.querySelectorAll('.timeline-item').forEach(item => {
    item.classList.add('fade-in');
    observer.observe(item);
});

// Project cards animation
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Hobby cards animation
document.querySelectorAll('.hobby-card').forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.animationDelay = `${index * 0.2}s`;
    observer.observe(card);
});

// Contact form submission (placeholder - replace with actual form handling)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Show success message (replace with actual form submission logic)
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        this.reset();
    });
}

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }

    .burger.toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .burger.toggle .line2 {
        opacity: 0;
    }

    .burger.toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    .fade-in.active {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(style);

// Parallax effect for hobbies hero image
if (document.body.classList.contains('hobbies-page')) {
    const heroImage = document.querySelector('.hero-image img');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        if (heroImage) {
            heroImage.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Add typing effect to hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect on hero subtitle if present
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle && heroSubtitle.textContent) {
    const originalText = heroSubtitle.textContent;
    // Small delay before starting typing effect
    setTimeout(() => {
        typeWriter(heroSubtitle, originalText, 30);
    }, 1000);
}
