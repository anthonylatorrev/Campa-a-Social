(function () {
    'use strict';

    var comunicados = [
        {
            id: 1,
            fecha: '22 de junio, 2026',
            titulo: 'Stiven presenta su plan de salud integral en el Cusco',
            resumen: 'Durante un multitudinario mitin en la Plaza de Armas del Cusco, el candidato presidencial Stiven Cuentas Ramos presentó los pilares de su reforma sanitaria, que incluye atención primaria universal y telemedicina para zonas rurales.',
            categoria: 'Eventos',
            contenido: 'Stiven Cuentas Ramos, candidato a la Presidencia por CPP, presentó esta mañana su ambicioso plan de salud integral ante más de cinco mil personas reunidas en la Plaza de Armas del Cusco. La propuesta contempla la construcción de 50 centros de atención primaria en regiones prioritarias, un programa de telemedicina que cubrirá el 90% de distritos rurales, y la implementación de historias clínicas digitales interconectadas a nivel nacional. "La salud no puede seguir siendo un privilegio. Es un derecho que el Estado debe garantizar con presencia real en cada rincón del Perú", declaró Cuentas Ramos.'
        },
        {
            id: 2,
            fecha: '21 de junio, 2026',
            titulo: 'CPP rechaza tajantemente declaraciones de George Pig',
            resumen: 'El partido emitió un comunicado oficial condenando las recientes declaraciones del candidato opositor, calificándolas de "irresponsables y fuera de la realidad".',
            categoria: 'Prensa',
            contenido: 'La dirigencia de Con Progreso se Progresa (CPP) emitió un comunicado oficial en el que rechaza categóricamente las declaraciones realizadas por el candidato de TOCINO, George Pig, quien afirmó que "las propuestas de CPP son inviables y carecen de sustento técnico". El portavoz del partido señaló que dichas afirmaciones "son falsas y buscan desviar la atención de la falta de propuestas concretas del adversario". Asimismo, CPP reiteró su compromiso con el debate de ideas y la confrontación democrática de propuestas.'
        },
        {
            id: 3,
            fecha: '20 de junio, 2026',
            titulo: 'Dudú anuncia gira cultural por el sur andino',
            resumen: 'El ministro de Cultura propuesto recorrerá siete regiones del sur peruano para promover la descentralización cultural y el rescate de tradiciones ancestrales.',
            categoria: 'Política',
            contenido: 'Dudú Lizarzaburu Flores, propuesto como Ministro de Cultura, anunció una gira que lo llevará por siete regiones del sur andino: Cusco, Apurímac, Ayacucho, Puno, Arequipa, Moquegua y Tacna. El objetivo es establecer mesas de trabajo con gestores culturales locales y diseñar un plan de descentralización cultural que permita distribuir equitativamente los recursos del Fondo Nacional de Cultura. "Durante décadas la cultura ha sido centralizada en Lima. Es hora de que cada región tenga voz y presupuesto para desarrollar su propio tejido cultural", señaló Dudú.'
        },
        {
            id: 4,
            fecha: '19 de junio, 2026',
            titulo: 'Anthony La Torre presenta plan de transformación digital del Estado',
            resumen: 'El candidato a ministro de Tecnología propuso reducir la burocracia estatal en un 70% mediante inteligencia artificial y plataformas digitales integradas.',
            categoria: 'Prensa',
            contenido: 'Anthony La Torre Velazco, propuesto como Ministro de Tecnología, presentó su plan de transformación digital del Estado peruano. La propuesta incluye la creación de una Plataforma Única de Servicios Digitales que integre todas las entidades públicas, la implementación de inteligencia artificial para automatizar trámites administrativos, y un programa masivo de alfabetización digital dirigido a adultos mayores y poblaciones vulnerables. "Vamos a reducir la burocracia en un 70% en los primeros dos años de gobierno. Menos colas, menos coimas, más eficiencia", afirmó.'
        },
        {
            id: 5,
            fecha: '18 de junio, 2026',
            titulo: 'Voluntarios CPP realizan jornada de limpieza en Lima Metropolitana',
            resumen: 'Más de 500 voluntarios del partido participaron en una jornada de limpieza y reforestación en seis distritos de Lima como parte del programa "CPP en tu comunidad".',
            categoria: 'Regiones',
            contenido: 'En una demostración de compromiso social, más de 500 voluntarios de CPP participaron en una jornada de limpieza y reforestación que abarcó seis distritos de Lima Metropolitana: San Juan de Lurigancho, Villa El Salvador, Comas, Carabayllo, San Martín de Porres y Ate. La actividad forma parte del programa "CPP en tu comunidad", que busca acercar al partido a las necesidades concretas de la población. Se recolectaron más de 3 toneladas de residuos y se plantaron 200 árboles en zonas urbanas.'
        },
        {
            id: 6,
            fecha: '17 de junio, 2026',
            titulo: 'CPP propone Ley de Transparencia Total para todos los actos de gobierno',
            resumen: 'La iniciativa legislativa busca que todas las compras, contratos y decisiones del Estado sean transmitidas en vivo y publicadas en formatos abiertos.',
            categoria: 'Política',
            contenido: 'El equipo técnico de CPP presentó ante el Congreso de la República un proyecto de Ley de Transparencia Total, que obligaría a todas las entidades del Estado a transmitir en vivo sus procesos de contratación y licitación, así como a publicar en formatos abiertos y reutilizables toda la información presupuestal. La propuesta incluye la creación de una plataforma ciudadana de veeduría digital y sanciones penales para funcionarios que oculten información pública.'
        },
        {
            id: 7,
            fecha: '16 de junio, 2026',
            titulo: 'Stiven se reúne con gremios de agricultores en Junín',
            resumen: 'El candidato presidencial escuchó las demandas de pequeños y medianos agricultores de la región Junín, comprometiéndose a incluir sus propuestas en el plan de gobierno.',
            categoria: 'Regiones',
            contenido: 'En el marco de su gira por el centro del país, Stiven Cuentas Ramos se reunió con representantes de gremios agrarios de Junín en la ciudad de Huancayo. Durante el encuentro, los agricultores expusieron sus principales demandas: acceso a créditos blandos, asistencia técnica gratuita, y la implementación de sistemas de riego tecnificado. El candidato se comprometió a incorporar estas propuestas en el plan de gobierno y a crear un Ministerio de Desarrollo Agrario con presencia descentralizada.'
        },
        {
            id: 8,
            fecha: '15 de junio, 2026',
            titulo: 'Comunicado oficial: Resultados de la segunda vuelta electoral',
            resumen: 'CPP emite un comunicado oficial agradeciendo a los peruanos por su participación y reafirmando su compromiso con la democracia y la transparencia del proceso electoral.',
            categoria: 'Prensa',
            contenido: 'La dirección nacional de Con Progreso se Progresa emite el siguiente comunicado oficial: "Agradecemos a todos los peruanos que ejercieron su derecho al voto en esta segunda vuelta electoral. Reconocemos la labor de la ONPE y el JNE por garantizar un proceso transparente y ordenado. Reafirmamos nuestro compromiso con la democracia y respetaremos los resultados oficiales. Seguimos firmes en nuestra convicción de que el cambio es posible y que juntos construiremos el Perú que merecemos."'
        },
        {
            id: 9,
            fecha: '14 de junio, 2026',
            titulo: 'CPP condena actos de violencia en mitin de la oposición',
            resumen: 'El partido se pronunció enérgicamente contra los actos violentos ocurridos durante un mitin de TOCINO, haciendo un llamado al diálogo y la paz social.',
            categoria: 'Política',
            contenido: 'CPP condena enérgicamente los actos de violencia ocurridos durante el mitin del partido TOCINO realizado en la ciudad de Trujillo, donde se reportaron enfrentamientos entre asistentes y personas no identificadas que dejaron varios heridos leves. "La violencia no tiene cabida en la democracia. Hacemos un llamado a todas las fuerzas políticas a conducir sus actividades con responsabilidad y respeto", declaró el vocero oficial del partido. CPP ofreció su apoyo a los heridos y reiteró su compromiso con la paz social.'
        },
        {
            id: 10,
            fecha: '13 de junio, 2026',
            titulo: 'Gran concentración en Plaza San Martín convocada por CPP',
            resumen: 'Miles de simpatizantes se dieron cita en el centro de Lima para el cierre de campaña, con la presencia de los cinco miembros de la plancha presidencial.',
            categoria: 'Eventos',
            contenido: 'Una multitud se congregó en la Plaza San Martín de Lima para el cierre de campaña de CPP. Los cinco miembros de la plancha presidencial —Stiven Cuentas Ramos, Dudú Lizarzaburu Flores, Anthony La Torre Velazco, Ginny Malena Farfan Carrion y Yajaira Huarcaya Cabrera— se dirigieron a los asistentes, presentando sus propuestas finales y haciendo un llamado a la unidad nacional. "Este 28 de junio, el Perú tiene una cita con su destino. Votemos por el cambio, votemos con esperanza", cerró Stiven.'
        },
        {
            id: 11,
            fecha: '12 de junio, 2026',
            titulo: 'Ginny Farfan propone reforma integral del sistema penitenciario',
            resumen: 'La Secretaria de Estado propuesta planteó un plan de rehabilitación y reinserción social para personas privadas de libertad, con énfasis en educación y trabajo.',
            categoria: 'Regiones',
            contenido: 'Ginny Malena Farfan Carrion, propuesta como Secretaria de Estado, presentó un ambicioso plan de reforma del sistema penitenciario peruano. La propuesta incluye la construcción de centros de rehabilitación con talleres productivos, programas de educación secundaria y técnica para internos, y un sistema de penas alternativas para delitos menores. "Una sociedad que no invierte en la rehabilitación de sus presos está condenada a tener más delincuencia. Este es un tema de seguridad ciudadana real", afirmó.'
        }
    ];

    var currentCategory = 'Todos';
    var currentPage = 1;
    var perPage = 3;
    var filteredComunicados = comunicados.slice();

    var listEl = document.getElementById('comunicadosList');
    var paginationEl = document.getElementById('pagination');
    var modalOverlay = document.getElementById('modalComunicado');
    var modalClose = document.getElementById('modalClose');
    var modalTitle = document.getElementById('modalTitle');
    var modalFecha = document.getElementById('modalFecha');
    var modalBadge = document.getElementById('modalBadge');
    var modalBody = document.getElementById('modalBody');
    var filterBtns = document.querySelectorAll('.filter-btn');

    function getInitials(name) {
        return name.split(' ').map(function (w) { return w.charAt(0); }).join('').substring(0, 2).toUpperCase();
    }

    var avatarColors = ['#cc0000', '#990000', '#ffd700', '#666', '#444', '#cc0000', '#990000', '#ffd700'];

    function render() {
        var start = (currentPage - 1) * perPage;
        var end = start + perPage;
        var pageItems = filteredComunicados.slice(start, end);

        listEl.innerHTML = '';

        if (pageItems.length === 0) {
            listEl.innerHTML = '<div class="comunicado-card" style="text-align:center;padding:48px;color:#888;"><p>No se encontraron comunicados en esta categoría.</p></div>';
            renderPagination();
            return;
        }

        pageItems.forEach(function (item) {
            var card = document.createElement('div');
            card.className = 'comunicado-card fade-up';

            var color = avatarColors[item.id % avatarColors.length];
            var categoriaLower = item.categoria.toLowerCase();

            card.innerHTML =
                '<div class="comunicado-meta">' +
                '<span class="comunicado-fecha">' + item.fecha + '</span>' +
                '<span class="comunicado-categoria">' + item.categoria + '</span>' +
                '</div>' +
                '<h3 class="comunicado-titulo">' + item.titulo + '</h3>' +
                '<p class="comunicado-resumen">' + item.resumen + '</p>' +
                '<button class="btn-leer-mas" data-id="' + item.id + '">Leer más</button>';

            listEl.appendChild(card);
        });

        observeFadeUp();
        renderPagination();

        listEl.querySelectorAll('.btn-leer-mas').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var id = parseInt(this.getAttribute('data-id'), 10);
                var item = comunicados.find(function (c) { return c.id === id; });
                if (item) {
                    openModal(item);
                }
            });
        });
    }

    function renderPagination() {
        var totalPages = Math.ceil(filteredComunicados.length / perPage);
        paginationEl.innerHTML = '';

        if (totalPages <= 1) return;

        var prevBtn = document.createElement('button');
        prevBtn.className = 'page-btn page-arrow';
        prevBtn.innerHTML = '&#8592;';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', function () {
            if (currentPage > 1) {
                currentPage--;
                render();
                window.scrollTo({ top: listEl.offsetTop - 120, behavior: 'smooth' });
            }
        });
        paginationEl.appendChild(prevBtn);

        for (var i = 1; i <= totalPages; i++) {
            (function (pageNum) {
                var btn = document.createElement('button');
                btn.className = 'page-btn' + (pageNum === currentPage ? ' active' : '');
                btn.textContent = pageNum;
                btn.addEventListener('click', function () {
                    currentPage = pageNum;
                    render();
                    window.scrollTo({ top: listEl.offsetTop - 120, behavior: 'smooth' });
                });
                paginationEl.appendChild(btn);
            })(i);
        }

        var nextBtn = document.createElement('button');
        nextBtn.className = 'page-btn page-arrow';
        nextBtn.innerHTML = '&#8594;';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', function () {
            if (currentPage < totalPages) {
                currentPage++;
                render();
                window.scrollTo({ top: listEl.offsetTop - 120, behavior: 'smooth' });
            }
        });
        paginationEl.appendChild(nextBtn);
    }

    function openModal(item) {
        modalTitle.textContent = item.titulo;
        modalFecha.textContent = item.fecha;
        modalBadge.textContent = item.categoria;
        modalBody.innerHTML = item.contenido.split('\n').map(function (p) {
            return '<p>' + p.trim() + '</p>';
        }).join('');
        modalOverlay.classList.add('active');
        document.body.classList.add('modal-open');
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function (e) {
        if (e.target === this) closeModal();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');
            currentCategory = this.getAttribute('data-filter');
            currentPage = 1;

            if (currentCategory === 'Todos') {
                filteredComunicados = comunicados.slice();
            } else {
                filteredComunicados = comunicados.filter(function (c) {
                    return c.categoria === currentCategory;
                });
            }

            render();
            window.scrollTo({ top: listEl.offsetTop - 120, behavior: 'smooth' });
        });
    });

    render();

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
