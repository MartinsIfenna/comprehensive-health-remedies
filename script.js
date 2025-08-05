// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.condition-card, .remedy-card, .testimonial-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form handling
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        address: document.getElementById('address').value,
        phone1: document.getElementById('phone1').value,
        phone2: document.getElementById('phone2').value,
        package: document.getElementById('package').value
    };
    
    // Validate required fields
    if (!formData.fullName || !formData.address || !formData.phone1 || !formData.package) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Create WhatsApp message
    const message = createWhatsAppMessage(formData);
    const whatsappURL = `https://wa.me/2348079001128?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show success message
    showNotification('Order form prepared! You will be redirected to WhatsApp to complete your order.', 'success');
    
    // Reset form
    orderForm.reset();
});

function createWhatsAppMessage(data) {
    return `🌿 HEALTH REMEDY ORDER REQUEST 🌿

📝 ORDER DETAILS:
• Full Name: ${data.fullName}
• Address: ${data.address}
• Primary Phone: ${data.phone1}
${data.phone2 ? `• Secondary Phone: ${data.phone2}` : ''}
• Package: ${data.package.replace('-', ' ').toUpperCase()}

📞 I would like to place an order for the selected health remedy package. Please provide pricing and delivery information.

Thank you! 🙏`;
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Package price display (optional feature)
const packagePrices = {
    'womens-health': '₦45,000 - ₦65,000',
    'cancer-treatment': '₦75,000 - ₦95,000',
    'heart-health': '₦55,000 - ₦75,000',
    'complete-wellness': '₦120,000 - ₦150,000'
};

document.getElementById('package').addEventListener('change', function() {
    const selectedPackage = this.value;
    const priceDisplay = document.getElementById('priceDisplay');
    
    if (selectedPackage && packagePrices[selectedPackage]) {
        if (!priceDisplay) {
            const priceElement = document.createElement('div');
            priceElement.id = 'priceDisplay';
            priceElement.style.cssText = `
                margin-top: 0.5rem;
                padding: 0.5rem;
                background: #e8f5e8;
                border-radius: 5px;
                color: #2c5530;
                font-weight: 600;
                text-align: center;
            `;
            this.parentNode.appendChild(priceElement);
        }
        document.getElementById('priceDisplay').textContent = `Estimated Price Range: ${packagePrices[selectedPackage]}`;
    } else if (priceDisplay) {
        priceDisplay.remove();
    }
});

// Add CSS for mobile navigation
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding: 2rem 0;
        }

        .nav-menu.active {
            left: 0;
        }

        .nav-menu li {
            margin: 1rem 0;
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;
document.head.appendChild(style);
