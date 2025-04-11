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
    
    const progressBar = loadingScreen.querySelector('.loading div[style*="width: 0%"]');
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 20;
        progressBar.style.width = `${Math.min(progress, 100)}%`;
        if (progress >= 100) {
            clearInterval(loadingInterval);
            loadingText.textContent = 'Welcome to QuantSploit';
            
            // Add confetti celebration effect
            const confetti = document.createElement('div');
            confetti.className = 'absolute inset-0 z-50 pointer-events-none';
            confetti.innerHTML = `
                <div class="absolute w-2 h-2 bg-premium-gold rounded-full animate-float" style="left: 20%"></div>
                <div class="absolute w-2 h-2 bg-premium-blue rounded-full animate-float animation-delay-300" style="left: 40%"></div>
                <div class="absolute w-2 h-2 bg-premium-gold rounded-full animate-float animation-delay-600" style="left: 60%"></div>
                <div class="absolute w-2 h-2 bg-premium-blue rounded-full animate-float animation-delay-900" style="left: 80%"></div>
            `;
            loadingScreen.appendChild(confetti);
            
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

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all modal triggers and modals
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modals = document.querySelectorAll('.modal-overlay');
    const closeButtons = document.querySelectorAll('.modal-close');

    // Add click event to each trigger
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(`${modalId}-modal`);
            
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    // Add click event to close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    });

    // Close modal when clicking outside content
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                this.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    });

    // Whitelist verification functionality
    const downloadTrigger = document.getElementById('download-trigger');
    const whitelistModal = document.getElementById('whitelist-modal');
    const whitelistChecking = document.getElementById('whitelist-checking');
    const whitelistSuccess = document.getElementById('whitelist-success');
    const whitelistFail = document.getElementById('whitelist-fail');
    const progressBar = document.querySelector('.progress-bar');

    if (downloadTrigger) {
        downloadTrigger.addEventListener('click', function() {
            // Show whitelist verification modal
            whitelistModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Show checking state
            whitelistChecking.style.display = 'block';
            whitelistSuccess.style.display = 'none';
            whitelistFail.style.display = 'none';
            
            // Simulate whitelist check (replace with actual API call)
            setTimeout(() => {
                // For demo purposes, randomly pass/fail
                const isWhitelisted = Math.random() > 0.5;
                
                whitelistChecking.style.display = 'none';
                
                if (isWhitelisted) {
                    // Show success state
                    whitelistSuccess.style.display = 'block';
                    
                    // Enhanced download progress with Tailwind
                    let progress = 0;
                    const progressInterval = setInterval(() => {
                        progress += 5;
                        progressBar.style.width = `${progress}%`;
                        
                        if (progress >= 100) {
                            clearInterval(progressInterval);
                            setTimeout(() => {
                                whitelistModal.classList.remove('active');
                                document.body.style.overflow = '';
                                progressBar.style.width = '0';
                                
                                // Start actual download
                                window.location.href = 'assets/software-package.zip';
                            }, 500);
                        }
                    }, 100);
                } else {
                    // Show fail state with retry button
                    whitelistFail.style.display = 'block';
                    const retryBtn = document.createElement('button');
                    retryBtn.className = 'mt-4 px-4 py-2 bg-premium-blue hover:bg-premium-gold text-white rounded-lg transition-colors';
                    retryBtn.textContent = 'Retry Verification';
                    retryBtn.addEventListener('click', () => {
                        whitelistFail.style.display = 'none';
                        whitelistChecking.style.display = 'block';
                        
                        // Simulate retry verification
                        setTimeout(() => {
                            whitelistChecking.style.display = 'none';
                            if (Math.random() > 0.7) { // 30% chance of success on retry
                                whitelistSuccess.style.display = 'block';
                                // Start download progress...
                            } else {
                                whitelistFail.style.display = 'block';
                            }
                        }, 1500);
                    });
                    
                    if (!whitelistFail.querySelector('button')) {
                        whitelistFail.appendChild(retryBtn);
                    }
                }
            }, 2000);
        });
    }

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
});