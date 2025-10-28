// 4-Eyes Luxury Spa Website - Main JavaScript
// Professional interactions and functionality

document.addEventListener('DOMContentLoaded', function() {
    console.log('4-Eyes website loaded successfully');

    // Initialize all features
    initMobileMenu();
    initSmoothScrolling();
    initNavbarScroll();
    initContactForm();
    initScrollAnimations();
    initChatbot();
});

// ===========================
// Mobile Menu Toggle
// ===========================
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navLinks.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navLinks.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}

// ===========================
// Smooth Scrolling & Active Nav
// ===========================
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Skip if it's just "#"
            if (targetId === '#') {
                e.preventDefault();
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                e.preventDefault();

                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation link on scroll
    window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const navbarHeight = document.getElementById('navbar').offsetHeight;

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===========================
// Navbar Scroll Effect
// ===========================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ===========================
// Contact Form Handling
// ===========================
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                business: document.getElementById('business').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value || 'Not provided',
                message: document.getElementById('message').value || 'No message provided'
            };

            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            try {
                // Send form data to n8n webhook
                const response = await fetch('https://www.n8n.4-eyes.eu/webhook/97e2b3b9-e0e4-4104-b5c7-e1689e40fb0f', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    showFormStatus('success', 'Thank you! Your consultation request has been sent. We\'ll be in touch within 24 hours.');
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }

            } catch (error) {
                console.error('Form submission error:', error);
                showFormStatus('error', 'Oops! Something went wrong. Please try again or email us directly at francois-xavier.peers@4-eyes.eu');
            } finally {
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }
        });
    }
}

function showFormStatus(type, message) {
    const formStatus = document.getElementById('form-status');

    if (formStatus) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;

        // Auto-hide after 8 seconds
        setTimeout(() => {
            formStatus.className = 'form-status';
        }, 8000);
    }
}

// ===========================
// Scroll Animations
// ===========================
function initScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.problem-card, .feature-card, .step, .benefit-item');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===========================
// Utility Functions
// ===========================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===========================
// Performance Enhancements
// ===========================

// Optimize scroll event listeners
const optimizedScroll = throttle(updateActiveNav, 100);
window.addEventListener('scroll', optimizedScroll);

// Preload critical images (if you add actual images later)
function preloadImages(imageUrls) {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Example: preloadImages(['assets/images/hero.jpg', 'assets/images/spa.jpg']);

// ===========================
// Analytics & Tracking (Optional)
// ===========================

// Track consultation button clicks
document.querySelectorAll('a[href="#contact"]').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Consultation CTA clicked:', this.textContent);
        // Add Google Analytics or other tracking here
        // Example: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': 'Schedule Consultation' });
    });
});

// Track external link clicks
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Email link clicked:', this.href);
        // Add tracking here if needed
    });
});

// ===========================
// Accessibility Enhancements
// ===========================

// Add focus visible polyfill for better keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// ===========================
// Progressive Enhancement
// ===========================

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-base', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
}

