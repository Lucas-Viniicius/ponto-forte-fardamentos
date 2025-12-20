document.querySelectorAll('.carrossel').forEach((carrossel) => {

    const indicadores = carrossel.nextElementSibling;
    const dots = indicadores.querySelectorAll('.dot');

    carrossel.addEventListener('scroll', () => {
        const largura = carrossel.offsetWidth;
        const index = Math.round(carrossel.scrollLeft / largura);

        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            carrossel.scrollTo({
                left: carrossel.offsetWidth * index,
                behavior: 'smooth'
            });
        });
    });

});
