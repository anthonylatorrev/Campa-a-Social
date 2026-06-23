(function () {
    'use strict';

    /* ==========================================================
       DATOS: Artículos de blog
       ========================================================== */
    var articulos = [
        {
            id: 1,
            titulo: 'La educación digital como motor del desarrollo nacional',
            autor: 'Stiven Cuentas Ramos',
            fecha: '20 de junio, 2026',
            extracto: 'La brecha digital no es solo un problema de infraestructura, es una barrera para la movilidad social. En este artículo, nuestro candidato reflexiona sobre cómo la tecnología puede democratizar la educación en el Perú.',
            contenido: 'La educación es el camino más corto hacia el desarrollo. Pero en el Perú del siglo XXI, la educación sin tecnología es como un auto sin combustible: tiene el potencial pero no llega a destino. La pandemia nos mostró cruelmente las brechas: mientras algunos estudiantes accedían a clases virtuales con fibra óptica, otros caminaban horas para encontrar una señal precaria de internet. Como candidato a la Presidencia, propongo un plan nacional de conectividad educativa que garantice internet gratuito en todas las instituciones educativas públicas del país, acompañado de dispositivos y capacitación docente. No podemos seguir permitiendo que el código postal de nacimiento determine la calidad de la educación que recibe un peruano.'
        },
        {
            id: 2,
            titulo: 'Cultura descentralizada: el arte que une al Perú',
            autor: 'Dudú Lizarzaburu Flores',
            fecha: '18 de junio, 2026',
            extracto: 'El arte no puede seguir concentrado en Lima. Necesitamos una revolución cultural que lleve recursos, visibilidad y oportunidades a cada rincón del país.',
            contenido: 'Soy músico de formación y gestor cultural por convicción. He recorrido el Perú de punta a punta y en cada lugar encuentro talento extraordinario que no tiene oportunidades. Hay músicos excepcionales en Cajamarca, pintores geniales en Ayacucho, bailarines increíbles en Puno. Pero todos tienen algo en común: la falta de recursos y plataformas para mostrar su arte. Como futuro Ministro de Cultura, mi compromiso es crear un Fondo Nacional de Cultura que distribuya el 70% de sus recursos a regiones fuera de Lima. También impulsaré la creación de centros culturales descentralizados y un programa de intercambio artístico internacional para que el talento peruano brille en el mundo.'
        },
        {
            id: 3,
            titulo: 'Transformación digital: más que palabras, una urgencia nacional',
            autor: 'Anthony La Torre Velazco',
            fecha: '16 de junio, 2026',
            extracto: 'Perder horas en trámites burocráticos no es una tradición, es un fracaso del Estado. La inteligencia artificial puede y debe revolucionar la gestión pública.',
            contenido: 'Cada año, los peruanos perdemos millones de horas-hombre haciendo trámites burocráticos que podrían resolverse en minutos con tecnología adecuada. Esto no es un problema menor: es un lastre para nuestra productividad como país. Como ingeniero de sistemas, sé que la transformación digital del Estado no solo es posible, sino urgente. Propongo la creación de una Plataforma Única de Servicios Digitales que integre a todas las entidades públicas, eliminando la necesidad de presentar documentos que el Estado ya tiene. Además, implementaremos inteligencia artificial para automatizar procesos repetitivos, liberando a los funcionarios para tareas de mayor valor. La tecnología no es el futuro, es el presente. Y el Estado peruano no puede seguir anclado en el pasado.'
        }
    ];

    var articulosContainer = document.getElementById('articulosContainer');
    var modalOverlay = document.getElementById('modalArticulo');
    var modalClose = document.getElementById('modalClose');
    var modalTitle = document.getElementById('modalTitle');
    var modalAutor = document.getElementById('modalAutor');
    var modalFecha = document.getElementById('modalFecha');
    var modalBody = document.getElementById('modalBody');

    function renderArticulos() {
        if (!articulosContainer) return;
        articulosContainer.innerHTML = '';

        articulos.forEach(function (art) {
            var card = document.createElement('div');
            card.className = 'articulo-card fade-up';

            var imgSrc = 'img/bannerchino.jpg';
            if (art.id === 2) imgSrc = 'img/bannerdudu.jpg';
            if (art.id === 3) imgSrc = 'img/banneranthony.jpg';

            card.innerHTML =
                '<div class="articulo-img"><img src="' + imgSrc + '" alt="' + art.titulo + '" loading="lazy" /></div>' +
                '<div class="articulo-body">' +
                '<div class="articulo-meta">' +
                '<span class="articulo-autor">' + art.autor + '</span>' +
                '<span>' + art.fecha + '</span>' +
                '</div>' +
                '<h3>' + art.titulo + '</h3>' +
                '<p>' + art.extracto + '</p>' +
                '<button class="btn-leer-articulo" data-id="' + art.id + '">Leer artículo</button>' +
                '</div>';

            articulosContainer.appendChild(card);
        });

        observeFadeUp();

        articulosContainer.querySelectorAll('.btn-leer-articulo').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var id = parseInt(this.getAttribute('data-id'), 10);
                var art = articulos.find(function (a) { return a.id === id; });
                if (art) openModalArticulo(art);
            });
        });
    }

    function openModalArticulo(art) {
        modalTitle.textContent = art.titulo;
        modalAutor.textContent = art.autor;
        modalFecha.textContent = art.fecha;
        modalBody.innerHTML = art.contenido.split('\n').map(function (p) {
            return '<p>' + p.trim() + '</p>';
        }).join('');
        modalOverlay.classList.add('active');
        document.body.classList.add('modal-open');
    }

    if (modalClose) {
        modalClose.addEventListener('click', function () {
            modalOverlay.classList.remove('active');
            document.body.classList.remove('modal-open');
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function (e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.classList.remove('modal-open');
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });

    /* ==========================================================
       DATOS: Testimonios precargados (los mismos del index.html)
       ========================================================== */
    var testimoniosIniciales = [
        { nombre: 'María Quispe', usuario: '@maria_quispe', fecha: '22 jun · 10:45 a. m.', texto: 'Stiven es la única opción seria. Ya basta de payasos en el poder. Sus propuestas de educación digital son exactamente lo que necesitamos.', likes: 892, color: '#cc0000' },
        { nombre: 'Carlos Mendoza', usuario: '@carlos_m', fecha: '22 jun · 9:32 a. m.', texto: 'No sé si votar por él, pero sus propuestas son mejores que las de los demás. El decálogo me pareció sólido, especialmente salud mental.', likes: 445, color: '#ffd700' },
        { nombre: 'Lucía Torres', usuario: '@lucia_tech', fecha: '22 jun · 8:15 a. m.', texto: 'Finalmente alguien que habla de tecnología y transformación digital como ejes de gobierno. Anthony La Torre sabe de lo que habla.', likes: 1200, color: '#990000' },
        { nombre: 'George Fan', usuario: '@george_fan', fecha: '22 jun · 7:50 a. m.', texto: 'George Pig tiene más experiencia política. Esto es puro show mediático. No me convencen con promesas vacías.', likes: 567, color: '#666' },
        { nombre: 'Rosa Ángeles', usuario: '@rosaura_andes', fecha: '21 jun · 10:20 p. m.', texto: 'Me gusta que hablen de descentralización cultural. Soy de Cajamarca y nunca un político ha puesto un pie aquí. Veremos si cumplen.', likes: 234, color: '#cc0000' },
        { nombre: 'Pedro Lince', usuario: '@pedro_lince', fecha: '21 jun · 8:05 p. m.', texto: 'He investigado sus propuestas una por una. Tienen pies y cabeza. No son ocurrencias, son políticas públicas bien pensadas.', likes: 1800, color: '#990000' },
        { nombre: 'Ana Contreras', usuario: '@ana_contreras', fecha: '21 jun · 6:30 p. m.', texto: '¿Otro político más? Estoy harta de promesas que se las lleva el viento. Todos dicen lo mismo antes de llegar al poder.', likes: 2100, color: '#444' },
        { nombre: 'José Sierra', usuario: '@jose_sierra', fecha: '21 jun · 5:15 p. m.', texto: 'El decálogo me convenció. Educación digital y salud mental son temas que ningún otro candidato está tocando. Van a tener mi voto.', likes: 678, color: '#cc0000' },
        { nombre: 'Miguel Torres', usuario: '@miguel_t', fecha: '21 jun · 4:00 p. m.', texto: 'No los conocía hasta hoy, pero su plan de gobierno es el más sólido que he leído en años. Me gusta que sean realistas.', likes: 345, color: '#ffd700' },
        { nombre: 'Cultura Viva', usuario: '@cultura_viva', fecha: '21 jun · 2:45 p. m.', texto: 'Dudú como ministro de cultura sería un gran acierto. Alguien que entiende el arte más allá de Lima. Apoyo total a esta propuesta.', likes: 901, color: '#990000' },
        { nombre: 'Lucía Paredes', usuario: '@lucia_paredes', fecha: '23 jun · 11:30 a. m.', texto: 'Las propuestas de Stiven sobre transparencia me parecen acertadas. Necesitamos un gobierno que rinda cuentas, no que las esconda.', likes: 723, color: '#cc0000' },
        { nombre: 'Ricardo Montero', usuario: '@rick_montero', fecha: '23 jun · 10:15 a. m.', texto: 'Soy escéptico de nacimiento, pero el decálogo de gobierno me parece realista. Sin promesas imposibles, sin populismo barato.', likes: 512, color: '#ffd700' },
        { nombre: 'Carmen Pumacahua', usuario: '@carmen_andes', fecha: '23 jun · 9:00 a. m.', texto: 'Una propuesta de cultura descentralizada como la de Dudú me hace sentir que por fin alguien piensa en las regiones. Desde Ayacucho, apoyo total.', likes: 1100, color: '#990000' },
        { nombre: 'Fernando Gutiérrez', usuario: '@fer_gutierrez', fecha: '23 jun · 8:20 a. m.', texto: 'No sé si votar por ellos, pero al menos se nota que hay un equipo armado. No es un candidato solo con ocurrencias de último minuto.', likes: 389, color: '#666' },
        { nombre: 'Sofía Vargas', usuario: '@sofia_vargas', fecha: '23 jun · 7:45 a. m.', texto: 'La tecnología como eje de gobierno no es el futuro, es el presente. Anthony La Torre entiende que la transformación digital es urgente, no opcional.', likes: 834, color: '#cc0000' },
        { nombre: 'Jorge Huamán', usuario: '@jorge_huaman', fecha: '22 jun · 9:30 p. m.', texto: 'Vivo en el extranjero pero sigo la campaña. Stiven representa una esperanza real. Ojalá los peruanos sepamos elegir esta vez.', likes: 2300, color: '#990000' },
        { nombre: 'Mónica Rivas', usuario: '@monica_rivas', fecha: '22 jun · 8:10 p. m.', texto: 'Salud mental en la agenda política. Suena increíble pero es cierto. Si cumplen aunque sea la mitad de lo que prometen, ya es un avance enorme.', likes: 1500, color: '#ffd700' },
        { nombre: 'Pedro Castillo', usuario: '@pedro_c_trujillo', fecha: '22 jun · 6:50 p. m.', texto: 'He visto muchas campañas y esta es diferente. Menos gritos, más propuestas. Menos odio, más esperanza. Ojalá no me equivoque.', likes: 678, color: '#444' }
    ];

    var testimoniosGrid = document.getElementById('testimoniosGrid');
    var storageKey = 'cpp_blog_testimonios';

    /* ---------- Helper: initials ---------- */
    function getInitials(name) {
        return name.split(' ').map(function (w) { return w.charAt(0); }).join('').substring(0, 2).toUpperCase();
    }

    /* ---------- Load from localStorage ---------- */
    function loadTestimonios() {
        var stored = localStorage.getItem(storageKey);
        if (stored) {
            try {
                var parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed;
                }
            } catch (e) { /* ignore */ }
        }
        return null;
    }

    function saveTestimonios(data) {
        localStorage.setItem(storageKey, JSON.stringify(data));
    }

    var allTestimonios = loadTestimonios() || testimoniosIniciales.slice();

    if (!loadTestimonios()) {
        saveTestimonios(allTestimonios);
    }

    /* ---------- Render testimonios ---------- */
    function renderTestimonios() {
        if (!testimoniosGrid) return;
        testimoniosGrid.innerHTML = '';

        allTestimonios.forEach(function (t) {
            var card = document.createElement('div');
            card.className = 'testimonio-card fade-up';

            var initials = getInitials(t.nombre);
            var bgColor = t.color || '#cc0000';
            var likesDisplay = t.likes >= 1000 ? (t.likes / 1000).toFixed(1).replace('.0', '') + 'k' : t.likes;

            card.innerHTML =
                '<div class="testimonio-avatar" style="background:' + bgColor + ';">' + initials + '</div>' +
                '<div class="testimonio-body">' +
                '<div class="testimonio-header">' +
                '<span class="testimonio-name">' + t.nombre + '</span>' +
                '<span class="testimonio-user">' + t.usuario + '</span>' +
                '</div>' +
                '<span class="testimonio-date">' + t.fecha + '</span>' +
                '<p class="testimonio-text">' + t.texto + '</p>' +
                '<div class="testimonio-likes">' +
                '<span class="testimonio-like-icon">&#x1F44D;</span>' +
                '<span class="testimonio-like-count">' + likesDisplay + '</span>' +
                '</div>' +
                '</div>';

            testimoniosGrid.appendChild(card);
        });

        observeFadeUp();
    }

    /* ---------- Formulario ---------- */
    var form = document.getElementById('testimonioForm');
    var formMensaje = document.getElementById('formMensaje');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var nombreInput = document.getElementById('formNombre');
            var emailInput = document.getElementById('formEmail');
            var mensajeInput = document.getElementById('formMensajeInput');

            var nombre = nombreInput.value.trim();
            var email = emailInput.value.trim();
            var mensaje = mensajeInput.value.trim();

            var isValid = true;

            if (!nombre) {
                nombreInput.closest('.form-grupo').classList.add('invalid');
                isValid = false;
            } else {
                nombreInput.closest('.form-grupo').classList.remove('invalid');
            }

            if (!mensaje) {
                mensajeInput.closest('.form-grupo').classList.add('invalid');
                isValid = false;
            } else {
                mensajeInput.closest('.form-grupo').classList.remove('invalid');
            }

            if (!isValid) {
                formMensaje.textContent = 'Por favor completa los campos obligatorios.';
                formMensaje.className = 'form-mensaje error';
                return;
            }

            var colors = ['#cc0000', '#990000', '#ffd700', '#666', '#444'];
            var nuevo = {
                nombre: nombre,
                usuario: email ? '@' + email.split('@')[0] : '@' + nombre.toLowerCase().replace(/\s+/g, '_'),
                fecha: new Date().toLocaleDateString('es-PE', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }),
                texto: mensaje,
                likes: 0,
                color: colors[Math.floor(Math.random() * colors.length)]
            };

            allTestimonios.unshift(nuevo);
            saveTestimonios(allTestimonios);
            renderTestimonios();

            form.reset();
            formMensaje.textContent = 'Comentario publicado. Gracias por compartir tu opinión.';
            formMensaje.className = 'form-mensaje exito';

            window.scrollTo({ top: testimoniosGrid.offsetTop - 120, behavior: 'smooth' });
        });
    }

    renderArticulos();
    renderTestimonios();

    /* ---------- FADE-UP OBSERVER ---------- */
    function observeFadeUp() {
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
