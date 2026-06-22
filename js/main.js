// ============================================================
// CONTADOR DE VOTOS (con localStorage)
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    const contadorSpan = document.getElementById('contadorVotos');
    const btnVotar = document.getElementById('btnVotar');

    // Cargar votos guardados
    let votos = localStorage.getItem('votosCPP');
    if (votos === null) {
        votos = 0;
        localStorage.setItem('votosCPP', String(votos));
    } else {
        votos = parseInt(votos, 10);
    }
    contadorSpan.textContent = votos;

    // Evento de voto
    if (btnVotar) {
        btnVotar.addEventListener('click', function () {
            votos++;
            localStorage.setItem('votosCPP', String(votos));
            contadorSpan.textContent = votos;

            // Feedback visual
            const textoOriginal = this.textContent;
            this.textContent = '✅ ¡Gracias por tu voto!';
            this.style.backgroundColor = '#006600';
            setTimeout(() => {
                this.textContent = textoOriginal;
                this.style.backgroundColor = '#cc0000';
            }, 2500);

            // Disparar confeti (opcional)
            lanzarConfeti();
        });
    }
});

// ============================================================
// CONFETI AL VOTAR (pequeño detalle)
// ============================================================
function lanzarConfeti() {
    const colores = ['#cc0000', '#ffcc00', '#ffffff', '#990000', '#ff6600'];
    for (let i = 0; i < 30; i++) {
        const confeti = document.createElement('div');
        confeti.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: -10px;
                width: ${Math.random() * 8 + 4}px;
                height: ${Math.random() * 8 + 4}px;
                background: ${colores[Math.floor(Math.random() * colores.length)]};
                border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                pointer-events: none;
                z-index: 9999;
                animation: caerConfeti ${Math.random() * 2 + 2}s linear forwards;
            `;
        document.body.appendChild(confeti);
        setTimeout(() => confeti.remove(), 4000);
    }
}

// Inyectar keyframes para el confeti si no existen
if (!document.getElementById('confeti-keyframes')) {
    const style = document.createElement('style');
    style.id = 'confeti-keyframes';
    style.textContent = `
            @keyframes caerConfeti {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
            }
        `;
    document.head.appendChild(style);
}

console.log('🇵🇪 CPP · Con Progreso se Progresa · Elecciones 2026');