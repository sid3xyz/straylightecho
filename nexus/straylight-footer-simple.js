// SIMPLE FOOTER TEST
console.log('Footer script loaded!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready, creating footer...');
    
    const footerHTML = `
        <div style="position: fixed; bottom: 0; left: 0; right: 0; height: 32px; background: #111; color: #0f0; z-index: 9999; padding: 8px; font-family: monospace; border-top: 1px solid #0f0;">
            GonzoAdmin: Simple footer test working - ${new Date().toLocaleTimeString()}
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    console.log('Footer injected!');
});

console.log('Footer script end');