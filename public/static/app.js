// Linkx-AI JavaScript Interactions

document.addEventListener('DOMContentLoaded', function() {
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
        });
    });

    // Pricing toggle (Monthly/Yearly)
    const billingToggle = document.getElementById('billingToggle');
    if (billingToggle) {
        billingToggle.addEventListener('change', function() {
            const prices = document.querySelectorAll('.price-amount');
            prices.forEach(price => {
                const monthly = price.dataset.monthly;
                const yearly = price.dataset.yearly;
                if (this.checked) {
                    price.textContent = yearly;
                } else {
                    price.textContent = monthly;
                }
            });
        });
    }

    // Navbar scroll effect
    let lastScroll = 0;
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.background = 'rgba(30, 27, 75, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(30, 27, 75, 0.7)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Animate elements on scroll - DISABLED
    // Animations removed for better performance

    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    // Observe stats counters
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                if (target && !counter.classList.contains('counted')) {
                    animateCounter(counter, target);
                    counter.classList.add('counted');
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-counter').forEach(counter => {
        statsObserver.observe(counter);
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Form validation for newsletter
    const newsletterForm = document.querySelector('form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (validateEmail(email)) {
                // Simulate subscription
                showNotification('Thank you for subscribing!', 'success');
                this.reset();
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }

    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Notification system
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Add hover effects to cards
    document.querySelectorAll('.hover-lift').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(124, 58, 237, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });

    // Parallax effect for hero section - DISABLED
    // Removed to eliminate sliding animations

    // Testimonial carousel (simple implementation)
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    
    if (prevButton && nextButton && testimonials.length > 0) {
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
            
            // Update dots
            const dots = document.querySelectorAll('.testimonial-dot');
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('bg-purple-600');
                    dot.classList.remove('bg-gray-300');
                } else {
                    dot.classList.add('bg-gray-300');
                    dot.classList.remove('bg-purple-600');
                }
            });
        }
        
        prevButton.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
        
        nextButton.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
        
        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    // Add loading animation to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.classList.contains('loading')) return;
            
            // Add loading state for demo purposes
            if (this.textContent.includes('Get Started') || 
                this.textContent.includes('Start Free Trial')) {
                const originalText = this.innerHTML;
                this.classList.add('loading');
                this.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Loading...';
                
                setTimeout(() => {
                    this.classList.remove('loading');
                    this.innerHTML = originalText;
                }, 1500);
            }
        });
    });

    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add ripple effect to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.className = 'ripple';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Enhanced Typing animation for hero titles
    function typeWriter(element, text, speed = 80, callback) {
        let i = 0;
        element.textContent = '';
        element.style.borderRight = '3px solid #7c3aed';
        element.style.paddingRight = '5px';
        element.style.display = 'inline-block';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // Keep blinking cursor for a moment
                setTimeout(() => {
                    element.style.borderRight = 'none';
                    element.style.animation = 'none';
                    if (callback) callback();
                }, 1000);
            }
        }
        
        // Add blinking cursor animation
        element.style.animation = 'blink-caret 0.75s step-end infinite';
        type();
    }

    // Animate main heading with typing effect (only once per session)
    const typingText = document.querySelector('.typing-text');
    const typingGradient = document.querySelector('.typing-gradient');
    
    if (typingText && !sessionStorage.getItem('hero-typed')) {
        const text1 = typingText.textContent.trim();
        const text2 = typingGradient ? typingGradient.textContent.trim() : '';
        
        // Type first part
        typeWriter(typingText, text1, 60, () => {
            // Then type gradient part
            if (typingGradient) {
                setTimeout(() => {
                    typeWriter(typingGradient, text2, 60);
                }, 300);
            }
        });
        
        sessionStorage.setItem('hero-typed', 'true');
    }

    // Animate gradient text
    document.querySelectorAll('.gradient-text, .text-transparent.bg-clip-text').forEach(element => {
        if (!element.classList.contains('animated-gradient-text')) {
            element.classList.add('animated-gradient-text');
        }
    });

    // Letter by letter animation - DISABLED for section headings
    // Only apply to main page title (h1) for cleaner experience

    // Fade in animation - DISABLED for cleaner experience
    // Removed to keep only title typing animation

    // Console welcome message
    console.log('%c🚀 Linkx-AI', 'font-size: 24px; font-weight: bold; color: #7c3aed;');
    console.log('%cWelcome to Linkx-AI! Built with Hono + Cloudflare Pages', 'font-size: 14px; color: #6b7280;');
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