// ===========================
// Chatbot Functionality
// ===========================
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotFullscreen = document.getElementById('chatbot-fullscreen');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const quickReplyBtns = document.querySelectorAll('.quick-reply-btn');

    // Webhook configuration
    const WEBHOOK_URL = 'https://www.n8n.4-eyes.eu/webhook/25f18fb3-44ce-4178-bfc1-080a2edc28fc';
    const MAX_RETRIES = 3;
    const RETRY_DELAY = 1000; // milliseconds

    // Toggle chatbot open
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.classList.add('active');
            chatbotToggle.style.display = 'none';
            chatbotInput.focus();
        });
    }

    // Close chatbot
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.classList.remove('active');
            chatbotContainer.classList.remove('fullscreen');
            chatbotToggle.style.display = 'flex';
            updateFullscreenIcon(false);
        });
    }

    // Toggle fullscreen
    if (chatbotFullscreen) {
        chatbotFullscreen.addEventListener('click', function() {
            const isFullscreen = chatbotContainer.classList.toggle('fullscreen');
            updateFullscreenIcon(isFullscreen);
        });
    }

    // Update fullscreen button icon
    function updateFullscreenIcon(isFullscreen) {
        const maximizeIcon = chatbotFullscreen.querySelector('.icon-maximize');
        const minimizeIcon = chatbotFullscreen.querySelector('.icon-minimize');

        if (isFullscreen) {
            maximizeIcon.style.display = 'none';
            minimizeIcon.style.display = 'block';
            chatbotFullscreen.setAttribute('title', 'Exit fullscreen');
        } else {
            maximizeIcon.style.display = 'block';
            minimizeIcon.style.display = 'none';
            chatbotFullscreen.setAttribute('title', 'Fullscreen');
        }
    }

    // Handle quick reply clicks
    quickReplyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const message = this.dataset.message;
            sendMessage(message);
        });
    });

    // Send message function
    async function sendMessage(messageText) {
        if (!messageText || !messageText.trim()) return;

        // Add user message to chat
        addUserMessage(messageText);

        // Clear input
        if (chatbotInput) {
            chatbotInput.value = '';
        }

        // Show typing indicator
        showTypingIndicator();

        // Call webhook with retry logic
        let response = await callWebhookWithRetry(messageText, MAX_RETRIES);

        // Hide typing indicator
        hideTypingIndicator();

        // Display response
        if (response.success) {
            addBotMessage(response.message);
        } else {
            addBotMessage(response.error);
        }
    }

    // Call webhook with automatic retry
    async function callWebhookWithRetry(message, retriesLeft) {
        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: message }),
                timeout: 30000 // 30 second timeout
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Log response for debugging
            console.log('Webhook response:', data);

            // Extract text from various possible response formats
            let responseText = '';

            if (typeof data === 'string') {
                // Response is plain text
                responseText = data;
            } else if (data.response) {
                // Response has 'response' field
                responseText = data.response;
            } else if (data.message) {
                // Response has 'message' field
                responseText = data.message;
            } else if (data.text) {
                // Response has 'text' field
                responseText = data.text;
            } else if (data.output) {
                // Response has 'output' field
                responseText = data.output;
            } else if (data.reply) {
                // Response has 'reply' field
                responseText = data.reply;
            } else {
                // Fallback: look for first string value in the object
                const firstStringValue = Object.values(data).find(val => typeof val === 'string');
                responseText = firstStringValue || 'I received your message but had trouble understanding the response format.';
            }

            return {
                success: true,
                message: responseText
            };

        } catch (error) {
            console.error('Webhook error:', error);

            // Retry logic
            if (retriesLeft > 1) {
                console.log(`Retrying... (${retriesLeft - 1} attempts left)`);
                await sleep(RETRY_DELAY);
                return callWebhookWithRetry(message, retriesLeft - 1);
            } else {
                return {
                    success: false,
                    error: "I'm having trouble connecting right now. Please try again in a moment, or contact us directly at francois-xavier.peers@4-eyes.eu for immediate assistance."
                };
            }
        }
    }

    // Sleep utility for retry delay
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Add user message to chat
    function addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message user-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">🧘</div>
            <div class="message-content">
                <p>${escapeHtml(message)}</p>
            </div>
        `;
        chatbotMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    // Add bot message to chat
    function addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message bot-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">👀</div>
            <div class="message-content">
                <p>${escapeHtml(message)}</p>
            </div>
        `;
        chatbotMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    // Show typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-message bot-message typing-indicator-message';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">👀</div>
            <div class="message-content typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        chatbotMessages.appendChild(typingDiv);
        scrollToBottom();
    }

    // Hide typing indicator
    function hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Scroll to bottom of messages
    function scrollToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Send message on button click
    if (chatbotSend) {
        chatbotSend.addEventListener('click', function() {
            const message = chatbotInput.value;
            sendMessage(message);
        });
    }

    // Send message on Enter key
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const message = chatbotInput.value;
                sendMessage(message);
            }
        });
    }
}

// ===========================
// Console Easter Egg (Optional)
// ===========================
console.log('%c👀 4-Eyes - AI for Wellness', 'font-size: 20px; font-weight: bold; color: #2C5F5D;');
console.log('%cInterested in how this website works? We\'d love to chat about AI solutions for your spa!', 'color: #8A8A8A;');
console.log('%cEmail: francois-xavier.peers@4-eyes.eu', 'color: #C9A468;');
