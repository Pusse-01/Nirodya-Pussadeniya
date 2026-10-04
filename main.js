/* nirodya.com — progressive enhancement only */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* current year */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* hairline under the nav once the page moves */
  var nav = document.getElementById('nav');
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      nav.classList.toggle('stuck', window.scrollY > 12);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* staggered reveal on scroll */
  var items = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.style.transitionDelay = Math.min(i, 5) * 60 + 'ms';
        el.classList.add('in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* scroll-spy: highlights the current section in the nav and in a post's TOC */
  function spy(links, rootMargin) {
    var items = Array.prototype.slice.call(links);
    var targets = items
      .map(function (a) {
        var h = a.getAttribute('href') || '';
        var i = h.indexOf('#');
        if (i < 0 || i === h.length - 1) return null;
        try { return document.querySelector(h.slice(i)); } catch (e) { return null; }
      })
      .filter(Boolean);
    if (!targets.length || !('IntersectionObserver' in window)) return;

    var visible = new Set();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) visible.add(e.target.id);
        else visible.delete(e.target.id);
      });
      var current = targets.filter(function (t) { return visible.has(t.id); })[0];
      items.forEach(function (a) {
        var h = a.getAttribute('href') || '';
        a.classList.toggle('active', !!current && h.slice(h.indexOf('#')) === '#' + current.id);
      });
    }, { rootMargin: rootMargin });
    targets.forEach(function (t) { io.observe(t); });
  }

  spy(document.querySelectorAll('.nav-links a[href*="#"]'), '-30% 0px -55% 0px');
  spy(document.querySelectorAll('.toc a[href^="#"]'), '-12% 0px -70% 0px');

})();
