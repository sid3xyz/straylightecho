// STRAYLIGHT ECOSYSTEM CONTROL BAR
// JavaScript functionality for the retro-futuristic header

class StraylightControlBar {
    constructor() {
        this.currentSite = this.detectCurrentSite();
        this.initializeTime();
        this.initializeNotifications();
        this.initializeGlitchEffects();
        this.initializeNavigation();
    }

    detectCurrentSite() {
        const hostname = window.location.hostname;
        if (hostname.includes('slirc.net')) return 'slirc';
        if (hostname.includes('straylightecho.com')) return 'straylightecho';
        return 'unknown';
    }

    initializeTime() {
        const timeElement = document.querySelector('.system-time');
        if (!timeElement) return;

        const updateTime = () => {
            const now = new Date();
            const timeString = now.toTimeString().split(' ')[0]; // HH:MM:SS format
            timeElement.textContent = `[${timeString}]`;
        };

        updateTime();
        setInterval(updateTime, 1000);
    }

    initializeNotifications() {
        const notificationIcon = document.querySelector('.notification-icon');
        if (!notificationIcon) return;

        // Simulate random notifications (for demo purposes)
        const hasNotification = Math.random() > 0.7;
        if (hasNotification) {
            notificationIcon.classList.add('has-notification');
            notificationIcon.title = 'New system message available';
        }

        notificationIcon.addEventListener('click', () => {
            if (notificationIcon.classList.contains('has-notification')) {
                notificationIcon.classList.remove('has-notification');
                this.showNotificationModal();
            }
        });
    }

    showNotificationModal() {
        // Simple notification display
        const message = "STRAYLIGHT SYSTEM MESSAGE:\n\nNetwork status: OPTIMAL\nAll services: ONLINE\nSecurity level: GREEN\n\n> Connection established to the grid.";
        alert(message);
    }

    initializeGlitchEffects() {
        const glitchElements = document.querySelectorAll('.glitch-effect');
        glitchElements.forEach(element => {
            element.setAttribute('data-text', element.textContent);
        });
    }

    initializeNavigation() {
        // Set active navigation based on current site
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            // Set active state for current site
            if (
                (this.currentSite === 'slirc' && href.includes('slirc.net')) ||
                (this.currentSite === 'straylightecho' && href.includes('straylightecho.com'))
            ) {
                link.classList.add('active');
            }
        });

        // Add click tracking
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.playNavigationSound();
            });
        });
    }

    playNavigationSound() {
        // Optional: Add retro UI sounds
        // This would require audio files to be loaded
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);

            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            // Silent fail if audio context not available
        }
    }

    // Method to dynamically inject the control bar into any page
    static inject() {
        const controlBarHTML = `
            <div class="straylight-control-bar">
                <div class="control-sections">
                    <!-- STATUS / BRAND Section -->
                    <div class="control-brand">
                        <a href="https://straylightecho.com" class="straylight-logo glitch-effect">STRAYLIGHT</a>
                        <div class="system-status">
                            <div class="status-indicator"></div>
                            <span>ONLINE</span>
                        </div>
                    </div>

                    <!-- MAIN NAVIGATION Section -->
                    <nav class="control-nav">
                        <a href="https://straylightecho.com" class="nav-link glitch-effect">//:STRAYLIGHT_ECHO</a>
                        <a href="https://slirc.net" class="nav-link glitch-effect">//:SLIRC</a>
                        <a href="#" class="nav-link glitch-effect">//:MATRIX</a>
                        <a href="#" class="nav-link glitch-effect">//:GRID</a>
                        <a href="#" class="nav-link glitch-effect">//:NEXUS</a>
                    </nav>

                    <!-- SYSTEM / USER Section -->
                    <div class="control-system">
                        <div class="system-time">[00:00:00]</div>
                        <div class="notification-icon" title="System notifications"></div>
                        <div class="user-status">USER: [GUEST]</div>
                        <a href="#" class="sign-on-link">SIGN ON</a>
                    </div>
                </div>
            </div>
        `;

        // Inject CSS if not already present
        if (!document.querySelector('#straylight-control-bar-styles')) {
            const cssLink = document.createElement('link');
            cssLink.id = 'straylight-control-bar-styles';
            cssLink.rel = 'stylesheet';
            cssLink.href = 'https://straylightecho.com/shared/straylight-control-bar.css'; // Absolute CDN path
            document.head.appendChild(cssLink);
        }

        // Inject HTML at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', controlBarHTML);
        
        // Add body class for margin adjustment
        document.body.classList.add('has-straylight-header');

        // Initialize functionality
        new StraylightControlBar();
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Only inject if not already present
    if (!document.querySelector('.straylight-control-bar')) {
        StraylightControlBar.inject();
    }
});

// Export for manual initialization if needed
window.StraylightControlBar = StraylightControlBar;