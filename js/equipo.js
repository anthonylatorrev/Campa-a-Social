(function () {
    'use strict';

    /* ---------- TYPEWRITER ---------- */
    function initTypewriter() {
        var el = document.getElementById('typewriterText');
        if (!el) return;
        var text = 'Conoce a los profesionales que conforman la plancha presidencial de Con Progreso se Progresa.';
        var i = 0;
        var speed = 50;

        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        setTimeout(type, 600);
    }

    initTypewriter();

    /* ---------- INTERSECTION OBSERVER (Fade-Up) ---------- */
    function initFadeUp() {
        var els = document.querySelectorAll('.fade-up');
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

    initFadeUp();

    /* ---------- TILT 3D ---------- */
    function initTilt() {
        var cards = document.querySelectorAll('[data-tilt]');
        var maxTilt = 5;

        cards.forEach(function (card) {
            card.addEventListener('mousemove', function (e) {
                var rect = card.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                var centerX = rect.width / 2;
                var centerY = rect.height / 2;
                var rotateX = ((y - centerY) / centerY) * -maxTilt;
                var rotateY = ((x - centerX) / centerX) * maxTilt;

                card.style.transform =
                    'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
            });

            card.addEventListener('mouseleave', function () {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
        });
    }

    initTilt();

    /* ---------- PARALLAX HERO ---------- */
    function initParallax() {
        var banner = document.getElementById('heroBanner');
        var bg = document.getElementById('parallaxBg');
        if (!banner || !bg) return;

        window.addEventListener('scroll', function () {
            var scrollY = window.scrollY;
            var offset = scrollY * 0.35;
            bg.style.transform = 'translateY(' + offset + 'px)';
        }, { passive: true });
    }

    initParallax();

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

    if (nav) {
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('open');
                navToggle.classList.remove('active');
                document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
                    d.classList.remove('open');
                });
            });
        });
    }

})();
