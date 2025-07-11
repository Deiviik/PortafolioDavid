document.addEventListener('DOMContentLoaded', function() {
    // Efecto Máquina de Escribir para el subtítulo
    const subtitulo = document.querySelector('#inicio .subtitulo-animado');
    if (subtitulo) {
        const textoOriginal = subtitulo.textContent;
        subtitulo.textContent = ''; // Limpiar el texto para la animación
        let i = 0;
        function maquinaEscribir() {
            if (i < textoOriginal.length) {
                subtitulo.textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(maquinaEscribir, 100); // Velocidad de escritura
            }
        }
        setTimeout(maquinaEscribir, 500); // Iniciar después de un breve retraso
    }

    // Animación de aparición de elementos al hacer scroll
    const observerOptions = {
        root: null, // El viewport
        rootMargin: '0px',
        threshold: 0.1 // Porcentaje del elemento visible para disparar la animación
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Elementos a animar
    const elementosAnimar = document.querySelectorAll('section h2, #sobre-mi p, .icono-skill, .proyecto, #contacto p, #contacto .redes-sociales a');
    
    elementosAnimar.forEach(el => {
        el.classList.add('oculto'); // Clase inicial para ocultar
        observer.observe(el);
    });
});

// Asignar --skill-index para animación escalonada de iconos
const skills = document.querySelectorAll('.icono-skill');
skills.forEach((skill, index) => {
    skill.style.setProperty('--skill-index', index);
});
