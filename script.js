document.addEventListener('DOMContentLoaded', function() {
    // Premium loading experience
    const loadingScreen = document.querySelector('.loading');
    const loadingText = document.createElement('p');
    loadingText.textContent = 'Initializing premium experience...';
    loadingScreen.appendChild(loadingText);
    
    // Simulate loading progress
    const loadingMessages = [
        'Optimizing performance...',
        'Loading assets...',
        'Finalizing setup...',
        'Ready!'
    ];
    
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
            clearInterval(loadingInterval);
            loadingText.textContent = 'Welcome to QuantSploit';
            
            // Add gold welcome effect
            const welcomeEffect = document.createElement('div');
            welcomeEffect.className = 'welcome-effect';
            welcomeEffect.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle at center, 
                    rgba(255, 215, 0, 0.2) 0%, 
                    transparent 70%);
                opacity: 0;
                animation: fadeIn 1s ease-out forwards;
            `;
            loadingScreen.appendChild(welcomeEffect);
            
            // Hide loading screen with delay
            setTimeout(() => {
                loadingScreen.classList.add('hide');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 1000);
        } else {
            const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
            loadingText.textContent = randomMessage;
        }
    }, 500);

    // Initialize particles
    initParticles();
    
    // Enhanced download button
    const downloadBtn = document.querySelector('.download-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Premium download experience
            const btn = this;
            btn.innerHTML = '<span class="btn-loader"></span> Preparing Download...';
            btn.disabled = true;
            
            // Simulate premium download process
            setTimeout(() => {
                // Replace with actual download link when available
                alert('Premium download experience:\nYour download will begin shortly.\n\nFor final implementation, replace this with:\nwindow.location.href = "assets/software-package.zip"');
                
                btn.innerHTML = 'Download Software';
                btn.disabled = false;
            }, 1500);
        });
    }

    // Particle system initialization
    function initParticles() {
        const particlesContainer = document.getElementById('particles-js');
        const particleCount = Math.floor(window.innerWidth / 8); // More particles
        
        // Clear existing particles
        particlesContainer.innerHTML = '';
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random properties with premium variations
            const size = Math.random() * 4 + 1;
            const posX = Math.random() * window.innerWidth;
            const posY = Math.random() * window.innerHeight;
            const delay = Math.random() * 8;
            const duration = Math.random() * 15 + 5;
            const isGold = Math.random() > 0.8; // 20% chance to be gold
            
            // Apply premium styling
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}px`;
            particle.style.top = `${posY}px`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.opacity = Math.random() * 0.3 + 0.1;
            particle.style.background = isGold 
                ? 'radial-gradient(circle, #ffd700, transparent)' 
                : 'radial-gradient(circle, #64b5f6, transparent)';
            particle.style.boxShadow = isGold 
                ? '0 0 10px 2px rgba(255, 215, 0, 0.5)' 
                : '0 0 10px 2px rgba(100, 181, 246, 0.3)';
            particle.style.borderRadius = '50%';
            particle.style.willChange = 'transform, opacity';
            
            particlesContainer.appendChild(particle);
        }

        // Add occasional twinkling effect
        setInterval(() => {
            const particles = document.querySelectorAll('.particle');
            particles.forEach(p => {
                if (Math.random() > 0.9) {
                    p.style.transform = 'scale(1.5)';
                    p.style.opacity = '0.8';
                    setTimeout(() => {
                        p.style.transform = '';
                        p.style.opacity = '';
                    }, 300);
                }
            });
        }, 1000);
    }
});

// Add styles for button loader
const style = document.createElement('style');
style.textContent = `
.btn-loader {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    margin-right: 8px;
    vertical-align: middle;
}
@keyframes spin {
    to { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);
