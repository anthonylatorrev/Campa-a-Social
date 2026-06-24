(function () {
    'use strict';

    /* ---------- ANIMATIONS OBSERVER ---------- */
    function initAnimations() {
        var els = document.querySelectorAll('.fade-up, .zoom-in');
        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

            els.forEach(function (el) {
                if (!el.classList.contains('visible')) {
                    observer.observe(el);
                } else {
                    el.classList.add('visible');
                }
            });
        } else {
            els.forEach(function (el) { el.classList.add('visible'); });
        }
    }

    initAnimations();

    /* ---------- HEADER SCROLL ---------- */
    var header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function () {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }, { passive: true });
    }

    /* ---------- MOBILE NAV ---------- */
    var navToggle = document.getElementById('navToggle');
    var nav = document.getElementById('nav');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            nav.classList.toggle('open');
        });
    }

    document.querySelectorAll('.nav-dropdown-toggle').forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            e.stopPropagation();
            var parent = this.closest('.nav-dropdown');
            if (parent) parent.classList.toggle('open');
        });
    });

    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('open');
            navToggle.classList.remove('active');
            document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
                d.classList.remove('open');
            });
        });
    });

})();
