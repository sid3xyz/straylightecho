// STRAYLIGHT Footer - GonzoAdmin Terminal
console.log('STRAYLIGHT Footer loading...');

class StraylightFooter {
    constructor() {
        this.sessionComments = [
            "Neural pathways optimized, data streams flowing clean",
            "Cross-domain nexus established, no more duplicate echoes",
            "CORS barriers bypassed, the matrix accepts our assets",
            "Repository hygiene protocols enforced, only pure code remains", 
            "CDN nexus deployed, assets synchronized across the grid",
            "Cyberpunk aesthetics integrated, the system looks proper now",
            "File duplication eliminated, efficiency protocols active",
            "Shared asset architecture rebuilt, nexus operational",
            "Git repositories purged of documentation bloat",
            "Development workflow streamlined, tokens conserved"
        ];
        
        this.currentComment = this.getRandomComment();
        this.timestamp = this.getCurrentTimestamp();
    }
    
    getRandomComment() {
        return this.sessionComments[Math.floor(Math.random() * this.sessionComments.length)];
    }
    
    getCurrentTimestamp() {
        const now = new Date();
        return now.toLocaleString('en-US', {
            month: '2-digit',
            day: '2-digit', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    }
    
    inject() {
        console.log('Injecting STRAYLIGHT footer...');
        
        // Create footer HTML
        const footerHTML = `
            <div class="straylight-footer" id="straylight-footer">
                <div class="straylight-footer-content">
                    <span class="footer-admin-tag">GonzoAdmin:</span>
                    <span class="footer-session-comment">${this.currentComment}</span>
                    <span class="footer-timestamp">${this.timestamp}</span>
                </div>
            </div>
        `;
        
        // Inject footer at end of body
        document.body.insertAdjacentHTML('beforeend', footerHTML);
        document.body.classList.add('has-straylight-footer');
        console.log('STRAYLIGHT footer injected successfully');
    }
}

// Auto-inject footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready, creating STRAYLIGHT footer...');
    const footer = new StraylightFooter();
    footer.inject();
});

// Fallback for immediate execution
if (document.readyState !== 'loading') {
    console.log('DOM already loaded, creating STRAYLIGHT footer immediately...');
    const footer = new StraylightFooter();
    footer.inject();
}

console.log('STRAYLIGHT Footer script loaded');