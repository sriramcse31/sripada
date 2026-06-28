/**
 * partials/loader.js
 * Fetches and injects the shared header and footer partials, then initialises
 * all header-related behaviours (theme toggle, mobile nav, scroll shadow).
 *
 * Usage — add ONE script tag near the top of <body>, BEFORE the page's <main>:
 *   <div id="site-header"></div>
 *   <script src="./partials/loader.js"></script>
 *
 * And ONE placeholder near the bottom, BEFORE </body>:
 *   <div id="site-footer"></div>
 *   <script>loadPartial('footer', 'site-footer', initFooter);</script>
 */

(function () {
  /**
   * Fetches a partial HTML file and injects it into the target element.
   * After injection, runs the optional callback so callers can initialise JS.
   */
  function loadPartial(name, targetId, callback) {
    var target = document.getElementById(targetId);
    if (!target) return;
    fetch('./partials/' + name + '.html')
      .then(function (r) { return r.text(); })
      .then(function (html) {
        target.innerHTML = html;
        // Re-execute any <script> tags inside the injected HTML
        target.querySelectorAll('script').forEach(function (oldScript) {
          var newScript = document.createElement('script');
          Array.from(oldScript.attributes).forEach(function (a) {
            newScript.setAttribute(a.name, a.value);
          });
          newScript.textContent = oldScript.textContent;
          oldScript.parentNode.replaceChild(newScript, oldScript);
        });
        if (typeof callback === 'function') callback();
      })
      .catch(function (err) {
        console.error('[loader.js] Failed to load partial: ' + name, err);
      });
  }

  // ── Initialise header behaviours after the partial is injected ──────────
  function initHeader() {
    // 1. Theme toggle
    (function () {
      var html     = document.documentElement;
      var btn      = document.getElementById('theme-toggle');
      var iconSun  = document.getElementById('icon-sun');
      var iconMoon = document.getElementById('icon-moon');
      var dark     = window.matchMedia('(prefers-color-scheme: dark)').matches;
      function applyTheme(isDark) {
        dark = isDark;
        html.classList.toggle('dark', isDark);
        html.setAttribute('data-theme', isDark ? 'dark' : 'light');
        if (btn) {
          btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
          if (iconSun)  iconSun.classList.toggle('hidden', isDark);
          if (iconMoon) iconMoon.classList.toggle('hidden', !isDark);
        }
      }
      applyTheme(dark);
      if (btn) btn.addEventListener('click', function () { applyTheme(!dark); });
    })();

    // 2. Mobile nav drawer
    (function () {
      var openBtn  = document.getElementById('nav-open');
      var closeBtn = document.getElementById('nav-close');
      var drawer   = document.getElementById('mobile-nav');
      var overlay  = document.getElementById('nav-overlay');
      if (!openBtn || !closeBtn || !drawer || !overlay) return;
      var navLinks = drawer.querySelectorAll('[data-nav-link]');
      function openNav() {
        drawer.classList.add('open');
        overlay.classList.add('open');
        openBtn.setAttribute('aria-expanded', 'true');
        closeBtn.focus();
      }
      function closeNav() {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        openBtn.setAttribute('aria-expanded', 'false');
        openBtn.focus();
      }
      openBtn.addEventListener('click', openNav);
      closeBtn.addEventListener('click', closeNav);
      overlay.addEventListener('click', closeNav);
      navLinks.forEach(function (link) { link.addEventListener('click', closeNav); });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawer.classList.contains('open')) closeNav();
      });
    })();

    // 3. Scroll shadow on the sticky header
    (function () {
      var header = document.getElementById('main-header');
      var spacer = document.getElementById('header-spacer');
      if (!header) return;
      window.addEventListener('scroll', function () {
        var scrolled = window.scrollY > 20;
        header.classList.toggle('shadow-md', scrolled);
        header.classList.toggle('shadow-sm', !scrolled);
        if (spacer) spacer.style.height = header.offsetHeight + 'px';
      }, { passive: true });
    })();

    // 4. Mark active nav link based on current page
    (function () {
      var page = window.location.pathname.split('/').pop() || 'index.html';
      document.querySelectorAll('#main-header a[href], #mobile-nav a[href]')
        .forEach(function (a) {
          var href     = (a.getAttribute('href') || '');
          var linkPage = href.split('#')[0].replace('./', '');
          if (linkPage && linkPage === page) {
            a.classList.add('text-primary', 'font-semibold');
            a.setAttribute('aria-current', 'page');
          }
        });
    })();
  }

  // ── Initialise footer behaviours after the partial is injected ──────────
  function initFooter() {
    document.querySelectorAll('.footer-year').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  // ── Public API ──────────────────────────────────────────────────────────
  window.loadPartial = loadPartial;
  window.initHeader  = initHeader;
  window.initFooter  = initFooter;

  // Auto-load header immediately (script placed right after #site-header)
  if (document.getElementById('site-header')) {
    loadPartial('header', 'site-header', initHeader);
  }
})();
