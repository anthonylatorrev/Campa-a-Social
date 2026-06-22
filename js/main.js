document.addEventListener('DOMContentLoaded', function () {

    // ==========================================================
    // HERO PARTICLES
    // ==========================================================
    var particlesContainer = document.getElementById('heroParticles');

    if (particlesContainer) {
        var colors = ['#cc0000', '#ffd700', '#ffffff', '#ff4444', '#ffaa00'];
        var particleCount = 30;

        for (var i = 0; i < particleCount; i++) {
            var particle = document.createElement('div');
            particle.className = 'particle';
            var size = Math.random() * 6 + 2;
            var left = Math.random() * 100;
            var animDuration = Math.random() * 12 + 8;
            var delay = Math.random() * 15;
            var color = colors[Math.floor(Math.random() * colors.length)];
            var opacity = Math.random() * 0.4 + 0.1;

            particle.style.cssText = [
                'left: ' + left + '%',
                'width: ' + size + 'px',
                'height: ' + size + 'px',
                'background: ' + color,
                'opacity: ' + opacity,
                'animation-duration: ' + animDuration + 's',
                'animation-delay: ' + delay + 's'
            ].join(';');

            particlesContainer.appendChild(particle);
        }
    }

    // ==========================================================
    // MOBILE NAV TOGGLE
    // ==========================================================
    var navToggle = document.getElementById('navToggle');
    var nav = document.getElementById('nav');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            nav.classList.toggle('open');
        });
    }

    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });

    // ==========================================================
    // HERO CAROUSEL — 5 images, fade every 7s
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
    // DUPLICATE TESTIMONIALS FOR SEAMLESS LOOP
    // ==========================================================
    var testimoniosTrack = document.getElementById('testimoniosTrack');

    if (testimoniosTrack) {
        var cards = testimoniosTrack.querySelectorAll('.testimonio-card');
        cards.forEach(function (card) {
            var clone = card.cloneNode(true);
            testimoniosTrack.appendChild(clone);
        });
    }

    var testimoniosTrackReverse = document.getElementById('testimoniosTrackReverse');

    if (testimoniosTrackReverse) {
        var cardsReverse = testimoniosTrackReverse.querySelectorAll('.testimonio-card');
        cardsReverse.forEach(function (card) {
            var clone = card.cloneNode(true);
            testimoniosTrackReverse.appendChild(clone);
        });
    }

    // ==========================================================
    // ONPE ANIMATED COUNTERS + PROGRESS BAR
    // ==========================================================
    var votosCppEl = document.getElementById('votosCpp');
    var votosTocinoEl = document.getElementById('votosTocino');
    var onpeBarFill = document.getElementById('onpeBarFill');
    var onpeBarText = document.getElementById('onpeBarText');
    var diferenciaEl = document.getElementById('diferenciaVotos');
    var resultadosSection = document.getElementById('resultados');

    var votosCppTarget = 9188805;
    var votosTocinoTarget = 9148000;
    var diferenciaTarget = votosCppTarget - votosTocinoTarget;

    var onpeAnimated = false;

    function animateOnpe() {
        if (onpeAnimated) return;
        onpeAnimated = true;

        animateNumber(votosCppEl, 0, votosCppTarget, 2000);
        animateNumber(votosTocinoEl, 0, votosTocinoTarget, 2000);
        animateNumber(diferenciaEl, 0, diferenciaTarget, 2000);

        setTimeout(function () {
            onpeBarFill.style.width = '50.111%';
        }, 300);

        animateBarText();
    }

    function animateBarText() {
        var startPercent = 0;
        var targetPercent = 50.111;
        var duration = 1500;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = (startPercent + (targetPercent - startPercent) * eased).toFixed(3);
            onpeBarText.textContent = current + '%';
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                onpeBarText.textContent = targetPercent.toFixed(3) + '%';
            }
        }

        requestAnimationFrame(step);
    }

    if (resultadosSection && 'IntersectionObserver' in window) {
        var onpeObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateOnpe();
                    onpeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        onpeObserver.observe(resultadosSection);
    }

    // ==========================================================
    // ANIMATED NUMBER HELPER
    // ==========================================================
    function animateNumber(element, start, end, duration) {
        if (!element) return;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.round(start + (end - start) * eased);

            element.textContent = current.toLocaleString('es-PE');

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                element.textContent = end.toLocaleString('es-PE');
            }
        }

        requestAnimationFrame(step);
    }

    // ==========================================================
    // VOTE COUNTER (localStorage) + PAGE LOAD ANIMATION
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

    if (contadorSpan) {
        animateNumber(contadorSpan, 0, votos, 1500);
    }

    if (btnVotar) {
        btnVotar.addEventListener('click', function () {
            var oldCount = votos;
            votos++;
            localStorage.setItem('votosCPP', String(votos));

            animateNumber(contadorSpan, oldCount, votos, 800);

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

    // ==========================================================
    // CONFETTI
    // ==========================================================
    function lanzarConfeti() {
        var colores = ['#cc0000', '#ffd700', '#ffffff', '#990000', '#ff6600', '#00aa88', '#ff4444'];

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
    // SMOOTH SCROLL FOR NAV
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

    // ==========================================================
    // CANDIDATE MODALS
    // ==========================================================
    var modalTriggers = document.querySelectorAll('[data-modal]');
    var modalOverlays = document.querySelectorAll('.modal-overlay');
    var modalCloseButtons = document.querySelectorAll('.modal-close');

    function openModal(id) {
        var modal = document.getElementById(id);
        if (modal) {
            modal.classList.add('active');
            document.body.classList.add('modal-open');
        }
    }

    function closeAllModals() {
        modalOverlays.forEach(function (m) {
            m.classList.remove('active');
        });
        document.body.classList.remove('modal-open');
    }

    modalTriggers.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var modalId = this.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    modalCloseButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            closeAllModals();
        });
    });

    modalOverlays.forEach(function (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === this) {
                closeAllModals();
            }
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // ==========================================================
    // VOLUNTEER FORM
    // ==========================================================
    var voluntariosForm = document.getElementById('voluntariosForm');
    var formMensaje = document.getElementById('formMensaje');

    if (voluntariosForm) {
        voluntariosForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var nombre = document.getElementById('volNombre').value.trim();
            var email = document.getElementById('volEmail').value.trim();
            var telefono = document.getElementById('volTelefono').value.trim();
            var region = document.getElementById('volRegion').value;

            if (!nombre || !email || !telefono || !region) {
                formMensaje.textContent = 'Todos los campos son obligatorios.';
                formMensaje.className = 'form-mensaje error';
                return;
            }

            var voluntariosActuales = parseInt(localStorage.getItem('voluntariosCPP') || '0', 10);
            var nuevos = voluntariosActuales + 1;
            localStorage.setItem('voluntariosCPP', String(nuevos));

            formMensaje.textContent = 'Gracias, ' + nombre + '! Te hemos registrado en ' + region + '. Te contactaremos pronto.';
            formMensaje.className = 'form-mensaje exito';

            var volCountEl = document.getElementById('voluntariosCount');
            if (volCountEl) {
                animateNumber(volCountEl, voluntariosActuales, nuevos, 800);
            }

            voluntariosForm.reset();

            lanzarConfeti();
        });
    }

    // Inicializar contador de voluntarios
    var volCountEl = document.getElementById('voluntariosCount');
    if (volCountEl) {
        var volStored = parseInt(localStorage.getItem('voluntariosCPP') || '0', 10);
        volCountEl.textContent = volStored.toLocaleString('es-PE');
    }

    // ==========================================================
    // SMOOTH SCROLL — also for new nav links
    // ==========================================================

    console.log('%c CPP · Con Progreso se Progresa ', 'background: #cc0000; color: #ffd700; font-weight: bold; font-size: 16px; padding: 8px 16px; border-radius: 4px;');
    console.log('%c Elecciones Perú 2026 ', 'color: #1a1a1a; font-size: 12px;');
});
