/* ============================================
   KLINTH LOB · Shared JavaScript
   Lightbox system + Dark mode + Root poem
   ============================================ */

// ========== ROOT POEM (your words) ==========
const ROOT_POEM = `Like a seed, I don't know what I'll become.
But I know where I began.
Root is not the flower.
Root is the underground.
Unseen.
But everything grows from it.`;

// Display poem in console when on Root page (quiet ritual)
function displayRootPoem() {
  if (document.body.classList.contains('root-page') || window.location.pathname.includes('root.html')) {
    console.log('%c🌱 ROOT POEM 🌱', 'color: #D9D0E8; font-size: 12px;');
    console.log(`%c${ROOT_POEM}`, 'color: #A09AAB; font-style: italic;');
  }
}

// ========== LIGHTBOX SYSTEM ==========
function initLightbox() {
  let lightbox = document.getElementById('globalLightbox');
  
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'globalLightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <span class="close-lightbox">&times;</span>
        <div class="lightbox-emoji" id="lbEmoji">◌</div>
        <div class="lightbox-caption" id="lbCaption"></div>
      </div>
    `;
    
    // Add lightbox styles if not in CSS
    const style = document.createElement('style');
    style.textContent = `
      .lightbox {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        z-index: 10000;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(8px);
      }
      .lightbox.active {
        display: flex;
      }
      .lightbox-content {
        max-width: 90vw;
        max-height: 85vh;
        background: var(--bg-primary);
        border-radius: 32px;
        padding: 1.5rem;
        text-align: center;
        position: relative;
        min-width: 280px;
      }
      .lightbox-emoji {
        font-size: 5rem;
        background: var(--pale-lavender);
        padding: 2rem;
        border-radius: 24px;
        color: var(--accent);
      }
      .lightbox-caption {
        margin-top: 1rem;
        color: var(--text-primary);
        font-weight: 500;
      }
      .close-lightbox {
        position: absolute;
        top: 12px;
        right: 20px;
        font-size: 2rem;
        cursor: pointer;
        color: var(--text-secondary);
        transition: color 0.2s;
      }
      .close-lightbox:hover {
        color: var(--accent);
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(lightbox);
    
    const closeBtn = lightbox.querySelector('.close-lightbox');
    closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }
  
  window.showLightbox = function(symbol, caption) {
    const lb = document.getElementById('globalLightbox');
    document.getElementById('lbEmoji').innerText = symbol || '◌';
    document.getElementById('lbCaption').innerHTML = caption || '';
    lb.classList.add('active');
  };
}

// ========== DARK MODE ==========
function initDarkMode() {
  const savedTheme = localStorage.getItem('klinthLobTheme');
  const toggleBtn = document.getElementById('darkModeToggle');
  
  if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    if (toggleBtn) toggleBtn.textContent = 'Light';
  }
  
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (document.body.hasAttribute('data-theme')) {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('klinthLobTheme', 'light');
        toggleBtn.textContent = 'Dark';
      } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('klinthLobTheme', 'dark');
        toggleBtn.textContent = 'Light';
      }
    });
  }
}

// ========== ATTACH GALLERY LIGHTBOX ==========
function attachGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.art-piece, .craft-piece, .art-item, .craft-item');
  galleryItems.forEach(item => {
    item.removeEventListener('click', item._lightboxHandler);
    const handler = () => {
      const title = item.getAttribute('data-title') || 
                    item.querySelector('.art-title, .craft-title, .item-caption')?.innerText || 
                    'Untitled';
      const symbol = item.getAttribute('data-symbol') || '◌';
      window.showLightbox(symbol, title);
    };
    item._lightboxHandler = handler;
    item.addEventListener('click', handler);
  });
}

// ========== DISPLAY ROOT POEM IN CONSOLE ==========
// This runs when the page loads and quietly shows your poem in developer console
// Open Console (F12) on Root page to see it

// ========== INITIALIZE EVERYTHING ==========
document.addEventListener('DOMContentLoaded', () => {
  initLightbox();
  initDarkMode();
  attachGalleryLightbox();
  displayRootPoem();
  
  // Also log the poem to console with a gentle welcome
  console.log('%c◌ KLINTH LOB ◌', 'color: #D9D0E8; font-size: 14px; letter-spacing: 2px;');
  console.log('%cinner place · shared outward', 'color: #A09AAB; font-style: italic;');
});