document.addEventListener('DOMContentLoaded', function () {

    // ==========================================================
    // MOBILE NAV TOGGLE
    // ==========================================================
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            nav.classList.toggle('open');
        });
    }

    // Close nav on link click
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });

    // ==========================================================
    // HERO CAROUSEL
    // ==========================================================
    var slides = document.querySelectorAll('.carousel-slide');
    var currentSlide = 0;

    if (slides.length > 0) {
        setInterval(function () {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }

    // ==========================================================
    // TYPING EFFECT ON SLOGAN
    // ==========================================================
    var typingElement = document.getElementById('typingText');
    if (typingElement) {
        var text = '"El cambio que el Perú necesita"';
        var charIndex = 0;
        typingElement.textContent = '';

        function typeChar() {
            if (charIndex < text.length) {
                typingElement.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 60);
            } else {
                typingElement.classList.add('done');
            }
        }

        setTimeout(typeChar, 1500);
    }

    // ==========================================================
    // VOTE COUNTER (localStorage)
    // ==========================================================
    var contadorSpan = document.getElementById('contadorVotos');
    var btnVotar = document.getElementById('btnVotar');

    var votos = localStorage.getItem('votosCPP');
    if (votos === null) {
        votos = 0;
        localStorage.setItem('votosCPP', String(votos));
    } else {
        votos = parseInt(votos, 10);
    }
    contadorSpan.textContent = votos;

    if (btnVotar) {
        btnVotar.addEventListener('click', function () {
            var oldCount = votos;
            votos++;
            localStorage.setItem('votosCPP', String(votos));

            // Animated counter
            animateCounter(contadorSpan, oldCount, votos);

            // Button feedback
            var textoOriginal = this.textContent;
            this.textContent = 'Voto registrado';
            this.style.background = 'linear-gradient(135deg, #006600, #004400)';
            this.style.transform = 'scale(1.05)';
            this.style.pointerEvents = 'none';

            setTimeout(function () {
                btnVotar.textContent = textoOriginal;
                btnVotar.style.background = '';
                btnVotar.style.transform = '';
                btnVotar.style.pointerEvents = '';
            }, 2500);

            lanzarConfeti();
        });
    }

    // Animated counter function
    function animateCounter(element, start, end) {
        var duration = 1000;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.round(start + (end - start) * eased);
            element.textContent = current;
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    // ==========================================================
    // CONFETTI
    // ==========================================================
    function lanzarConfeti() {
        var colores = ['#cc0000', '#ffd700', '#ffffff', '#990000', '#ff6600', '#00aa88', '#ff4444'];

        // Add keyframes if not present
        if (!document.getElementById('confeti-keyframes')) {
            var style = document.createElement('style');
            style.id = 'confeti-keyframes';
            style.textContent = '@keyframes caerConfeti { 0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; } 100% { transform: translateY(110vh) rotate(720deg) scale(0.3); opacity: 0; } }';
            document.head.appendChild(style);
        }

        for (var i = 0; i < 60; i++) {
            var confeti = document.createElement('div');
            var size = Math.random() * 10 + 5;
            var left = Math.random() * 100;
            var delay = Math.random() * 2;
            var duration = Math.random() * 2 + 2;
            var color = colores[Math.floor(Math.random() * colores.length)];
            var isCircle = Math.random() > 0.5;
            var rotation = Math.random() * 360;

            confeti.style.cssText = [
                'position: fixed',
                'left: ' + left + '%',
                'top: -20px',
                'width: ' + size + 'px',
                'height: ' + (isCircle ? size : size * 0.6) + 'px',
                'background: ' + color,
                'border-radius: ' + (isCircle ? '50%' : '2px'),
                'pointer-events: none',
                'z-index: 9999',
                'animation: caerConfeti ' + duration + 's ' + delay + 's linear forwards',
                'transform: rotate(' + rotation + 'deg)',
                'box-shadow: 0 0 4px rgba(0,0,0,0.1)'
            ].join(';');

            document.body.appendChild(confeti);
            setTimeout(function (el) { el.remove(); }, (duration + delay) * 1000 + 200, confeti);
        }
    }

    // ==========================================================
    // SCROLL FADE-UP ANIMATIONS (Intersection Observer)
    // ==========================================================
    var fadeElements = document.querySelectorAll('.fade-up');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show all
        fadeElements.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    // ==========================================================
    // HEADER SCROLL EFFECT
    // ==========================================================
    var header = document.getElementById('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });

    // ==========================================================
    // PARALLAX EFFECT ON HERO
    // ==========================================================
    var hero = document.querySelector('.hero');
    var heroCarousel = document.querySelector('.hero-carousel');

    if (hero && heroCarousel) {
        window.addEventListener('scroll', function () {
            var scrollY = window.scrollY;
            var heroHeight = hero.offsetHeight;
            if (scrollY <= heroHeight) {
                var offset = scrollY * 0.35;
                heroCarousel.style.transform = 'translateY(' + offset + 'px)';
            }
        }, { passive: true });
    }

    // ==========================================================
    // SMOOTH SCROLL FOR NAV (fallback for older browsers)
    // ==========================================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target && this.getAttribute('href') !== '#') {
                e.preventDefault();
                var headerHeight = header ? header.offsetHeight : 70;
                var targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log('%c CPP · Con Progreso se Progresa ', 'background: #cc0000; color: #ffd700; font-weight: bold; font-size: 16px; padding: 8px 16px; border-radius: 4px;');
    console.log('%c Elecciones Perú 2026 ', 'color: #1a1a1a; font-size: 12px;');
});
