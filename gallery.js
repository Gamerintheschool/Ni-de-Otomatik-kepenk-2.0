// Hero Gallery Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Hero Gallery Slideshow
    const heroSlides = document.querySelectorAll('.gallery-slide');
    const heroDots = document.querySelectorAll('.gallery-dots .dot');
    let currentSlide = 0;

    function showSlide(index) {
        // Hide all slides
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroDots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        if (heroSlides[index]) {
            heroSlides[index].classList.add('active');
            heroDots[index].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    }

    // Auto-advance slides every 4 seconds
    setInterval(nextSlide, 4000);

    // Dot click handlers
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Product Gallery Functionality
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const mainImage = card.querySelector('.product-image img');
        const thumbnails = card.querySelectorAll('.thumbnail');
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Remove active class from all thumbnails in this card
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
                
                // Update main image
                if (mainImage) {
                    mainImage.src = this.src.replace('60x60', '300x200');
                    mainImage.alt = this.alt;
                }
            });
        });
    });

    // Add smooth scroll animation for gallery interactions
    const style = document.createElement('style');
    style.textContent = `
        .gallery-slide {
            transform: translateX(0);
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }
        
        .product-image img {
            transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .thumbnail {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .thumbnail:hover {
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }
    `;
    document.head.appendChild(style);
});