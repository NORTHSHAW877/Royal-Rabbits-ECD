// Gallery Carousel Functionality
// Add this to your script.js file or create a separate gallery.js file

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (!carousel || images.length === 0) return; // Exit if carousel doesn't exist
    
    let currentIndex = 0;
    const totalImages = images.length;
    
    // Initialize carousel
    function initCarousel() {
        updateCarousel();
        updateIndicators();
    }
    
    // Update carousel position
    function updateCarousel() {
        const translateX = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
    }
    
    // Update indicators
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Go to next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
        updateIndicators();
    }
    
    // Go to previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
        updateIndicators();
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
        updateIndicators();
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Indicator click events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left - go to next
            } else {
                prevSlide(); // Swipe right - go to prev
            }
        }
    }
    
    // Auto-play functionality (optional)
    let autoPlayInterval;
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Start auto-play (uncomment if you want automatic sliding)
    // startAutoPlay();
    
    // Pause auto-play on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Initialize the carousel
    initCarousel();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        updateCarousel();
    });
});

    // Royal Rabbits - Main JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('#main-nav');
    
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', function() {
            // Toggle the active class on the navigation
            mainNav.classList.toggle('active');
            
            // Toggle hamburger animation (optional)
            hamburger.classList.toggle('active');
            
            // Log for debugging
            console.log('Hamburger clicked, nav active:', mainNav.classList.contains('active'));
        });
    }
    
    // Close menu when clicking on a navigation link (mobile)
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            if (!hamburger.contains(event.target) && !mainNav.contains(event.target)) {
                mainNav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mainNav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Smooth scrolling for anchor links (if needed)
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